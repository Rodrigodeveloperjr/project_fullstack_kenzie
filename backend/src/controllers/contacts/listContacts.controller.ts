import { listContactsService } from '../../services/contacts/listContacts.service'
import { Request, Response } from 'express'


const listContactsController = async (req: Request, res: Response) => {
    
    const contacts = await listContactsService()

    return res.json(contacts)
}

export { listContactsController }
