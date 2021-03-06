import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey
    }
    &::-webkit-scrollbar-track {
        background-color: white
    }
}
body {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    @media ( max-width: 1300px ) {
        padding: 0.2rem;
    }
}
h2 {
    font-family: 'Monoton', cursive;
    font-size: 4rem;
    font-weight: lighter;
    color: #29e2e2;
    @media ( max-width: 1300px ) {
        font-size: 2rem;
    }
}
h3 {
    font-size: 1rem;
    color: #333;
    padding: 1.5rem 0rem;
    @media ( max-width: 1300px ) {
        padding: 1rem 0rem;
    }
}
p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}
a {
    text-decoration: none;
    color: #333;
}
img {
    display: block;
}
input {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
}
`

export default GlobalStyles