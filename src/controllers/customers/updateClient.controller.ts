import { updateClientService } from '../../services/customers/updateClient.service'
import { IClientRequest } from '../../interfaces/customers'
import { Request, Response } from 'express'


const updateClientController = async (req: Request, res: Response) => {

    const id: string = req.params.id

    const { name, email, telephone }: IClientRequest = req.body

    const updated_client = await updateClientService(id, { name, email, telephone })

    return res.json(updated_client)
}

export { updateClientController }
