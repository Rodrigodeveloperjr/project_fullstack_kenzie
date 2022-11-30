import { Container } from './style'


const Contact = ({ contact }: any) => {

    return (
        <Container>
            <p>{ contact.name }</p>
            <p>{ contact.email }</p>
            <p>{ contact.telephone }</p>
        </Container>
    )
}

export { Contact }
