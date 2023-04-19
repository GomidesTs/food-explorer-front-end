import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    padding: 2rem;

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
       
    text-align: center;

    img {
        width: clamp(9rem, 15vw, 20rem);
        height: clamp(9rem, 15vw, 20rem);

        object-fit: cover;

        cursor: pointer;

        transition: .5s ease-in-out;

        border-radius: 50%;

        &:hover {
            transform: scale(1.09);
        }
    }

    .addFavorite {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        
        transition: 1s ease-in-out;

        &:hover {
            fill: ${({theme}) => theme.COLORS.TOMATO_400};
        }
    }

    .favorite {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        
        fill: ${({theme}) => theme.COLORS.TOMATO_400};

        transition: 1s ease;

        &:hover {
            fill: ${({theme}) => theme.COLORS.LIGHT_200};
        }
    }

    .decision{
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        .edit {
            transition: .5s ease;
    
            &:hover {
                fill: ${({theme}) => theme.COLORS.CAKE_100};
            }
        }
    }

    a {
        color: ${({theme}) => theme.COLORS.LIGHT_200};
    }

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        transition: .5s ease;

        font-size: clamp(1.4rem, 5vw, 2.2rem);

        &:hover {
            color: ${({theme}) => theme.COLORS.CAKE_200};
        }
    }

    p {
       display: none;
    } 

    .price {
        font-size: clamp(1.2rem, 5vw, 3.2rem);
        color: ${({theme}) => theme.COLORS.CAKE_100};
    } 

    @media only screen and (min-width: 1000px) {
        p {
            display: block;
            font-size: 1.4rem;

            height: 5rem;
            overflow: hidden;
        }
    }
`

export const Action = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    > div {
        width: 100%;
    }

    @media only screen and (min-width: 1000px) {
        flex-direction: row;
    }
`