import { Router } from 'express'

import { listContactsForClientController } from '../../controllers/customers/listContactsForClient.controller'
import { deleteClientController } from '../../controllers/customers/deleteClient.controller'
import { createClientController } from '../../controllers/customers/createClient.controller'
import { updateClientController } from '../../controllers/customers/updateClient.controller'

import { schemaValidationMiddleware } from '../../middlewares/schemaValidation.middleware'
import { clientSchema } from '../../schemas/client'


const routes = Router()

const customers_routes = () => {

    routes.post('', schemaValidationMiddleware(clientSchema), createClientController)

    routes.get('/:id', listContactsForClientController)

    routes.patch('/:id', updateClientController)

    routes.delete('/:id', deleteClientController)

    return routes
}

export { customers_routes }
