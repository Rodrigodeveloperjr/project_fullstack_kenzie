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

    test('POST - Must create a contact', async () => {

        const response = await request(app).post('/contacts').send(contact)

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
    })
})
