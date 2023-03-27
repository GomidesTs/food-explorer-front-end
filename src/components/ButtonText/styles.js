import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: .8rem;

    font-size: clamp(0.8rem, 4vw, 1.6rem);
    color: ${({theme})=> theme.COLORS.LIGHT_200};
    
    border: none;

    background: none;
`