import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Transaction {
  constructor(props?: Partial<Transaction>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  blockNumber!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  timestamp!: bigint

  @Column_("text", {array: true, nullable: false})
  mints!: (string | undefined | null)[]

  @Column_("text", {array: true, nullable: false})
  burns!: (string | undefined | null)[]

  @Column_("text", {array: true, nullable: false})
  swaps!: (string | undefined | null)[]
}