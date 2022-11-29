import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contacts'
import { Client } from '../../entities/customers'


const listContactsForClientService = async (id: string): Promise<Contact[]> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({ where: { id }, relations: [ 'contacts' ] })

    return client!.contacts
}

export { listContactsForClientService }
