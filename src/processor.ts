import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import * as zeroX from "./abi/0x6ACAb4C9c4e3a0c78435FDB5Ad1719C95460a668";
let ACCOUNT_ADDRESS = "0x6ACAb4C9c4e3a0c78435FDB5Ad1719C95460a668";

// commandline arguments

export const processor = new EvmBatchProcessor()
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

  // Txs sent to vitalik.eth

  // Txs sent from vitalik.eth
  .addTransaction({
    to: [ACCOUNT_ADDRESS],
    sighash: [zeroX.functions.batchBuyERC1155s.sighash],
  });
