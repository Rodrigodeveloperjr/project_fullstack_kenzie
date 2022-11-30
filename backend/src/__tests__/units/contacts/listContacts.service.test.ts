import { listContactsService } from '../../../services/contacts/listContacts.service'
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

    test('GET - Must list contacts', async () => {

        const result = await listContactsService()

        expect(result).toHaveProperty('map')
    })
})
