import styled from 'styled-components'

export const Container = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    .decrease {
        transition: color 0.5s linear;
        
        &:hover {
            color: ${({ theme }) => theme.COLORS.TOMATO_300};
        }
    }

    .increase {
        transition: color 0.5s linear;

        &:hover {
            color: ${({ theme }) => theme.COLORS.MINT_100};
        }
    }
`