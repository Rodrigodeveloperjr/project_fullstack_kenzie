import { Router } from 'express'

import { deleteContactController } from '../../controllers/contacts/deleteContact.controller'
import { createContactController } from '../../controllers/contacts/createContact.controller'
import { updateContactController } from '../../controllers/contacts/updateContact.controller'
import { listContactsController } from '../../controllers/contacts/listContacts.controller'

import { schemaValidationMiddleware } from '../../middlewares/schemaValidation.middleware'
import { contactSchema } from '../../schemas/contact'


const routes = Router()

const contacts_routes = () => {

    routes.post('', schemaValidationMiddleware(contactSchema), createContactController)

    routes.get('', listContactsController)

    routes.patch('/:id', updateContactController)

    routes.delete('/:id', deleteContactController)

    return routes
}

export { contacts_routes }
