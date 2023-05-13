import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiEyeOffLine, RiEyeLine } from 'react-icons/ri'

import { useAuth } from '../../hooks/auth'

import { Container, Form } from './styles'

import { Button } from './../../components/Button'
import { Input } from '../../components/Input'

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const { signIn, loading } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSignIn()
        }
    }

    function handleTogglePassword() {
        setShowPassword(!showPassword)
    }

    return (
        <Container>
            <img src={LogoFoodExplore} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor azul-escuro e ao lago escrito Food Explore na cor branca.' />

            <Form autoComplete='off'>
                <fieldset>

                    <legend>Faça login</legend>

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
                                {showPassword ? <RiEyeOffLine size={22} />: <RiEyeLine size={22} /> }
                            </span>
                        </div>
                    </div>

                    <Button
                        title={loading ? 'Entrando' : 'Entrar'}
                        onClick={handleSignIn}
                        disabled={loading}
                    />
                </fieldset>

                <Link to='/register'>
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    )
}