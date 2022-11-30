import { InputProps } from '../../interfaces'
import { Container } from './style'


const Input = ({ label, register, name, error, type, placeholder }: InputProps) => {

    return (
        <Container>
            <div>{ label } { !!error && <span> - { error }</span> }</div>

            <input { ...register(name) } type={ type } placeholder={ placeholder } />
        </Container>
    )
}

export { Input }
