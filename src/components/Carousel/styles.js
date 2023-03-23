import styled from 'styled-components'

export const Container = styled.div`
    .swiper-slide {
        padding: 6.4rem 0;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 2rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
        width: 9rem;
        height: 51.2rem;
        margin: -25.6rem -1rem;
        
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-weight: bolder;
        mask-image: none;

        transition: .5s ease;
        
        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_100};
        }
    }
`