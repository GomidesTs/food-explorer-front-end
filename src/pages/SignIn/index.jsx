import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Container, Form } from './styles'

import { Button } from './../../components/Button'
import { Input } from '../../components/Input'

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn, loading } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <img src={LogoFoodExplore} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor azul-escuro e ao lago escrito Food Explore na cor branca.' />

            <Form>
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

                        <Input
                            id='password'
                            type='text'
                            placeholder='No mínimo 6 caracteres'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <Button
                        title={loading ? "Entrando" : "Entrar"}
                        onClick={handleSignIn}
                        disabled={loading}
                    />
                </fieldset>

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    )
}