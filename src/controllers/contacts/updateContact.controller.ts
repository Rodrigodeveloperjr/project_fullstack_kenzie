import { updateContactService } from '../../services/contacts/updateContact.service'
import { IContactRequest } from '../../interfaces/contacts'
import { Request, Response } from 'express'


const updateContactController = async (req: Request, res: Response) => {

    const id: string = req.params.id

    const { name, email, telephone }: IContactRequest = req.body

    const updated_contact = await updateContactService(id, { name, email, telephone })

    return res.json(updated_contact)
}

export { updateContactController }
