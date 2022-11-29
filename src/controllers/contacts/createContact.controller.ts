import { createContactService } from '../../services/contacts/createContact.service'
import { IContactRequest } from '../../interfaces/contacts'
import { Request, Response } from 'express'


const createContactController = async (req: Request, res: Response) => {

    const { name, email, telephone }: IContactRequest = req.body

    const contact = await createContactService({ name, email, telephone })

    return res.status(201).json(contact)
}

export { createContactController }
