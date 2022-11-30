import { IContactRequest } from '../../interfaces/contacts'
import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts'
import { Client } from '../../entities/customers'


const createContactService = async (clientEmail: string, { name, email, telephone }: IContactRequest): Promise<Contact> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({ email: clientEmail })

    const contact = new Contact()
    contact.name = name
    contact.email = email
    contact.telephone = telephone
    contact.client = client!

    contactRepository.create(contact)
    await contactRepository.save(contact)

    return contact
}

export { createContactService }
