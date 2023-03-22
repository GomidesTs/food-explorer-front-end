import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 62.5%;
    
    -webkit-font-smoothing: antialiased;
}

body {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

}

body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1.4rem, 4vw, 1.8rem);
    outline: none;
}

button {
    font-family: 'Poppins', sans-serif;
}

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
}


::-webkit-scrollbar-track{
    background: ${({ theme }) => theme.COLORS.DARK_1000};
}

::-webkit-scrollbar{
    width: 0.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_1000};
}

::-webkit-scrollbar-thumb{
    border-radius: 1rem;

    background: ${({ theme }) => theme.COLORS.CAKE_200};
}
`