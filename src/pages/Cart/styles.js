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

    display: flex;
    flex-direction: column;
    gap: 4rem;

    max-width: 120rem;

    margin: 0 auto;

    position: relative;
    
    .advance {
        width: 50%;
        position: absolute;

        right: 0;
        bottom: 0;
    }

    .active {
        display: inline-block;
    }

    .disabled {
        display: none;
    }

    @media only screen and (min-width: 800px) {
        flex-direction: row;

        .disabled {
            display: inline-block;
        }

        .advance {
            display: none;
        }

        > div {
            min-width: 55rem;
        }
    }

`
