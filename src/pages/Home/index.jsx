import { SwiperSlide } from 'swiper/react'

import { Container, Content, Banner, Dishes } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Footer } from './../../components/Footer'
import { Carousel } from './../../components/Carousel'
import { Card } from './../../components/Card'

import Food from '../../assets/foods.png'


export function Home() {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        loop: true
    }

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
                    <Carousel settings={settings}>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Carousel>

                    <Section
                        title='Sobremesas'
                    />
                    <Carousel settings={settings}>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Carousel>

                    <Section
                        title='Bebidas'
                    />
                    <Carousel settings={settings}>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Carousel>
                </Dishes>

                <Footer />
            </Content>

        </Container>
    )
}