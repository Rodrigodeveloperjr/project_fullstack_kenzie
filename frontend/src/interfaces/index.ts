import { UseFormRegister, FieldValues } from 'react-hook-form'
import { MouseEventHandler } from 'react'


export interface IButtonProps {
    children: React.ReactNode
    onClick?: MouseEventHandler
    disabled?: boolean | undefined
    type?: 'button' | 'submit' | 'reset' | undefined
}

export interface InputProps {
    label: string
    register: UseFormRegister<FieldValues>
    name: string
    error: any
    type: string | undefined
    placeholder: string
}

export interface IClientProps {
	id: string
	name: string
	email: string
	telephone: string
	created_at: string
}

export interface IContactProps {
	id: string
	name: string
	email: string
	telephone: string
}

export interface IContactComponent {
    contact: IContactProps
}
