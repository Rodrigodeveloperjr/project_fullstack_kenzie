import { createClientService } from '../../services/customers/createClient.service'
import { IClientRequest } from '../../interfaces/customers'
import { Request, Response } from 'express'


const createClientController = async (req: Request, res: Response) => {

    req.clientEmail = req.body.email

    const { name, email, telephone }: IClientRequest = req.body

    const client = await createClientService({ name, email, telephone })

    return res.status(201).json(client)
}

export { createClientController }
