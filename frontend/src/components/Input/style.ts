import styled from 'styled-components'


const Container = styled.div`

    text-align: left;
    font-size: 14px;
    
    div {
        padding: 4px 0;
        
        span {
            color: red;
        }
    }
    
    input {
        width: 100%;
        max-width: 440px;
        height: 52px;
        border-radius: 12px;
        padding-left: 10px;
        background: transparent;
        border: 1.5px solid black;
        outline: none;
        transition: 0.4s;
    
        &:focus::-webkit-input-placeholder {
            color: transparent;
        }
        
        &::placeholder {
            color: gray;
        }
    }
`

export { Container }
