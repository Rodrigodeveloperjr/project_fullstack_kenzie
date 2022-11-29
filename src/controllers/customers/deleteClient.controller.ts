import { deleteClientService } from '../../services/customers/deleteClient.service'
import { Request, Response } from 'express'


const deleteClientController = async (req: Request, res: Response) => {

    const id: string = req.params.id

    await deleteClientService(id)

    return res.status(204).json()
}

export { deleteClientController }
