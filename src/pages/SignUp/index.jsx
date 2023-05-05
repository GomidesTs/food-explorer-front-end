import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiEyeOffLine, RiEyeLine } from 'react-icons/ri'

import { Container, Form } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { api } from '../../services/api'

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos!')
        }

        if (password.length < 6) {
            alert('A senha deve conter pelo menos 6 caracteres')
            return
        }

        setLoading(true)

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso!')
                navigate(-1)
                setLoading(false)
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar')
                }

                setLoading(false)
            })
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSignUp()
        }
    }

    function handleTogglePassword() {
        setShowPassword(!showPassword)
    }

    return (
        <Container>
            <img src={LogoFoodExplore} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor azul-escuro e ao lago escrito Food Explore na cor branca.' />

            <Form>
                <fieldset>
                    <legend>Crie sua conta</legend>

                    <div className='information'>
                        <label htmlFor='name'>Nome</label>

                        <Input
                            id='name'
                            type='text'
                            placeholder='Exemplo: Tulio Gomides'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className='information'>
                        <label htmlFor='email'>Email</label>

                        <Input
                            id='email'
                            type='text'
                            placeholder='exemplo@exemplo.com.br'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='information'>
                        <label htmlFor='password'>Senha</label>

                        <div>
                            <Input
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='No mínimo 6 caracteres'
                                onChange={e => setPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />

                            <span onClick={handleTogglePassword}>
                                {showPassword ? <RiEyeOffLine size={22} /> : <RiEyeLine size={22} />}
                            </span>
                        </div>
                    </div>

                    <Button
                        title={loading ? 'Salvando dados' : 'Criar conta'}
                        onClick={handleSignUp}
                        disabled={loading}
                    />
                </fieldset>

                <Link to='/'>
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
}