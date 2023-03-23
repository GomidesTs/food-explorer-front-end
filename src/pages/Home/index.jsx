import { Container, Content, Banner, Dishes } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Footer } from './../../components/Footer'

import Food from '../../assets/foods.png'

export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <Banner>
                    <img src={Food} alt='Biscoitos recheados e coloridos com frutinhas vermelhas e folhas caindo ao seu redor.' />

                    <div className='card'>
                        <div className='title'>
                            <h1>Sabores inigualáveis</h1>

                            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                        </div>
                    </div>
                </Banner>

                <Dishes>
                    <Section
                        title='Refeições'
                    />

                    <Section
                        title='Sobremesas'
                    />

                    <Section
                        title='Bebidas'
                    />
                </Dishes>

                <Footer />
            </Content>

        </Container>
    )
}