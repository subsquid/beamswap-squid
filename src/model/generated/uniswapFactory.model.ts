import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class UniswapFactory {
  constructor(props?: Partial<UniswapFactory>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("int4", {nullable: false})
  pairCount!: number

  @Column_("numeric", {nullable: false})
  totalVolumeUSD!: number

  @Column_("numeric", {nullable: false})
  totalVolumeETH!: number

  @Column_("numeric", {nullable: false})
  untrackedVolumeUSD!: number

  @Column_("numeric", {nullable: false})
  totalLiquidityUSD!: number

  @Column_("numeric", {nullable: false})
  totalLiquidityETH!: number

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  txCount!: bigint
}