import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftSLine } from 'react-icons/ri'

import { Container, Content, Dish, Action } from './styles'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { ButtonText } from './../../components/ButtonText'
import { Ingredients } from './../../components/Ingredients'
import { Button } from '../../components/Button'
import { QuantityProducts } from '../../components/QuantityProducts'

import { api } from '../../services/api'

import NotFound from '../../assets/notFound.svg'


export function Details() {
    const [dish, setDish] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    const imageURL = dish ? `${api.defaults.baseURL}/files/${dish.image}` : NotFound

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchDishDetail() {
            const response = await api.get(`/dishes/${params.id}`)
            setDish(response.data.dishedWithIngredient)
        }

        fetchDishDetail()
    }, [])

    return (
        <Container>
            <Header />

            <Content>
                {dish &&
                    <Dish>
                        <ButtonText
                            title='Voltar'
                            icon={RiArrowLeftSLine}
                            onClick={handleBack}
                        />
                        <div className='description'>
                            <img src={imageURL} alt='Foto do prato a ser comprado' />

                            <div>
                                <h1>{dish.title}</h1>

                                <p>{dish.description}</p>

                                {
                                    dish.ingredients.map(ingredient => (
                                        <Ingredients
                                            key={String(ingredient.id)}
                                            title={ingredient.name}
                                        />
                                    ))
                                }
                                <Action>
                                    <div>
                                        <QuantityProducts />
                                    </div>

                                    <Button
                                        title={`Incluir ∙ R$ ${dish.price}`}
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
                }
            </Content>

            <Footer />
        </Container>
    )
}