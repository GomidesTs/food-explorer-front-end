import styled from 'styled-components'

export const Container = styled.div`
   input {
        width: 100%;
        height: 4.8rem;

        padding: 1.6rem 1.4rem;
        margin-bottom: 3.2rem;

        background-color: ${({theme})=> theme.COLORS.DARK_200};

        border: none;
        border-radius: .8rem;

        color: ${({theme})=> theme.COLORS.LIGHT_400};
   }
`