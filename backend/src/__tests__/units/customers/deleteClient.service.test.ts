import { createClientService } from '../../../services/customers/createClient.service'
import { deleteClientService } from '../../../services/customers/deleteClient.service'
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

    test('DELETE - Must delete a client', async () => {

        const new_client = await createClientService(client)

        const result = await deleteClientService(new_client.id)

        expect(result).toBeUndefined()
    })
})
