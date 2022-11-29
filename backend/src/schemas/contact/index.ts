import { IContactRequest } from '../../interfaces/contacts'
import { SchemaOf } from 'yup'
import * as yup from 'yup'


const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({

    name: yup.string().required(),
    email: yup.string().required(),
    telephone: yup.string().required(),
})

export { contactSchema }
