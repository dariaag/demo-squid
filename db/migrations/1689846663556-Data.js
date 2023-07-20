module.exports = class Data1689846663556 {
    name = 'Data1689846663556'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "hash" text NOT NULL, "from" text NOT NULL, "input" text NOT NULL, "caller" text NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
    }
}
