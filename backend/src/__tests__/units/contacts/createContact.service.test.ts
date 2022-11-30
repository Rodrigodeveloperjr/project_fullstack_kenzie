import { createContactService } from '../../../services/contacts/createContact.service'
import { createClientService } from '../../../services/customers/createClient.service'
import { AppDataSource } from '../../../data-source'
import { client, contact } from '../../../mocks'
import { DataSource } from 'typeorm'


describe('/contacts', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('POST - Must create a contact', async () => {

        const new_client = await createClientService(client)

        const result = await createContactService(new_client.email, contact)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('name')
        expect(result).toHaveProperty('email')
        expect(result).toHaveProperty('telephone')
    })
})
