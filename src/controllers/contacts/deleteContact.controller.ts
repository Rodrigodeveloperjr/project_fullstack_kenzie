import { deleteContactService } from '../../services/contacts/deleteContact.service'
import { Request, Response } from 'express'


const deleteContactController = async (req: Request, res: Response) => {
    
    const id: string = req.params.id

    await deleteContactService(id)

    return res.status(204).json()
}

export { deleteContactController }
