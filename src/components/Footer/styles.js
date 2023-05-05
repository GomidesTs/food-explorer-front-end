import styled from 'styled-components';

export const Container = styled.footer`
    grid-area: footer;

    width: 100%;
    height: 7.7rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self: end;

    p {
        font-size: 1.2rem;
    }
`;