import { Container } from './styles/global'
import { FormContacts } from './components/FormContacts'
import { useEffect, useState } from 'react'
import { api } from './services/api'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Contact } from './components/Contact'


interface IClientProps {
	id: string
	name: string
	email: string
	telephone: string
	created_at: string
}

export interface IContactProps {
	id: string
	name: string
	email: string
	telephone: string
}

const App = () => {

	const [ contacts, setContacts ] = useState<IContactProps[]>()

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
        .then(res => {

			console.log(res.data.id)
			
			api.get(`/customers/${ res.data.id }`, {

				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => {
				setContacts(res.data)
				
				console.log(res.data)
			})
			.catch(err => console.error(err))
		})
        .catch(err => console.error(err))
        .finally(() => setLoad(false))
    }

	return (
		<Container>
			<div>
				<form onSubmit={ handleSubmit(onSubmitFunction) }>

					<h1>Client</h1>

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

				<FormContacts />
			</div>

			<menu>
				{
					contacts?.map((contact: IContactProps) => <Contact contact={ contact } key={ contact.id } />)
				}
			</menu>
		</Container>
	)
}

export { App }
