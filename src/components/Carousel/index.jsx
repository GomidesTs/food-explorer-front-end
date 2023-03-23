import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import { Container } from './styles'

export function Carousel() {
    SwiperCore.use([Navigation])

    return (
        <Container>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                navigation={true}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
        </Container>
    )
}