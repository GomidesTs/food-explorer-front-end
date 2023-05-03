import { useState, useEffect } from 'react'

import { api } from '../../services/api'

import { Container, Content } from './styles'

import { ButtonText } from '../ButtonText'
import { Section } from '../Section'

import NotFound from '../../assets/notFound.svg'

export function ItemsCarts() {
    const [cart, setCart] = useState([])
    const [amount, setAmount] = useState(0)

    async function handleRemoveCarts(id) {
        await api.delete(`/carts/${id}`)
            .then(() => {
                alert('Prato removido do carrinho')
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.dishes.message)
                } else {
                    alert('Não foi possível remover prato do carrinho')
                }
            })
    }

    useEffect(() => {
        async function fetchCarts() {
            const response = await api.get('/carts')
            setCart(response.data)
        }

        fetchCarts()
    }, [cart])

    useEffect(() => {
        async function totalAmountPayable() {
            const aux = cart.map(value => value.quantity * value.price)
            const totalAmount = aux.reduce((acc, curr) => acc + curr, 0)
            setAmount(totalAmount)
        }

        totalAmountPayable()
    }, [cart])

    return (
        <Container>
            <Section
                title='Meu pedido'
            />
            {
                cart.map(item => (
                    <Content key={String(item.id)}>
                        <img
                            src={
                                item.image
                                    ?
                                    `${api.defaults.baseURL}/files/${item.image}`
                                    :
                                    NotFound
                            }
                            alt={
                                item.image
                                    ?
                                    `Imagem de ${item.title}`
                                    :
                                    `Imagem de ${item.title} não encontrada, foi inserido uma imagem com simbolo de bloqueada azul e vermelho`}
                        />

                        <samp>{item.quantity} X</samp>

                        <h4>{item.title}</h4>

                        <span className='price'>R$ {
                            (item.quantity * item.price)
                                .toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                        </span>

                        <ButtonText
                            title='Excluir'
                            onClick={() => handleRemoveCarts(item.id)}
                        />
                    </Content>
                ))
            }
            <p>
                Total: R$ {
                    (amount)
                        .toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })
                }
            </p>
        </Container>
    )
}