import { createContactService } from '../../../services/contacts/createContact.service'
import { createClientService } from '../../../services/customers/createClient.service'
import { updateContactService } from '../../../services/contacts/updateContact.service'
import { client, contact, updated_contact } from '../../../mocks'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'


describe('/contacts', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('PATCH - Must delete a contact', async () => {

        const new_client = await createClientService(client)

        const new_contact = await createContactService(new_client.email, contact)

        console.log(new_contact)

        const result = await updateContactService(new_contact.id, updated_contact)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('name')
        expect(result).toHaveProperty('email')
        expect(result).toHaveProperty('telephone')
    })
})
