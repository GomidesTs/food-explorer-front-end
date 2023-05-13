import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
    'header'
    'content'
    'footer';
`

export const Content = styled.main`
    grid-area: content;

    overflow-y: auto;
`

export const Dishes = styled.div`
    max-width: 120rem;
    
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    text-align: center;

    @media only screen and (min-width: 600px) {
        text-align: left;
    }
`

export const Options = styled.div`
    max-width: 100rem;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-self: center;
    justify-content: space-around;
    gap: 3.6rem;

    a {
        color: ${({theme})=> theme.COLORS.LIGHT_200};
        transition: all 1s ease;
        
        &:hover {
            color: ${({theme})=> theme.COLORS.CAKE_200};
        }
    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        align-self: start;
        justify-content: start;
    }
`

export const Favorite = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    width: 30rem;

    img {
        width: clamp(5rem, 15vw, 10rem);
        height: clamp(5rem, 15vw, 10rem);
        object-fit: cover;

        border-radius: 50%;
    }

    h3 {
        font-size: 1.8rem;
    }

    button {
        background: none;
        border: none;

        color: ${({theme})=> theme.COLORS.TOMATO_100}
    }
`