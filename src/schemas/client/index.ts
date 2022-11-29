import { IClientRequest } from '../../interfaces/customers'
import { SchemaOf } from 'yup'
import * as yup from 'yup'


const clientSchema: SchemaOf<IClientRequest> = yup.object().shape({

    name: yup.string().required(),
    email: yup.string().required(),
    telephone: yup.string().required(),
})

export { clientSchema }
