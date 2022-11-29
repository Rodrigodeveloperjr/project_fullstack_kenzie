import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Client } from '../customers'


@Entity('contacts')

class Contact {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    telephone: string

    @ManyToOne(_ => Client, client => client.contacts)
    client: Client
}

export { Contact }
