import { IContactComponent } from '../../interfaces'
import { Container } from './style'


const Contact = ({ contact }: IContactComponent) => {

    return (
        <Container>
            <p>Name: { contact.name }</p>
            <p>Email: { contact.email }</p>
            <p>Telephone: { contact.telephone }</p>
        </Container>
    )
}

export { Contact }
