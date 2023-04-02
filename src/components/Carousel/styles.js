import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    
    .swiper-slide {
        padding: 2rem 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        
        border-radius: 2rem;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
     
    .swiper-button-prev {
        background: linear-gradient(270deg, rgba(255,255,255,0) 0%, ${({theme}) => theme.COLORS.DARK_1000});
    }

    .swiper-button-next { 
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, ${({theme}) => theme.COLORS.DARK_1000});
    }

    .swiper-button-next,
    .swiper-button-prev {
        width: 4rem;
        height: 70rem;
        
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-weight: bolder;
        mask-image: none;

        transition: .5s ease;

        margin: -37rem -1rem;

        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_100};
        }

        &::after {
           font-size: clamp(1.6rem, 15vw, 3rem);
        }
    }
`