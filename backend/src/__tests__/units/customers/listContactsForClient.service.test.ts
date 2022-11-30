import { listContactsForClientService } from '../../../services/customers/listContactsForClient.service'
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

    test('GET - Must list all contacts for a customer', async () => {

        const new_client = await createClientService(client)

        const result = await listContactsForClientService(new_client.id)

        expect(result).toHaveProperty('map')
    })
})
