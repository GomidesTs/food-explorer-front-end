import { Container, Form } from './styles';

import { Button } from './../../components/Button'
import { Input } from '../../components/Input'

import LogoFoodExplore from '../../assets/LogoFoodExplore.svg'

export function SignIn() {
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
                        />
                    </div>

                    <div className='information'>
                        <label htmlFor='password'>Senha</label>

                        <Input
                            id='password'
                            type='text'
                            placeholder='No mínimo 6 caracteres'
                        />
                    </div>

                    <Button
                        title='Entrar'
                    />
                </fieldset>

                <a href="#">
                    Criar uma conta
                </a>
            </Form>
        </Container>
    )
}