import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
`

export const Content = styled.div`
    display: flex;
    
    align-items: center;
    
    white-space: nowrap;
    
    a {
        display: flex;
        flex-direction: column;
        align-items: end;
        
        color: ${({ theme }) => theme.COLORS.CAKE_100};

        img {
            width: clamp(1.4rem, 25vh, 20rem);
        }
    }
`

export const Search = styled.div`
    width: 50%;

    border-radius: .5rem;

    align-self: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    label {
        display: flex;
        align-items: center;
        padding-left: clamp(.8rem, 4vw, 1.6rem);

        svg{
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    } 

    input {
        width: 100%;
        height: clamp(2.8rem, 4vw, 4.8rem);

        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
        padding: clamp(.8rem, 4vh, 1.6rem);

        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }

        &:hover::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

`

export const Profile = styled.div`
    border: none;

    background: none;

    cursor: pointer;

    img{
        width: 3rem;
        height: 3rem;

        border-radius: 50%;

        object-fit: cover;  
    }
`

export const Dish = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Logout = styled(Link)`
    display: flex;
    align-self: center;

    border: none;
    background: none;

    svg {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        
        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_100};
        }
    }
`