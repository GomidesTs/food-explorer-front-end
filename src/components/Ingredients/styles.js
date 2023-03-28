import styled from 'styled-components'

export const Container = styled.div`
    display: inline-block;

    > span{
        display: inline-block;
        min-width: 8rem;
        
        margin: .5rem;
        padding: .8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_100};

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        border-radius: 0.8rem;

        font-size: clamp(1.2rem, 4vw, 1.8rem);
        font-weight: 400;
        line-height: 140%;
        text-align: center;
    }
`;
