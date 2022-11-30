import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { client } from '../../../mocks'
import { app } from '../../../app'
import request from 'supertest'


describe('/customers', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('POST - Must create a client', async () => {

        const response = await request(app).post('/customers').send(client)

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
        expect(response.body).toHaveProperty('created_at')
    })
})
