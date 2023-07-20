import { TypeormDatabase } from "@subsquid/typeorm-store";
import { processor } from "./processor";
import { Transaction } from "./model";
import * as zeroX from "./abi/0x6ACAb4C9c4e3a0c78435FDB5Ad1719C95460a668";

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  let batchBuyERC1155s: Transaction[] = [];

  /* for (let block of ctx.blocks) {
    for (let transaction of block.transactions) {
      let {
        sellOrders,
        signatures,
        erc1155TokenAmounts,
        callbackData,
        revertIfIncomplete,
      } = zeroX.functions.batchBuyERC1155s.decode(transaction.input);
      batchBuyERC1155s.push(
        new Transaction({
          id: transaction.hash,
          timestamp: new Date(block.header.timestamp),
          from: transaction.from || "0x",
          hash: transaction.hash,
          input: transaction.input,
          caller: transaction.from,
        })
      );
    }
  }

  await ctx.store.insert(batchBuyERC1155s); */
});
