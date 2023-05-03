import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ItemsCarts } from '../../components/ItemsCarts'
import { Payment } from '../../components/Payment'
import { Button } from '../../components/Button'


export function Cart() {
    function replacement() {
        document.getElementById('itemsCarts').classList.add('disabled')
        document.getElementById('payment').classList.remove('disabled')
        document.getElementById('payment').classList.add('active')
    }

    return (
        <Container>
            <Header />

            <Content>
                <div id='itemsCarts'>
                    <ItemsCarts />

                    <Button
                        className='advance'
                        title='Avançar'
                        onClick={replacement}
                    />
                </div>

                <div id='payment' className='disabled'>
                    <Payment />
                </div>

            </Content>
            <Footer />
        </Container>
    )
}