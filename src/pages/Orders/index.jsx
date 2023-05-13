import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Table } from './styles'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'


export function Orders() {
    const { user } = useAuth()

    const [orders, setOrders] = useState([])

    function formatDate(date) {
        const dateFormatted = new Date(date)

        let monthFormatted = (dateFormatted.getMonth() + 1).toString()
        monthFormatted = monthFormatted.length == 1 ? `0${monthFormatted}` : monthFormatted

        let minutesFormatted = dateFormatted.getMinutes().toString()
        minutesFormatted = minutesFormatted.length == 1 ? `0${minutesFormatted}` : minutesFormatted

        return `${dateFormatted.getDate()}/${monthFormatted} às ${dateFormatted.getHours() - 3}h${minutesFormatted}`
    }

    async function handleOrderStatus(order, event) {
        let statusSelected = event.target.value

        const cart = {
            id: order.id,
            orderStatus: statusSelected,
        }

        await api.put('/orders', cart)
            .then(() => {
                location.reload()
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi adcionar prato aos favoritos')
                }
            })
    }

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get('/orders')
            setOrders(response.data)
        }

        fetchOrders()
    }, [])

    return (
        <Container>
            <Header />

            <Content>
                <Table>
                    <Section
                        title='Pedidos'
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Código</th>
                                <th>Detalhamento</th>
                                <th>Data e hora</th>
                            </tr>
                        </thead>

                        {
                            orders &&
                            <>
                                {orders.length < 1 &&

                                    <tbody>
                                        <tr>
                                            <td colSpan='4'>
                                                <div>
                                                    <p>Não existem pedidos cadastrados ainda!</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                }

                                {
                                    user.isAdmin ?

                                        <tbody>
                                            {
                                                orders.map(order => (
                                                    <tr key={String(order.id)} className='admin'>
                                                        <td className='status'>
                                                            <select defaultValue={order.orderStatus} onChange={event => handleOrderStatus(order, event)}>
                                                                <option value='🟡 Pendente'>🟡 Pendente</option>
                                                                <option value='🟠 Preparando'>🟠 Preparando</option>
                                                                <option value='🟢 Entregue'>🟢 Entregue</option>
                                                                <option value='🔴 Cancelado'>🔴 Cancelado</option>
                                                            </select>
                                                        </td>
                                                        <td className='number_dish'>{order.id.toString().padStart(8, '0')}</td>
                                                        <td className='description'>
                                                            {order.items.map((item) => (
                                                                <span key={item.title}>{item.quantity} x {item.title} , {' '}</span>
                                                            ))}
                                                        </td>
                                                        <td className='date'>{formatDate(order.created_at)}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        :
                                        <tbody>
                                            {
                                                orders.map(order => (
                                                    <tr key={String(order.id)} className='user'>
                                                        <td className='status'>{order.orderStatus}</td>
                                                        <td className='number_dish'>{order.id.toString().padStart(8, '0')}</td>
                                                        <td className='description'>
                                                            {order.items.map((item) => (
                                                                <span key={item.title}>{item.quantity} x {item.title} , {' '}</span>
                                                            ))}
                                                        </td>
                                                        <td className='date'>{formatDate(order.created_at)}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                }
                            </>
                        }
                    </table>
                </Table>
            </Content>
            <Footer />
        </Container>
    )
}