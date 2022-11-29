import { DataSource } from 'typeorm'


require('dotenv').config()

const AppDataSource = new DataSource(

    process.env.NODE_ENV === 'test' ? 

    {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: [ 'src/entities/**/*.ts' ]
    }
    :
    {
        type: 'postgres',
        host: process.env.HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: true,
        logging: true,
        entities: [ 'src/entities/**/*.ts' ],
        migrations: [ 'src/migrations/**/*.ts' ]
    }
)

export { AppDataSource }
