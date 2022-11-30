import styled from 'styled-components'


const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    form {
        text-align: center;
        width: 250px;

        & > div {

            margin-top: 10px;
        }
    }
`

export { Container }
