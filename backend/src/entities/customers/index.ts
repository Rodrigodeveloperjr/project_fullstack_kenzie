import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { Contact } from '../contacts'


@Entity('customers')

class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    telephone: string

    @CreateDateColumn()
    created_at: Date

    @OneToMany(_ => Contact, contact => contact.client, { eager: true })
    contacts: Contact[]
}

export { Client }
