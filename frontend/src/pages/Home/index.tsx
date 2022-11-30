import { useState } from 'react'
import { Contact } from '../../components/Contact'
import { Container, HeaderStyle } from './style'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import * as yup from 'yup'

const Home = () => {

    const clientName = localStorage.getItem('Project FullStack Kenzie: client.name')

    const [ contacts, setContacts ] = useState<any>([])

    const addContact = (contact: any) => setContacts([ ...contacts, contact ])

    const [ load, setLoad ] = useState<boolean>(false)

    const clientId = localStorage.getItem('Project FullStack Kenzie: client.id')

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

        api.post('/contacts', data, {

            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => addContact(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoad(false))
        
        api.get(`/customers${ clientId }`, {

            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => setContacts(res.data))
        .catch(err => console.error(err))
    }

    return (
        <>
            <HeaderStyle>
                <h1>{ clientName }</h1>
            </HeaderStyle>

            <Container>
                <form onSubmit={ handleSubmit(onSubmitFunction) }>

                    <h1>Register Contact</h1>

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
                </form>

                <menu>
                    <h1>Contacts</h1>
                    {
                        contacts?.map((contact: any) => <Contact contact={ contact }/>)
                    }
                </menu>
            </Container>
        </>
    )
}

export { Home }
