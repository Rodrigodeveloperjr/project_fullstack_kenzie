import styled from 'styled-components'


const HeaderStyle = styled.header`

    height: 80px;
    background: black;
    color: white;

    display: flex;
    align-items: center;
    padding: 10px;
`

const Container = styled.div`

    display: flex;
    justify-content: space-around;

    padding: 30px;

    & > menu {

        width: 500px;
        background: black;

        border-radius: 10px;
    }
`

export { HeaderStyle, Container }
