import { createClientService } from '../../../services/customers/createClient.service'
import { AppDataSource } from '../../../data-source'
import { client } from '../../../mocks'
import { DataSource } from 'typeorm'


describe('/customers', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('POST - Must create a client', async () => {

        const result = await createClientService(client)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('name')
        expect(result).toHaveProperty('email')
        expect(result).toHaveProperty('telephone')
        expect(result).toHaveProperty('created_at')
    })
})
