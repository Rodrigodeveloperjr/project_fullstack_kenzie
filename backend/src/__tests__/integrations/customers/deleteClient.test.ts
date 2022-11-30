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

    test('DELETE - Must delete a client', async () => {

        const new_client = await request(app).post('/customers').send(client)

        const response = await request(app).delete(`/customers/${ new_client.body.id }`)

        expect(response.status).toBe(204)
    })
})
