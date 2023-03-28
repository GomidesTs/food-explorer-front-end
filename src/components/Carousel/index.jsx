import { Navigation, Pagination, A11y} from 'swiper'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import { Container } from './styles'

export function Carousel({ settings, children }) {
    return (
        <Container>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                {...settings}
            >
                {children}
            </Swiper>
        </Container>
    )
}
