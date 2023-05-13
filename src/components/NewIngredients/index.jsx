import { Container } from './styles'

import { RiAddFill, RiSubtractFill } from 'react-icons/ri'

export function NewIngredients({ isNew, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input
                type='text'
                value={value}
                readOnly={!isNew}
                {...rest}
                list='ingredientName'
            />

            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <RiAddFill /> : <RiSubtractFill />}
            </button>
        </Container>
    )
}