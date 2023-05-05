import styled from 'styled-components'

export const Container = styled.div`
    max-width: 110.6rem;
    height: 100vh;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6.4rem;

    padding: 4rem;

    > img {
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    max-width: 47.6rem;
    width: 100%;
    
    padding: 2rem;
    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
    fieldset {
        border: none;
        margin-bottom: 3.2rem;

        legend {
            border: none;
            text-align: center;
        }

        .information {
            label {
                display: inline-block;
                padding-bottom: .8rem;
            }

            > div {
                display: grid;
                position: relative;

               span {
                position: absolute;
                right: .5rem;
                bottom: 43%;

                background-color: ${({theme})=> theme.COLORS.DARK_200};
               }
            }
        }
    }

    a {
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_200}
    }

    @media only screen and (min-width: 800px) {
        padding: 6.4rem;
    }
`

