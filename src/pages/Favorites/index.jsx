import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, Dishes, Options, Favorite } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Footer } from './../../components/Footer'

import { api } from '../../services/api'

import NotFound from '../../assets/notFound.svg'

export function Favorites() {
    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState('')

    async function handleRemoveFavorite(id) {
        await api.delete(`/favorites/${id}`)
            .then(() => {
                alert('Prato removido dos favoritos')
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.dishes.message)
                } else {
                    alert('Não foi possível remover prato dos favoritos')
                }
            })
    }

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/favorites?title=${search}`)
            setDishes(response.data)
        }

        fetchDishes()
    }, [search, dishes])

    return (
        <Container>
            <Header search={setSearch} />

            <Content>
                <Dishes>
                    <Section
                        title='Meus Favoritos'
                    />
                    <Options>
                        {
                            dishes.map(dish => (
                                <Favorite key={String(dish.id)}>
                                    <Link to={`/details/${dish.id}`}>
                                        <img
                                            src={
                                                dish.image
                                                    ?
                                                    `${api.defaults.baseURL}/files/${dish.image}`
                                                    :
                                                    NotFound
                                            }
                                            alt={
                                                dish.image
                                                    ?
                                                    `Imagem de ${dish.title}`
                                                    :
                                                    `Imagem de ${dish.title} não encontrada, foi inserido uma imagem com simbolo de bloqueada azul e vermelho`}
                                        />
                                    </Link>
                                    <div>
                                        <Link to={`/details/${dish.id}`}>
                                            <h3>{dish.title}</h3>
                                        </Link>

                                        <button onClick={() => handleRemoveFavorite(dish.id)}>Remover dos Favoritos</button>
                                    </div>
                                </Favorite>
                            ))
                        }
                    </Options>

                </Dishes>

            </Content>
            <Footer />

        </Container>
    )
}