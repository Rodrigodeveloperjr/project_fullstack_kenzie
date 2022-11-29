import { IClientUpdateRequest } from '../../interfaces/customers'
import { AppDataSource } from '../../data-source'
import { Client } from '../../entities/customers'
import { AppError } from '../../errors'


const updateClientService = async (id: string, { name, email, telephone }: IClientUpdateRequest): Promise<Client> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const find_client = await clientRepository.findOneBy({ id })

    if(!find_client) {

        throw new AppError('Client not found', 404)
    }

    await clientRepository.update(id, {

        name: name ? name : find_client.name,
        email: email ? email : find_client.email,
        telephone: telephone ? telephone : find_client.telephone,
    })

    const client = await clientRepository.findOneBy({ id })

    return client!
}

export { updateClientService }
