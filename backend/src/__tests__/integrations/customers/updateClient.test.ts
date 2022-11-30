import { AppDataSource } from '../../../data-source'
import { client, updated_client } from '../../../mocks'
import { DataSource } from 'typeorm'
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

    test('PATCH - Must update a client', async () => {

        const new_client = await request(app).post('/customers').send(client)

        const response = await request(app).patch(`/customers/${ new_client.body.id }`).send(updated_client)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
        expect(response.body).toHaveProperty('created_at')
    })
})
