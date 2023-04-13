import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiHeartLine, RiArrowRightSLine, RiEditLine } from 'react-icons/ri';

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Action } from './styles'

import { Button } from '../Button'
import { QuantityProducts } from '../QuantityProducts'


import NotFound from '../../assets/notFound.svg'

export function Card({ data, ...rest }) {
    const { user } = useAuth()
    const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : NotFound

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
                                R$ {data.price}
                            </span>

                        </>
                        :
                        <>
                            <RiHeartLine size={24} className='decision' />

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
                                R$ {data.price}
                            </span>

                            <Action>
                                <QuantityProducts />

                                <div>
                                    <Button
                                        title='incluir'
                                    />
                                </div>
                            </Action>
                        </>
                }
            </Content>
        </Container>
    )
}