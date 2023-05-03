import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;
    
    display: flex;
    align-items: center;
    gap:1.6rem;
    
    justify-content: space-around;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    
    .mobile {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    menu {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-around;

        .icon {
            cursor: pointer;

            transition: all .5s ease-in-out;
            
            &:hover {
                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
        }
        
        .close {
            display: none;
        }

        .hide {
            display: none;
        }

        .show {
            display: block;
        }

    }

    a {
        display: flex;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.CAKE_100};

        transition: all .5s ease-in-out;

        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
        
        .welcome {
            display: none;
        }
        
        .mobileDish{
            position: relative;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
            p {
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: -1.5rem;
                right: -1rem;

                width: 2.4rem;
                height: 2.4rem;

                background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
                
                border-radius: 50%;
            }
        }

        .desktopDish {
            display: none;
        }
    }

    .search{
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
    }

    nav {
        display: none;
    }

    .active {
        display: inline;

        position: absolute;
        left: 0;
        top: 10rem;

        width: 100%;
        min-height: calc(100vh - 10rem);

        padding: 3.2rem .8rem;

        z-index: 999;

        backdrop-filter: blur(1rem);
    }

    .links {
        display: flex;
        flex-direction: column;

        margin-top: 3.2rem;

        a {
            padding: .8rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            border-bottom: .1rem solid ${({ theme }) => theme.COLORS.DARK_100};
        }
    }

    .desktop {
        display: none;
    }

    @media only screen and (min-width: 700px) {
        menu {
           .mobile {
                display: none;
           }

            .desktop {
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3.2rem;

                
                a {
                    color: ${({ theme }) => theme.COLORS.LIGHT_200};
                }
                
                .logo {
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                   
                    color: ${({ theme }) => theme.COLORS.CAKE_100};
                }

                .profile {
                    border: none;

                    background: none;

                    cursor: pointer;

                    img {
                        width: 3rem;
                        height: 3rem;

                        border-radius: 50%;

                        object-fit: cover;  
                    }
                }
            }
        }
    }
`