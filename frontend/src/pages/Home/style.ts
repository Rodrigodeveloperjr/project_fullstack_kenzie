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

    form {
        width: 250px;

        & > h1 {
            font-size: 30px;
        }

        & > div {

            margin-top: 10px;
        }
    }

    & > menu {

        width: 500px;
        background: black;
        height: 500px;

        overflow: auto;

        ::-webkit-scrollbar {
            display: none;
        }

        h1 {

            text-align: center;
            padding: 10px 0;
            color: white;
        }

        border-radius: 10px;
    }
`

export { HeaderStyle, Container }
