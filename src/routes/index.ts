import { Express } from 'express'

import { customers_routes } from './customers/customers.routes'
import { contacts_routes } from './contacts/contacts.routes'


const app_routes = (app: Express) => {

    app.use('/customers', customers_routes())
    app.use('/contacts', contacts_routes())
}

export { app_routes }
