import { IContactRequest, IContactUpdateRequest } from '../interfaces/contacts'
import { IClientRequest, IClientUpdateRequest } from '../interfaces/customers'


const client: IClientRequest = {
    name: 'johndoe',
    email: 'johndoe@org.com',
    telephone: '(99) 9 9999-9999'
}

const updated_client: IClientUpdateRequest = {
    name: 'example',
    email: 'example@org.com'
}

const contact: IContactRequest = {
    name: 'johndoe',
    email: 'johndoe@org.com',
    telephone: '(99) 9 9999-9999'
}

const updated_contact: IContactUpdateRequest = {
    name: 'example',
    email: 'example@org.com'
}

export { client, updated_client, contact, updated_contact }
