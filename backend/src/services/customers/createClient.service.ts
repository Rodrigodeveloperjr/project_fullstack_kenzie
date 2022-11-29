import { IClientRequest } from '../../interfaces/customers'
import { AppDataSource } from '../../data-source'
import { Client } from '../../entities/customers'


const createClientService = async ({ name, email, telephone }: IClientRequest): Promise<Client> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = new Client()
    client.name = name
    client.email = email
    client.telephone = telephone
    client.contacts = []

    clientRepository.create(client)
    await clientRepository.save(client)

    return client
}

export { createClientService }
