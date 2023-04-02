import { useState } from 'react'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri'

import { Container } from './styles'

import { ButtonText } from '../ButtonText'

export function QuantityProducts() {
    const [quantity, setQuantity] = useState(0)

    function increase() {
        if (quantity > 19) {
            alert('Erro: A quantidade máxima é de 20 unidades')
            return;
        }
        setQuantity(count => count + 1);
    }

    function decrease() {
        if (quantity < 1) {
            alert('Erro: A quantidade mínima é 1 unidade')
            return
        }
        setQuantity(count => count - 1)
    }

    return (
        <Container>
            <ButtonText className='decrease'
                icon={RiSubtractFill}
                onClick={decrease}
            />

            <span>{quantity.toString().padStart(2, '0')}</span>

            <ButtonText className='increase'
                icon={RiAddFill}
                onClick={increase}
            />
        </Container>
    )
}