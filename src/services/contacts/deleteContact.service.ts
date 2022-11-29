import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts'
import { AppError } from '../../errors'


const deleteContactService = async (id: string): Promise<void> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({ id })

    if(!contact) {

        throw new AppError('Contact not found', 404)
    }

    await contactRepository.delete(contact.id)
}

export { deleteContactService }
