import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Content } from './styles'

import { Section } from '../Section'
import { ButtonText } from '../ButtonText'
import { Button } from '../Button'
import { Input } from '../Input'

import qrCode from '../../assets/qrCodePix.png'
import clock from '../../assets/clock.png'
import check from '../../assets/checkCircle.png'
import forkKnife from '../../assets/forkKnife.png'

export function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('')
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(true)
    const [isClockActive, setIsClockActive] = useState(false)
    const [isCheckActive, setIsCheckActive] = useState(false)
    const [isConcluded, setIsConcluded] = useState(false)

    const navigate = useNavigate()

    function handlePix() {
        setPaymentMethod('Pix')

        document.getElementById('pix').classList.add('active')
        document.getElementById('card').classList.remove('active')
    }

    function handleCard() {
        setPaymentMethod('Card')
        document.getElementById('pix').classList.remove('active')
        document.getElementById('card').classList.add('active')
    }

    function clockActive() {
        setVisible(false)
        setIsClockActive(true)

        setTimeout(() => {
            checkActive()
        }, 3000)
    }

    function checkActive() {
        setIsClockActive(false)
        setIsCheckActive(true)

        setTimeout(() => {
            concluded()
        }, 3000)
    }

    function concluded() {
        setIsCheckActive(false)
        setIsConcluded(true)
    }

    async function handleResetCart(id) {
        await api.delete(`/carts/${id}`)
    }

    async function handleFinishPayment() {
        if (cart.length < 1) {
            navigate(-1)
            return alert('Seu carrinho está vazio. Adicione algo antes de tentar pagar.')
        }

        clockActive()

        const orderStatus = '🔴 Pendente'

        setLoading(true)

        await api.post('/orders', { cart, orderStatus, totalPrice, paymentMethod })
            .then(() => {
                setTimeout(() => {
                    alert('Pedido cadastrado com sucesso!')

                    cart.map(item => (
                        handleResetCart(item.id)

                    ))

                    navigate(-1)
                }, 10000)
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar')
                }
            })

        setLoading(false)
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

            setTotalPrice(totalAmount)
        }

        totalAmountPayable()
    }, [cart])

    return (
        <Container>
            <Section
                title='Pagamento'
            />
            {
                visible &&
                <Content>
                    <div className='payment'>
                        <ButtonText
                            id='pix'
                            className='method'
                            title='PIX'
                            onClick={handlePix}
                        />
                        <ButtonText
                            id='card'
                            className='method'
                            title='Crédito'
                            onClick={handleCard}
                        />
                    </div>

                    {
                        paymentMethod
                            ?
                            <div className='paymentMethod'>
                                {
                                    paymentMethod == 'Pix'
                                        ?
                                        <img src={qrCode} alt='QR Code para o pix' />
                                        :
                                        <div className='cardInformation'>
                                            <label htmlFor='number'>
                                                Número do Cartão
                                                <Input
                                                    id='number'
                                                    type='number'
                                                    placeholder='0000 0000 0000 0000'
                                                />
                                            </label>
                                            <div>
                                                <label htmlFor='validity'>
                                                    Validade
                                                    <Input
                                                        id='validity'
                                                        type='text'
                                                        placeholder='mm/aa'
                                                    />
                                                </label>
                                                <label htmlFor='number'>
                                                    CVC
                                                    <Input
                                                        id='cvc'
                                                        type='number'
                                                        placeholder='000'
                                                    />
                                                </label>
                                            </div>

                                        </div>
                                }
                                <Button
                                    className='button'
                                    title={loading ? 'Realizando pagamento' : 'Finalizar pagamento'}
                                    onClick={handleFinishPayment}
                                />
                            </div>
                            :
                            <span>Selecione o método de pagamento</span>
                    }
                </Content>
            }

            {
                isClockActive &&
                <Content>
                    <div className='paymentMethod'>
                        <img src={clock} alt='Imagem de um relógio' />
                        <p>Aguardando pagamento no caixa</p>
                    </div>
                </Content>
            }

            {
                isCheckActive &&
                <Content>
                    <div className='paymentMethod'>
                        <img src={check} alt='Imagem de um check' />
                        <p>Pagamento aprovado!</p>
                    </div>
                </Content>
            }

            {
                isConcluded &&
                <Content>
                    <div className='paymentMethod'>
                        <img src={forkKnife} alt='Imagem de um garfo e faca' />
                        <p>Pagamento aprovado!</p>
                    </div>
                </Content>
            }
        </Container>
    )
}