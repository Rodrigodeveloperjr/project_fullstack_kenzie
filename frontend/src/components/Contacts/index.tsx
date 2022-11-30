import { IContactProps } from '../../App'
import { Contact } from '../Contact'
import { Container } from './style'


const Contacts = (contacts: any) => {

    return (
        <Container>
            {
                contacts?.map((contact: IContactProps) => <Contact contact={ contact } key={ contact.id } />)
            }
        </Container>
    )
}

export { Contacts }
