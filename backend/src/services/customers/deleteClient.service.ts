import { AppDataSource } from '../../data-source'
import { Client } from '../../entities/customers'
import { AppError } from '../../errors'


const deleteClientService = async (id: string): Promise<void> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({ id })

    if(!client) {

        throw new AppError('Client not found', 404)
    }

    await clientRepository.delete(client.id)
}

export { deleteClientService }
