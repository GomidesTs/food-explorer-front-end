import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    img {
            width: clamp(4rem, 15vw, 7rem);
            height: clamp(4rem, 15vw, 7rem);
            object-fit: cover;

            border-radius: 50%;
        }
`
export const Content = styled.main`
    display: flex;
    align-items: center;
    gap: .8rem;

    position: relative;

    font-size: 2rem;
    
    .price {
        font-size: 1.2rem;
    }

    button {
        position: absolute;

        left: clamp(5.9rem, 15vw, 7.9rem);
        bottom: 0;

        color: ${({theme})=> theme.COLORS.TOMATO_100};

        transition: color 1s ease;
        
        &:hover {
            color: ${({theme})=> theme.COLORS.TOMATO_300};
        }
    }
`