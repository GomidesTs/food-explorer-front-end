import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiHeartFill, RiArrowRightSLine, RiEditLine } from 'react-icons/ri'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Action } from './styles'

import { QuantityProducts } from '../QuantityProducts'

import NotFound from '../../assets/notFound.svg'

export function Card({ data, ...rest }) {
    const { user } = useAuth()
    const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : NotFound

    const [favorite, setFavorite] = useState(false)

    function handleFavorites() {
        api.post('/favorites', { id: data.id })
            .then(() => {
                setFavorite(true)
                alert('Prato adicionado aos favoritos')
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi adicionar produto aos favoritos')
                }
            })
    }

    function handleRemoveFavorite() {
        api.delete(`/favorites/${data.id}`)
            .then(() => {
                setFavorite(false)
                alert('Prato removido dos favoritos')
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível remover o prato de favoritos')
                }
            })
    }

    useEffect(() => {
        async function fetchFavorites() {
            const response = await api.get(`/favorites/${data.id}`)
            setFavorite(response.data)
        }

        fetchFavorites()
    }, [data.id])

    return (
        <Container {...rest}>
            <Content>
                <Link to={`/details/${data.id}`}>
                    <img src={imageURL} alt={data.title} />
                </Link>

                {
                    user.isAdmin
                        ?
                        <>
                            <Link to={`/details/${data.id}`} className='decision'>
                                <RiEditLine className='edit' />
                            </Link>

                            <Link to={`/details/${data.id}`}>
                                <h2>
                                    {data.title}
                                    <RiArrowRightSLine />
                                </h2>
                            </Link>

                            <p>
                                {data.description}
                            </p>

                            <span className='price'>
                                R$ {
                                    data.price.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                            </span>

                        </>
                        :
                        <>
                            {
                                favorite
                                    ?
                                    <RiHeartFill
                                        size={24}
                                        className='favorite'
                                        onClick={handleRemoveFavorite}
                                    />
                                    :
                                    <RiHeartFill
                                        size={24}
                                        className='addFavorite'
                                        onClick={handleFavorites}
                                    />
                            }

                            <Link to={`/details/${data.id}`}>
                                <h2>
                                    {data.title}
                                    <RiArrowRightSLine />
                                </h2>
                            </Link>

                            <p>
                                {data.description}
                            </p>

                            <span className='price'>
                                R$ {
                                    data.price.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                            </span>

                            <Action>
                                <QuantityProducts
                                    dish_id={data.id}
                                />
                            </Action>
                        </>
                }
            </Content>
        </Container>
    )
}