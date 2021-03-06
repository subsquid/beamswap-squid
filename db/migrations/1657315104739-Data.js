module.exports = class Data1657315104739 {
  name = 'Data1657315104739'

  async up(db) {
    await db.query(`CREATE TABLE "uniswap_factory" ("id" character varying NOT NULL, "pair_count" integer NOT NULL, "total_volume_usd" text NOT NULL, "total_volume_eth" text NOT NULL, "untracked_volume_usd" text NOT NULL, "total_liquidity_usd" text NOT NULL, "total_liquidity_eth" text NOT NULL, "tx_count" integer NOT NULL, CONSTRAINT "PK_89dd10e302aec5fac5bbf1d35f0" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "token" ("id" character varying NOT NULL, "symbol" text NOT NULL, "name" text NOT NULL, "decimals" integer NOT NULL, "total_supply" text NOT NULL, "trade_volume" text NOT NULL, "trade_volume_usd" text NOT NULL, "untracked_volume_usd" text NOT NULL, "tx_count" integer NOT NULL, "total_liquidity" text NOT NULL, "derived_eth" text NOT NULL, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "usd_swapped" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "liquidity_position" ("id" character varying NOT NULL, "liquidity_token_balance" text NOT NULL, "user_id" character varying, "pair_id" character varying, CONSTRAINT "PK_db00d963c96b3914d26abe3c3d2" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_781470585a67fef4e215a59977" ON "liquidity_position" ("user_id") `)
    await db.query(`CREATE INDEX "IDX_5a626c8b8962dc01e0f8801be6" ON "liquidity_position" ("pair_id") `)
    await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "mints" text array NOT NULL, "burns" text array NOT NULL, "swaps" text array NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "mint" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "to" text NOT NULL, "liquidity" text NOT NULL, "sender" text, "amount0" text, "amount1" text, "log_index" integer, "amount_usd" text, "fee_to" text, "fee_liquidity" text, "transaction_id" character varying, "pair_id" character varying, CONSTRAINT "PK_fcaea791104aa41aa11dac29cb2" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_19f4328320501dfd14e2bae085" ON "mint" ("transaction_id") `)
    await db.query(`CREATE INDEX "IDX_81d470127d4c55d09e9213bc4e" ON "mint" ("pair_id") `)
    await db.query(`CREATE TABLE "burn" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "liquidity" text NOT NULL, "sender" text, "amount0" text, "amount1" text, "to" text, "log_index" integer, "amount_usd" text, "needs_complete" boolean NOT NULL, "fee_to" text, "fee_liquidity" text, "transaction_id" character varying, "pair_id" character varying, CONSTRAINT "PK_dcb4f14ee4534154b31116553f0" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_20ec76c5c56dd6b47dec5f0aaa" ON "burn" ("transaction_id") `)
    await db.query(`CREATE INDEX "IDX_ba144ce938b3266a470d4dd70f" ON "burn" ("pair_id") `)
    await db.query(`CREATE TABLE "swap" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "sender" text NOT NULL, "from" text, "amount0_in" text NOT NULL, "amount1_in" text NOT NULL, "amount0_out" text NOT NULL, "amount1_out" text NOT NULL, "to" text NOT NULL, "log_index" integer, "amount_usd" text NOT NULL, "transaction_id" character varying, "pair_id" character varying, CONSTRAINT "PK_4a10d0f359339acef77e7f986d9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_78506c4050ae7cedd50b08c0dc" ON "swap" ("transaction_id") `)
    await db.query(`CREATE INDEX "IDX_3571ab1dad7640a6b93c705b8f" ON "swap" ("pair_id") `)
    await db.query(`CREATE TABLE "pair" ("id" character varying NOT NULL, "reserve0" text NOT NULL, "reserve1" text NOT NULL, "total_supply" text NOT NULL, "reserve_eth" text NOT NULL, "reserve_usd" text NOT NULL, "tracked_reserve_eth" text NOT NULL, "token0_price" text NOT NULL, "token1_price" text NOT NULL, "volume_token0" text NOT NULL, "volume_token1" text NOT NULL, "volume_usd" text NOT NULL, "untracked_volume_usd" text NOT NULL, "tx_count" integer NOT NULL, "created_at_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at_block_number" integer NOT NULL, "liquidity_provider_count" integer NOT NULL, "token0_id" character varying, "token1_id" character varying, CONSTRAINT "PK_3eaf216329c5c50aedb94fa797e" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_f74dc53460944a424b56b8f7da" ON "pair" ("token0_id") `)
    await db.query(`CREATE INDEX "IDX_4419691fc411b8af754dfa65ce" ON "pair" ("token1_id") `)
    await db.query(`CREATE TABLE "bundle" ("id" character varying NOT NULL, "eth_price" text NOT NULL, CONSTRAINT "PK_637e3f87e837d6532109c198dea" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "liquidity_position" ADD CONSTRAINT "FK_781470585a67fef4e215a599773" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "liquidity_position" ADD CONSTRAINT "FK_5a626c8b8962dc01e0f8801be61" FOREIGN KEY ("pair_id") REFERENCES "pair"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "mint" ADD CONSTRAINT "FK_19f4328320501dfd14e2bae0855" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "mint" ADD CONSTRAINT "FK_81d470127d4c55d09e9213bc4e1" FOREIGN KEY ("pair_id") REFERENCES "pair"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "burn" ADD CONSTRAINT "FK_20ec76c5c56dd6b47dec5f0aaa8" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "burn" ADD CONSTRAINT "FK_ba144ce938b3266a470d4dd70fa" FOREIGN KEY ("pair_id") REFERENCES "pair"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "swap" ADD CONSTRAINT "FK_78506c4050ae7cedd50b08c0dc5" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "swap" ADD CONSTRAINT "FK_3571ab1dad7640a6b93c705b8f7" FOREIGN KEY ("pair_id") REFERENCES "pair"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "pair" ADD CONSTRAINT "FK_f74dc53460944a424b56b8f7da5" FOREIGN KEY ("token0_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "pair" ADD CONSTRAINT "FK_4419691fc411b8af754dfa65ce4" FOREIGN KEY ("token1_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "uniswap_factory"`)
    await db.query(`DROP TABLE "token"`)
    await db.query(`DROP TABLE "user"`)
    await db.query(`DROP TABLE "liquidity_position"`)
    await db.query(`DROP INDEX "public"."IDX_781470585a67fef4e215a59977"`)
    await db.query(`DROP INDEX "public"."IDX_5a626c8b8962dc01e0f8801be6"`)
    await db.query(`DROP TABLE "transaction"`)
    await db.query(`DROP TABLE "mint"`)
    await db.query(`DROP INDEX "public"."IDX_19f4328320501dfd14e2bae085"`)
    await db.query(`DROP INDEX "public"."IDX_81d470127d4c55d09e9213bc4e"`)
    await db.query(`DROP TABLE "burn"`)
    await db.query(`DROP INDEX "public"."IDX_20ec76c5c56dd6b47dec5f0aaa"`)
    await db.query(`DROP INDEX "public"."IDX_ba144ce938b3266a470d4dd70f"`)
    await db.query(`DROP TABLE "swap"`)
    await db.query(`DROP INDEX "public"."IDX_78506c4050ae7cedd50b08c0dc"`)
    await db.query(`DROP INDEX "public"."IDX_3571ab1dad7640a6b93c705b8f"`)
    await db.query(`DROP TABLE "pair"`)
    await db.query(`DROP INDEX "public"."IDX_f74dc53460944a424b56b8f7da"`)
    await db.query(`DROP INDEX "public"."IDX_4419691fc411b8af754dfa65ce"`)
    await db.query(`DROP TABLE "bundle"`)
    await db.query(`ALTER TABLE "liquidity_position" DROP CONSTRAINT "FK_781470585a67fef4e215a599773"`)
    await db.query(`ALTER TABLE "liquidity_position" DROP CONSTRAINT "FK_5a626c8b8962dc01e0f8801be61"`)
    await db.query(`ALTER TABLE "mint" DROP CONSTRAINT "FK_19f4328320501dfd14e2bae0855"`)
    await db.query(`ALTER TABLE "mint" DROP CONSTRAINT "FK_81d470127d4c55d09e9213bc4e1"`)
    await db.query(`ALTER TABLE "burn" DROP CONSTRAINT "FK_20ec76c5c56dd6b47dec5f0aaa8"`)
    await db.query(`ALTER TABLE "burn" DROP CONSTRAINT "FK_ba144ce938b3266a470d4dd70fa"`)
    await db.query(`ALTER TABLE "swap" DROP CONSTRAINT "FK_78506c4050ae7cedd50b08c0dc5"`)
    await db.query(`ALTER TABLE "swap" DROP CONSTRAINT "FK_3571ab1dad7640a6b93c705b8f7"`)
    await db.query(`ALTER TABLE "pair" DROP CONSTRAINT "FK_f74dc53460944a424b56b8f7da5"`)
    await db.query(`ALTER TABLE "pair" DROP CONSTRAINT "FK_4419691fc411b8af754dfa65ce4"`)
  }
}
