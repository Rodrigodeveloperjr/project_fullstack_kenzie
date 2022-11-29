interface IContactRequest {
    name: string
    email: string
    telephone: string
}

interface IContactUpdateRequest {
    name?: string
    email?: string
    telephone?: string
}

export { IContactRequest, IContactUpdateRequest }
