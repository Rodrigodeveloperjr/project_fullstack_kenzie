import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background: white;
        color: black;
    }
    
    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }
`
