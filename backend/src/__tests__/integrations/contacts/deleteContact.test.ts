import { AppDataSource } from '../../../data-source'
import { contact } from '../../../mocks'
import { DataSource } from 'typeorm'
import { app } from '../../../app'
import request from 'supertest'


describe('/contacts', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('DELETE - Must delete a contact', async () => {

        const new_contact = await request(app).post('/contacts').send(contact)

        const response = await request(app).delete(`/contacts/${ new_contact.body.id }`)

        expect(response.status).toBe(204)
    })
})
