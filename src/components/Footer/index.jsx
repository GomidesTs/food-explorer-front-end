import { Container } from './styles'

import LogoFoodExploreFooter from '../../assets/LogoFoodExploreFooter.svg'

export function Footer() {
    return (
        <Container>
            <img src={LogoFoodExploreFooter} alt='Logo do restaurante fictício Food Explore, este logo tem um losango na cor cinza e ao lago escrito Food Explore na cor cinza.' />

            <p>
                &copy; 2023 - Todos os direitos reservados.
            </p>
        </Container>
    )
}