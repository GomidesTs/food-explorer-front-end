import styled from 'styled-components'

export const Container = styled.div`
    padding: 2rem;
`

export const Content = styled.main`
    position: relative;
    margin: 0 auto;

    margin-top: 5rem;
    max-width: 50rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    padding: 2rem;
    border-radius: 1.6rem;

    
`

export const Avatar = styled.div`
    position: relative;

    width:  18.6rem;
    height: 18.6rem;

    margin: -12.4rem auto 3.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img{
        position: absolute;
        top: 3rem;

        width: 16rem;
        height: 16rem;

        border-radius: 50%;

        object-fit: cover;
    }

    label{
        width: 4.8rem;
        height: 4.8rem;
        
        background: ${({ theme }) => theme.COLORS.CAKE_200};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
     
        position: absolute;
        bottom: 0rem;
        right: 1rem;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    
    padding: 2rem;
    border-radius: 1.6rem;

    fieldset {
        border: none;

        margin-bottom: 3.2rem;
        
        legend {
            border: none;

            text-align: center;

            margin-bottom: 3.2rem;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .8rem;

            cursor: pointer;

            margin-bottom: 2rem;
        }
    }
`