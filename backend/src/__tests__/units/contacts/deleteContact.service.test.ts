import { deleteContactService } from '../../../services/contacts/deleteContact.service'
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

    test('DELETE - Must delete a contact', async () => {

        const new_client = await createClientService(client)

        const new_contact = await createContactService(new_client.email, contact)

        const result = await deleteContactService(new_contact.id)

        expect(result).toBeUndefined()
    })
})
