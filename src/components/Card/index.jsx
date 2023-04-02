import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiHeartLine, RiArrowRightSLine, RiSubtractFill, RiAddFill } from 'react-icons/ri';

import { Container, Content, Action } from './styles'

import { Button } from '../Button'
import { QuantityProducts } from '../QuantityProducts'

import { api } from '../../services/api'

import NotFound from '../../assets/notFound.svg'

export function Card({ data, ...rest }) {
    const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : NotFound

    return (
        <Container {...rest}>
            <Content>
                <Link to={`/details/${data.id}`}>
                    <img src={imageURL} alt={data.title} />
                </Link>

                <RiHeartLine />
                <Link to={`/details/${data.id}`}>
                    <h2>
                        {data.title}
                        <RiArrowRightSLine />
                    </h2>
                </Link>

                <p>
                    {data.description}
                </p>

                <span>
                    R$ {data.price}
                </span>

                <Action>
                    <div>
                       <QuantityProducts />
                    </div>
                    <Button
                        title='incluir'
                        style={
                            {
                                maxHeight: 48,
                                width: 94,
                                padding: '1.2rem .4rem'
                            }
                        }
                    />
                </Action>
            </Content>
        </Container>
    )
}