import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
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
    max-width: 120rem;
    margin: auto;
    padding: 2rem;

    .card{
        position: relative;

        display: flex;
        align-items: center;
        justify-content: end;

        padding-right: 1rem;

        width: 100%;
        min-height: 12rem;
         
        background: ${({theme}) => theme.COLORS.GRADIENTS_300};
        
        border-radius: .8rem;

        .title{
            width: 50%;

            display: flex;
            flex-direction: column;

            justify-content: end;

            h1 {
                font-size: 1.8rem;
            }

            span{
                font-size: 1.2rem;
            }
        }
        
        img {
            position: absolute;
            left: -3rem;
            top: -1rem;
                
            max-height: 13.5rem;

            object-fit: fill;
        }
    }

    @media only screen and (min-width: 1000px) {
        .card {
            padding-right: 3.2rem;
            min-height: 31rem;
            
            .title{
                width: 50%;

                display: flex;
                flex-direction: column;

                justify-content: end;

                h1 {
                    font-size: 4rem;
                }

                span{
                    font-size: 1.6rem;
                }
            }
            
            img {
                left: -10rem;
                top: -5rem;
                
                max-height: 37.2rem;
            }
        }
    }
`

export const Dishes = styled.div`
    max-width: 120rem;
    
    padding: 6.4rem 3rem;
    margin: 0 auto;
`