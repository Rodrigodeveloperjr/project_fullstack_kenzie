import { listContactsForClientService } from '../../services/customers/listContactsForClient.service'
import { Request, Response } from 'express'


const listContactsForClientController = async (req: Request, res: Response) => {

    const id: string = req.params.id

    const contacts = await listContactsForClientService(id)

    return res.json(contacts)
}

export { listContactsForClientController }
