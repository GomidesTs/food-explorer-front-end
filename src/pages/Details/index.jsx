import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Dish, Action } from './styles'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { ButtonText } from './../../components/ButtonText'
import { Ingredients } from './../../components/Ingredients'
import { Button } from '../../components/Button'
import { QuantityProducts } from '../../components/QuantityProducts'


import NotFound from '../../assets/notFound.svg'


export function Details() {
    const { user } = useAuth()

    const [dish, setDish] = useState(null)
    const [loadingDelete, setLoadingDelete] = useState(false)

    const params = useParams()
    const navigate = useNavigate()

    const imageURL = dish ? `${api.defaults.baseURL}/files/${dish.image}` : NotFound

    function handleBack() {
        navigate(-1)
    }

    async function handleRemoveDish() {
        setLoadingDelete(true)

        const isConfirm = confirm('Tem certeza que deseja remover este item?')

        if (isConfirm) {
            await api.delete(`/dishes/${params.id}`)
                .then(() => {
                    alert('Item removido com sucesso!')

                    navigate('/')

                    setLoadingDelete(false)
                })
        } else {
            setLoadingDelete(false)
        }
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
                                    {
                                        user.isAdmin ?
                                            <>
                                                <Button className='delete'
                                                    title={loadingDelete ? 'Excluindo prato' : 'Excluir prato'}
                                                    disabled={loadingDelete}
                                                    onClick={handleRemoveDish}
                                                />

                                                <Link to={`/editdish/${dish.id}`}>
                                                    <Button
                                                        title='Editar prato'
                                                    />
                                                </Link>
                                            </>
                                            :
                                            <>
                                                <QuantityProducts
                                                    dish_id={dish.id}
                                                    price={dish.price}
                                                />
                                            </>
                                    }

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