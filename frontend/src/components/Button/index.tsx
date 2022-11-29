import { MouseEventHandler } from 'react'
import { Container } from './style'


interface IButtonProps {
    children: React.ReactNode
    onClick?: MouseEventHandler
    disabled?: boolean | undefined
    type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ children, onClick, disabled, type }: IButtonProps) => {

    return (
        <Container onClick={ onClick } disabled={ disabled } type={ type } >
            { children }
        </Container>
    )
}

export { Button }
