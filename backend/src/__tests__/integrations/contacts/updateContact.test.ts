import { contact, updated_contact } from '../../../mocks'
import { AppDataSource } from '../../../data-source'
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

    test('PATCH - Must update a contact', async () => {

        const new_contact = await request(app).post('/contacts').send(contact)

        const response = await request(app).patch(`/contacts/${ new_contact.body.id }`).send(updated_contact)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
    })
})
