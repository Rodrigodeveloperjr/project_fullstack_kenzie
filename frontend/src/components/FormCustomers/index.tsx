import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { Container } from './style'
import { Button } from '../Button'
import { useState } from 'react'
import { Input } from '../Input'
import * as yup from 'yup'


const FormCustomers = () => {

    const [ user, setUser ] = useState<string>('')

    const [ load, setLoad ] = useState<boolean>(false)

    const schema = yup.object().shape({

        name: yup
            .string()
            .required('Name required'),
        email: yup
            .string()
            .required('Email required')
            .email('Invalid email'),
        telephone: yup
            .string()
            .required('Telephone required'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmitFunction = (data: object) => {

        setLoad(true)

        api.post('/customers', data, {

            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => setUser(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoad(false))

        console.log(user)
    }

    return (

        <Container onSubmit={ handleSubmit(onSubmitFunction) }>
            
            <Input
            placeholder="name"
            label="Name"
            type="text"
            register={ register }
            name="name"
            error={ errors.name?.message }
            />
            <Input
            placeholder="email"
            label="Email"
            type="email"
            register={ register }
            name="email"
            error={ errors.email?.message }
            />
            <Input
            placeholder="telephone"
            label="Telephone"
            type="text"
            register={ register }
            name="telephone"
            error={ errors.telephone?.message }
            />

            <Button type="submit" disabled={ load }>{
                load ? 'Sending...' : 'Submit'
            }</Button>
        </Container>
    )
}

export { FormCustomers }
