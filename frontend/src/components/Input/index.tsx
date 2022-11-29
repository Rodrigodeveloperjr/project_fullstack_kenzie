import {UseFormRegister, FieldValues } from 'react-hook-form'
import { Container } from './style'


interface InputProps {
    label: string
    register: UseFormRegister<FieldValues>
    name: string
    error: any
    type: string | undefined
    placeholder: string
}

const Input = ({ label, register, name, error, type, placeholder }: InputProps) => {

    return (
        <Container>
            <div>{ label } { !!error && <span> - { error }</span> }</div>

            <input { ...register(name) } type={ type } placeholder={ placeholder } />
        </Container>
    )
}

export { Input }
