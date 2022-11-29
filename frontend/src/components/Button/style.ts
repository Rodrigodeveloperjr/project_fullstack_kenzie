import styled from 'styled-components'


const Container = styled.button`

    border-radius: 4px;
    transition: .5s;
    border: 1.2182px solid;
    font-weight: 600;
    :disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    margin-top: 20px;
    width: 100%;
    max-width: 250px;
    height: 50px;
    background: black;
    color: white;
    border-radius: 8px;
    border-color: black;
    :hover {
        box-shadow: 0 0.5em 0.5em -0.4em black;
    }
`

export { Container }
