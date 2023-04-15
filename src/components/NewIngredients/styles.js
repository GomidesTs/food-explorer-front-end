import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    padding: 0 1.6rem;
    border-radius: 0.8rem;
    border: ${({ theme, isNew }) => isNew ? `.1rem dashed ${theme.COLORS.LIGHT_500}` : 'none'};

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.DARK_200};
    
    svg {
        vertical-align: middle;
    }

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    > input {
        max-width: 8rem;
        height: 2.8rem;

        border: none;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`;
