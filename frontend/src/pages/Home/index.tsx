import { useState } from 'react'
import { Contact } from '../../components/Contact'
import { FormContacts } from '../../components/FormContacts'
import { Container, HeaderStyle } from './style'


const Home = () => {

    const client = localStorage.getItem('Project FullStack Kenzie: client.name')

    const [ contacts, setContacts ] = useState([])

    const addContact = (contact: never) => {
        
        setContacts([ ...contacts, contact ])
        
        console.log(contacts)
    }

    return (
        <>
            <HeaderStyle>
                <h1>{ client }</h1>
            </HeaderStyle>

            <Container>
                <FormContacts addContact={ addContact } setContacts={ setContacts } />

                <menu>
                    {
                        contacts.map(contact => <Contact contact={ contact }/>)
                    }
                </menu>
            </Container>
        </>
    )
}

export { Home }
