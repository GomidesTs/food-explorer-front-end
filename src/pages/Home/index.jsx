import { useState, useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'

import { Container, Content, Banner, Dishes } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Footer } from './../../components/Footer'
import { Carousel } from './../../components/Carousel'
import { Card } from './../../components/Card'

import { api } from '../../services/api'

import Food from '../../assets/foods.png'


export function Home() {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        loop: true
    }

    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?title=${search}`)
            setDishes(response.data.dishesWithIngredient)
        }

        fetchDishes()
    }, [])

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
                    {
                        dishes.filter(dish => dish.category == 'snack').length > 0 &&
                        <Carousel settings={settings}>
                            {
                                dishes.filter(dish => dish.category == 'snack').map(dish => (
                                    <SwiperSlide
                                        key={String(dish.id)}
                                    >
                                        <Card
                                            data={dish}
                                        />
                                    </SwiperSlide>
                                ))
                            }

                        </Carousel>
                    }

                    <Section
                        title='Sobremesas'
                    />
                    {
                        dishes.filter(dish => dish.category == 'dessert').length > 0 &&
                        <Carousel settings={settings}>
                            {
                                dishes.filter(dish => dish.category == 'dessert').map(dish => (
                                    <SwiperSlide
                                        key={String(dish.id)}
                                    >
                                        <Card
                                            data={dish}
                                        />
                                    </SwiperSlide>
                                ))
                            }

                        </Carousel>
                    }

                    <Section
                        title='Bebidas'
                    />
                    {
                        dishes.filter(dish => dish.category == 'drink').length > 0 &&
                        <Carousel settings={settings}>
                            {
                                dishes.filter(dish => dish.category == 'drink').map(dish => (
                                    <SwiperSlide
                                        key={String(dish.id)}
                                    >
                                        <Card
                                            data={dish}
                                        />
                                    </SwiperSlide>
                                ))
                            }

                        </Carousel>
                    }
                </Dishes>

                <Footer />
            </Content>

        </Container>
    )
}