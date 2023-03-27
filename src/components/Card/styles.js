import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
`

export const Content = styled.div`
    padding: 2.5rem;

    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(6, auto);
    gap: 1.5rem;
       
    text-align: center;

    img {
        grid-row: 2;
        grid-column: 1;

        width: 20rem;
        height: 20rem;

        object-fit: fill;

        cursor: pointer;
        
        transition: .5s ease-in-out;

        &:hover {
            transform: scale(1.09);
        }
    }

    > svg {
        grid-row-start: 1;
        grid-column: 2;
        
        cursor: pointer;
        
        transition: .5s ease;

        &:hover {
            fill: ${({theme}) => theme.COLORS.TOMATO_400};
        }
    }

    h2 {
        grid-row: 3;
        grid-column: 1;

        font-size: 2rem;

        display: flex;
        align-items: center;

        cursor: pointer;

        transition: .5s ease;

        &:hover {
            color: ${({theme}) => theme.COLORS.CAKE_200};
        }
    }

    p {
        grid-row: 4;
        grid-column: 1;
    } 

    span {
        grid-row: 5;
        grid-column: 1;
    } 
`

export const Action = styled.span`
    grid-row: 6;
    grid-column: 1;

    display: flex;
    align-items: center;
    gap: 3.2rem;

    padding-top: 4rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        cursor: pointer;
    }
`