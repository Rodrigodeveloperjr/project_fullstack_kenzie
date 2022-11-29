import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts'


const listContactsService = async (): Promise<Contact[]> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    return await contactRepository.find()
}

export { listContactsService }
