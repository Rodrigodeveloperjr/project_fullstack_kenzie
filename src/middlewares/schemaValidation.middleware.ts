import { Request, Response, NextFunction } from 'express'
import { AnySchema } from 'yup'


const schemaValidationMiddleware = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body

    const validated_data = await schema.validate(data)

    req.body = validated_data
    
    next()
}

export { schemaValidationMiddleware }
