import { IButtonProps } from '../../interfaces'
import { Container } from './style'


const Button = ({ children, onClick, disabled, type }: IButtonProps) => {

    return (
        <Container onClick={ onClick } disabled={ disabled } type={ type } >
            { children }
        </Container>
    )
}

export { Button }
