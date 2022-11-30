import { createClientService } from '../../../services/customers/createClient.service'
import { updateClientService } from '../../../services/customers/updateClient.service'
import { AppDataSource } from '../../../data-source'
import { client, updated_client } from '../../../mocks'
import { DataSource } from 'typeorm'


describe('/customers', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('PATCH - Must update a client', async () => {

        const new_client = await createClientService(client)

        const result = await updateClientService(new_client.id, updated_client)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('name')
        expect(result).toHaveProperty('email')
        expect(result).toHaveProperty('telephone')
        expect(result).toHaveProperty('created_at')
    })
})
