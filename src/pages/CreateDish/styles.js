import styled from 'styled-components'

export const Container = styled.div`
    max-width:100%;
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

    padding: 3rem;

`

export const Dish = styled.div`
    max-width: 150rem;
    margin: 0 auto;
`

export const Form = styled.form`
    padding-top: 3rem;
    width: 100%;

    fieldset {
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 2rem;

        border: none;

        label {
            display: block;
            margin-bottom: .8rem;
        }
        
        .dishImage {
            input[type='file'] {
                display: none;
            }

            > div {
                label {
                    margin-top: .8rem;
                    width: 100%;
                    height: 4.8rem;

                    padding: 1.6rem 1.4rem;

                    display: flex;
                    align-items: center;
                    gap: .8rem;

                    background-color: ${({ theme }) => theme.COLORS.DARK_200};

                    border: none;
                    border-radius: .8rem;

                    color: ${({ theme }) => theme.COLORS.LIGHT_400};

                    img {
                        width: 100%;
                    }
                }
            }
        }
       
        .dishCategory {
            display: flex;
            flex-direction: column;

            select {
                width: 100%;
                height: 4.8rem;

                padding: 1.6rem 1.4rem;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: ${({ theme }) => theme.COLORS.DARK_200};

                border: none;
                border-radius: .8rem;

                color: ${({ theme }) => theme.COLORS.LIGHT_400};

                &:focus {
                    outline: none;
                }
            }
        }

        .newIngredients {
            display: flex;
            flex-direction: column;

            .ingredients {
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                gap: .8rem;
                
                width: 100%;
                height: auto;
                padding: 0.8rem;

                border-radius: 0.8rem;
                border: .1rem solid ${({ theme }) => theme.COLORS.DARK_100};
            }
        }

        .price {
            input[type=number]::-webkit-outer-spin-button,
            input[type=number]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            input[type=number] {
            -moz-appearance: textfield;
            }
        }

        .description {
            display: flex;
            flex-direction: column;
            
            textarea {
                height: 20rem;

                resize: none;

                background-color: ${({ theme }) => theme.COLORS.DARK_200};

                color: ${({ theme }) => theme.COLORS.LIGHT_400};

                border: none;
                border-radius: 0.8rem;

                padding: 1.6rem 1.4rem;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        fieldset {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;

            .dishImage {
                grid-column: 1 / 2;
            }

            .dishName {
                grid-column: 2 / 3;
            }

            .dishCategory {
                grid-column: 3;
            }

            .newIngredients {
                grid-column: 1 / span 2;
            }
            
            .description {
                grid-column: 1 / span 4;
            }

            .price {
                grid-column: 3;
            }

            .button {
                grid-column: 3;
            }
        }
    }
`