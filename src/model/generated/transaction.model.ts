import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Transaction {
    constructor(props?: Partial<Transaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    hash!: string

    @Column_("text", {nullable: false})
    from!: string

    @Column_("text", {nullable: false})
    input!: string

    @Column_("text", {nullable: false})
    caller!: string
}
