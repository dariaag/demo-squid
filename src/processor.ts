import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import * as zeroX from "./abi/0x6ACAb4C9c4e3a0c78435FDB5Ad1719C95460a668";
import * as proxy from "./abi/proxy";
let ACCOUNT_ADDRESS = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";

// commandline arguments

export const processor = new EvmBatchProcessor()
  .setBlockRange({ from: 17620627 })
  .setDataSource({
    archive: lookupArchive("eth-mainnet"),
    chain: "https://rpc.ankr.com/eth",
  })
  .setFinalityConfirmation(10)
  .setFields({
    transaction: {
      from: true,
      value: true,
      hash: true,
      input: true,
    },
  })

  // Txs sent to zero

  .addTransaction({
    to: [ACCOUNT_ADDRESS],
    sighash: ["0xd9627aa4"], //sell to Uniswap sighash
  });
