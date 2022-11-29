interface IClientRequest {
    name: string
    email: string
    telephone: string
}

interface IClientUpdateRequest {
    name?: string
    email?: string
    telephone?: string
}

export { IClientRequest, IClientUpdateRequest }
