import { RiArrowLeftSLine, RiAddFill, RiSubtractFill } from 'react-icons/ri'

import { Container, Content, Dish, Action } from './styles'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { ButtonText } from './../../components/ButtonText'
import { Ingredients } from './../../components/Ingredients'

import Salad from '../../assets/salad.png'
import { Button } from './../../components/Button/index';

export function Details() {
    return (
        <Container>
            <Header />

            <Content>

                <Dish>
                    <ButtonText
                        title='Voltar'
                        icon={RiArrowLeftSLine}
                    />
                    <div className='description'>
                        <img src={Salad} alt='Foto do prato a ser comprado' />

                        <div>
                            <h1>Salada Ravanello</h1>

                            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

                            <Ingredients title='alface' />
                            <Ingredients title='cebola' />
                            <Ingredients title='pão naan' />
                            <Ingredients title='pepino' />
                            <Ingredients title='rabanete' />
                            <Ingredients title='tomate' />
                            <Action>
                                <div>
                                    <ButtonText
                                        icon={RiSubtractFill}
                                    />

                                    <span>01</span>

                                    <ButtonText
                                        icon={RiAddFill}
                                    />
                                </div>

                                <Button
                                    title='incluir'
                                    style={
                                        {
                                            maxHeight: 48,
                                            width: 192,
                                            padding: '1.2rem .4rem'
                                        }
                                    }
                                />
                            </Action>
                        </div>
                    </div>

                </Dish>
            </Content>

            <Footer />
        </Container>
    )
}