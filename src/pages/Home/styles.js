import styled from 'styled-components'

export const Container = styled.div`
    max-width:100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
    'header'
    'content';
`

export const Content = styled.main`
    grid-area: content;

    overflow-y: auto;

    padding-top: 5rem;
`

export const Banner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    .card {
        background: ${({ theme }) => theme.COLORS.GRADIENTS_100};

        border-radius: 2rem;

        position: relative;

        padding: 2rem;

        .title {
            padding: 1rem;

            h1 {
                line-height: 140%;
                font-size: clamp(2rem, 4vw, 4rem);
                font-weight: 500;

                padding-bottom: .8rem;
            }

            span {
                font-size: clamp(1.4rem, 2.5vw, 2rem);
            }
        }
    }

    img {
        width: 50%;
        margin-bottom: -2.7rem;
        z-index: -1;
    }

    @media only screen and (min-width: 1000px) {
        flex-direction: row;
        
        .card {
            .title {
                width: 100vh;
                height: 26rem;

                padding: 8.7rem 4.6rem 0 0;

            }
        }

        img {
            width: 30%;
        }
    }
`

export const Dishes = styled.div`
    padding: 6.4rem 3rem;
`