import { IContactUpdateRequest } from '../../interfaces/contacts'
import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts'
import { AppError } from '../../errors'


const updateContactService = async (id: string, { name, email, telephone }: IContactUpdateRequest): Promise<Contact> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const find_contact = await contactRepository.findOneBy({ id })

    if(!find_contact) {

        throw new AppError('Contact not found', 404)
    }

    await contactRepository.update(id, {

        name: name ? name : find_contact.name,
        email: email ? email : find_contact.email,
        telephone: telephone ? telephone : find_contact.telephone,
    })

    const contact = await contactRepository.findOneBy({ id })

    return contact!
}

export { updateContactService }
