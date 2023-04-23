import { useState } from 'react'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri'

import { Container } from './styles'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function QuantityProducts({ dish_id, price }) {
    const [quantity, setQuantity] = useState(0)
    const [priceProduct, setPriceProduct] = useState(price)

    function increase(amount) {
        if (amount > 20) {
            alert('Erro: A quantidade máxima é de 20 unidades')
            return;
        }

        setQuantity(amount)
        setPriceProduct(price * amount)
    }

    function decrease(amount) {
        if (quantity < 2) {
            alert('Erro: A quantidade mínima é 1 unidade')
            return
        }

        setQuantity(amount)
        setPriceProduct(price * amount)
    }

    function handleAddDish() {
        if (quantity < 1) {
            alert('Erro: A quantidade mínima é 1 unidade')
            return
        }
        console.log(dish_id);
    }

    return (
        <Container>
            <ButtonText className='decrease'
                icon={RiSubtractFill}
                onClick={() => decrease(quantity - 1)}
            />

            <span>{quantity.toString().padStart(2, '0')}</span>

            <ButtonText className='increase'
                icon={RiAddFill}
                onClick={() => increase(quantity + 1)}
            />

            <div>
                <Button
                    title={`
                            Incluir
                            ${price
                            ?
                            `∙ ${priceProduct}`
                            :
                            ''
                        }
                    `}
                    onClick={handleAddDish}
                />
            </div>
        </Container>
    )
}