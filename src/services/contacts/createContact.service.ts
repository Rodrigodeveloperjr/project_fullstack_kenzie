import { IContactRequest } from '../../interfaces/contacts'
import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts'


const createContactService = async ({ name, email, telephone }: IContactRequest): Promise<Contact> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = new Contact()
    contact.name = name
    contact.email = email
    contact.telephone = telephone

    contactRepository.create(contact)
    await contactRepository.save(contact)

    return contact
}

export { createContactService }
