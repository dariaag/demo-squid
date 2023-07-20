export const ABI_JSON = [
    {
        "type": "function",
        "name": "_fillLimitOrder",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFeeAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "address",
                        "name": "feeRecipient"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            },
            {
                "type": "address",
                "name": "taker"
            },
            {
                "type": "address",
                "name": "sender"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "_fillOtcOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            },
            {
                "type": "address",
                "name": "taker"
            },
            {
                "type": "bool",
                "name": "useSelfBalance"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "_fillRfqOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            },
            {
                "type": "address",
                "name": "taker"
            },
            {
                "type": "bool",
                "name": "useSelfBalance"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "_multiplexBatchSell",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address",
                        "name": "inputToken"
                    },
                    {
                        "type": "address",
                        "name": "outputToken"
                    },
                    {
                        "type": "uint256",
                        "name": "sellAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "calls"
                    },
                    {
                        "type": "bool",
                        "name": "useSelfBalance"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "address",
                        "name": "payer"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "_multiplexMultiHopSell",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address[]",
                        "name": "tokens"
                    },
                    {
                        "type": "uint256",
                        "name": "sellAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "calls"
                    },
                    {
                        "type": "bool",
                        "name": "useSelfBalance"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "address",
                        "name": "payer"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "_sellHeldTokenForTokenToUniswapV3",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "encodedPath"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "buyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "_sellTokenForTokenToUniswapV3",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "encodedPath"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "address",
                "name": "payer"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "buyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "_transformERC20",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "args",
                "components": [
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "inputToken"
                    },
                    {
                        "type": "address",
                        "name": "outputToken"
                    },
                    {
                        "type": "uint256",
                        "name": "inputTokenAmount"
                    },
                    {
                        "type": "uint256",
                        "name": "minOutputTokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "transformations"
                    },
                    {
                        "type": "bool",
                        "name": "useSelfBalance"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "outputTokenAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchBuyERC1155s",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "sellOrders"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            },
            {
                "type": "uint128[]",
                "name": "erc1155TokenAmounts"
            },
            {
                "type": "bytes[]",
                "name": "callbackData"
            },
            {
                "type": "bool",
                "name": "revertIfIncomplete"
            }
        ],
        "outputs": [
            {
                "type": "bool[]",
                "name": "successes"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchBuyERC721s",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "sellOrders"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            },
            {
                "type": "bytes[]",
                "name": "callbackData"
            },
            {
                "type": "bool",
                "name": "revertIfIncomplete"
            }
        ],
        "outputs": [
            {
                "type": "bool[]",
                "name": "successes"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchCancelERC1155Orders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "orderNonces"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchCancelERC721Orders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "orderNonces"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchCancelLimitOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "orders"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchCancelPairLimitOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "makerTokens"
            },
            {
                "type": "address[]",
                "name": "takerTokens"
            },
            {
                "type": "uint256[]",
                "name": "minValidSalts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchCancelPairLimitOrdersWithSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "maker"
            },
            {
                "type": "address[]",
                "name": "makerTokens"
            },
            {
                "type": "address[]",
                "name": "takerTokens"
            },
            {
                "type": "uint256[]",
                "name": "minValidSalts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchCancelPairRfqOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "makerTokens"
            },
            {
                "type": "address[]",
                "name": "takerTokens"
            },
            {
                "type": "uint256[]",
                "name": "minValidSalts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchCancelPairRfqOrdersWithSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "maker"
            },
            {
                "type": "address[]",
                "name": "makerTokens"
            },
            {
                "type": "address[]",
                "name": "takerTokens"
            },
            {
                "type": "uint256[]",
                "name": "minValidSalts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchCancelRfqOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "orders"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchExecuteMetaTransactions",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "mtxs"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "returnResults"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchExecuteMetaTransactionsV2",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "mtxs"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "returnResults"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchFillLimitOrders",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "orders"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            },
            {
                "type": "uint128[]",
                "name": "takerTokenFillAmounts"
            },
            {
                "type": "bool",
                "name": "revertIfIncomplete"
            }
        ],
        "outputs": [
            {
                "type": "uint128[]",
                "name": "takerTokenFilledAmounts"
            },
            {
                "type": "uint128[]",
                "name": "makerTokenFilledAmounts"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchFillRfqOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "orders"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            },
            {
                "type": "uint128[]",
                "name": "takerTokenFillAmounts"
            },
            {
                "type": "bool",
                "name": "revertIfIncomplete"
            }
        ],
        "outputs": [
            {
                "type": "uint128[]",
                "name": "takerTokenFilledAmounts"
            },
            {
                "type": "uint128[]",
                "name": "makerTokenFilledAmounts"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchFillTakerSignedOtcOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "orders"
            },
            {
                "type": "tuple[]",
                "name": "makerSignatures"
            },
            {
                "type": "tuple[]",
                "name": "takerSignatures"
            },
            {
                "type": "bool[]",
                "name": "unwrapWeth"
            }
        ],
        "outputs": [
            {
                "type": "bool[]",
                "name": "successes"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchGetLimitOrderRelevantStates",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "orders"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "orderInfos"
            },
            {
                "type": "uint128[]",
                "name": "actualFillableTakerTokenAmounts"
            },
            {
                "type": "bool[]",
                "name": "isSignatureValids"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchGetRfqOrderRelevantStates",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "orders"
            },
            {
                "type": "tuple[]",
                "name": "signatures"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "orderInfos"
            },
            {
                "type": "uint128[]",
                "name": "actualFillableTakerTokenAmounts"
            },
            {
                "type": "bool[]",
                "name": "isSignatureValids"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchMatchERC721Orders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "sellOrders"
            },
            {
                "type": "tuple[]",
                "name": "buyOrders"
            },
            {
                "type": "tuple[]",
                "name": "sellOrderSignatures"
            },
            {
                "type": "tuple[]",
                "name": "buyOrderSignatures"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "profits"
            },
            {
                "type": "bool[]",
                "name": "successes"
            }
        ]
    },
    {
        "type": "function",
        "name": "buyERC1155",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "sellOrder",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc1155Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc1155TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc1155TokenProperties"
                    },
                    {
                        "type": "uint128",
                        "name": "erc1155TokenAmount"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "erc1155BuyAmount"
            },
            {
                "type": "bytes",
                "name": "callbackData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "buyERC721",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "sellOrder",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "bytes",
                "name": "callbackData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelERC1155Order",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "orderNonce"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelERC721Order",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "orderNonce"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelLimitOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFeeAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "address",
                        "name": "feeRecipient"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelPairLimitOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "makerToken"
            },
            {
                "type": "address",
                "name": "takerToken"
            },
            {
                "type": "uint256",
                "name": "minValidSalt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelPairLimitOrdersWithSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "maker"
            },
            {
                "type": "address",
                "name": "makerToken"
            },
            {
                "type": "address",
                "name": "takerToken"
            },
            {
                "type": "uint256",
                "name": "minValidSalt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelPairRfqOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "makerToken"
            },
            {
                "type": "address",
                "name": "takerToken"
            },
            {
                "type": "uint256",
                "name": "minValidSalt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelPairRfqOrdersWithSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "maker"
            },
            {
                "type": "address",
                "name": "makerToken"
            },
            {
                "type": "address",
                "name": "takerToken"
            },
            {
                "type": "uint256",
                "name": "minValidSalt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelRfqOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "createTransformWallet",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "wallet"
            }
        ]
    },
    {
        "type": "function",
        "name": "executeMetaTransaction",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "mtx",
                "components": [
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "minGasPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "maxGasPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "expirationTimeSeconds"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "value"
                    },
                    {
                        "type": "address",
                        "name": "feeToken"
                    },
                    {
                        "type": "uint256",
                        "name": "feeAmount"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "returnResult"
            }
        ]
    },
    {
        "type": "function",
        "name": "executeMetaTransactionV2",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "mtx",
                "components": [
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "expirationTimeSeconds"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "address",
                        "name": "feeToken"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "returnResult"
            }
        ]
    },
    {
        "type": "function",
        "name": "extend",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "selector"
            },
            {
                "type": "address",
                "name": "impl"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "fillLimitOrder",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFeeAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "address",
                        "name": "feeRecipient"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "fillOrKillLimitOrder",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFeeAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "address",
                        "name": "feeRecipient"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "fillOrKillRfqOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "fillOtcOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "fillOtcOrderForEth",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "fillOtcOrderWithEth",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "fillRfqOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "takerTokenFillAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "takerTokenFilledAmount"
            },
            {
                "type": "uint128",
                "name": "makerTokenFilledAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "fillTakerSignedOtcOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "takerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "fillTakerSignedOtcOrderForEth",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "takerSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getERC1155OrderHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc1155Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc1155TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc1155TokenProperties"
                    },
                    {
                        "type": "uint128",
                        "name": "erc1155TokenAmount"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "orderHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getERC1155OrderInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc1155Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc1155TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc1155TokenProperties"
                    },
                    {
                        "type": "uint128",
                        "name": "erc1155TokenAmount"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "orderInfo",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "orderHash"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "uint128",
                        "name": "orderAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "remainingAmount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getERC721OrderHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "orderHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getERC721OrderStatus",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": "status"
            }
        ]
    },
    {
        "type": "function",
        "name": "getERC721OrderStatusBitVector",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "maker"
            },
            {
                "type": "uint248",
                "name": "nonceRange"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "bitVector"
            }
        ]
    },
    {
        "type": "function",
        "name": "getLimitOrderHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFeeAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "address",
                        "name": "feeRecipient"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "orderHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getLimitOrderInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFeeAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "address",
                        "name": "feeRecipient"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "orderInfo",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "orderHash"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFilledAmount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getLimitOrderRelevantState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFeeAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "address",
                        "name": "feeRecipient"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "orderInfo",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "orderHash"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFilledAmount"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "actualFillableTakerTokenAmount"
            },
            {
                "type": "bool",
                "name": "isSignatureValid"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetaTransactionExecutedBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "mtx",
                "components": [
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "minGasPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "maxGasPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "expirationTimeSeconds"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "value"
                    },
                    {
                        "type": "address",
                        "name": "feeToken"
                    },
                    {
                        "type": "uint256",
                        "name": "feeAmount"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "blockNumber"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetaTransactionHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "mtx",
                "components": [
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "minGasPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "maxGasPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "expirationTimeSeconds"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "value"
                    },
                    {
                        "type": "address",
                        "name": "feeToken"
                    },
                    {
                        "type": "uint256",
                        "name": "feeAmount"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "mtxHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetaTransactionHashExecutedBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "mtxHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "blockNumber"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetaTransactionV2ExecutedBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "mtx",
                "components": [
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "expirationTimeSeconds"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "address",
                        "name": "feeToken"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "blockNumber"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetaTransactionV2Hash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "mtx",
                "components": [
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "expirationTimeSeconds"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "address",
                        "name": "feeToken"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "mtxHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetaTransactionV2HashExecutedBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "mtxHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "blockNumber"
            }
        ]
    },
    {
        "type": "function",
        "name": "getOtcOrderHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "orderHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getOtcOrderInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "uint256",
                        "name": "expiryAndNonce"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "orderInfo",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "orderHash"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getProtocolFeeMultiplier",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": "multiplier"
            }
        ]
    },
    {
        "type": "function",
        "name": "getQuoteSigner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "signer"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRfqOrderHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "orderHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRfqOrderInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "orderInfo",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "orderHash"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFilledAmount"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getRfqOrderRelevantState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "address",
                        "name": "makerToken"
                    },
                    {
                        "type": "address",
                        "name": "takerToken"
                    },
                    {
                        "type": "uint128",
                        "name": "makerAmount"
                    },
                    {
                        "type": "uint128",
                        "name": "takerAmount"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "address",
                        "name": "txOrigin"
                    },
                    {
                        "type": "bytes32",
                        "name": "pool"
                    },
                    {
                        "type": "uint64",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "salt"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "orderInfo",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "orderHash"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "uint128",
                        "name": "takerTokenFilledAmount"
                    }
                ]
            },
            {
                "type": "uint128",
                "name": "actualFillableTakerTokenAmount"
            },
            {
                "type": "bool",
                "name": "isSignatureValid"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRollbackEntryAtIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "selector"
            },
            {
                "type": "uint256",
                "name": "idx"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "impl"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRollbackLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "selector"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "rollbackLength"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTransformWallet",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "wallet"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTransformerDeployer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "deployer"
            }
        ]
    },
    {
        "type": "function",
        "name": "isValidOrderSigner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "maker"
            },
            {
                "type": "address",
                "name": "signer"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "isAllowed"
            }
        ]
    },
    {
        "type": "function",
        "name": "lastOtcTxOriginNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "txOrigin"
            },
            {
                "type": "uint64",
                "name": "nonceBucket"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "lastNonce"
            }
        ]
    },
    {
        "type": "function",
        "name": "matchERC721Orders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "sellOrder",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "buyOrder",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "sellOrderSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "buyOrderSignature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "profit"
            }
        ]
    },
    {
        "type": "function",
        "name": "migrate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "bytes",
                "name": "data"
            },
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "multiplexBatchSellEthForToken",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "outputToken"
            },
            {
                "type": "tuple[]",
                "name": "calls"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "multiplexBatchSellTokenForEth",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "inputToken"
            },
            {
                "type": "tuple[]",
                "name": "calls"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "multiplexBatchSellTokenForToken",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "inputToken"
            },
            {
                "type": "address",
                "name": "outputToken"
            },
            {
                "type": "tuple[]",
                "name": "calls"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "multiplexMultiHopSellEthForToken",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "tuple[]",
                "name": "calls"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "multiplexMultiHopSellTokenForEth",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "tuple[]",
                "name": "calls"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "multiplexMultiHopSellTokenForToken",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "tuple[]",
                "name": "calls"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "onERC1155Received",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes4",
                "name": "success"
            }
        ]
    },
    {
        "type": "function",
        "name": "onERC721Received",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes4",
                "name": "success"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "ownerAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "preSignERC1155Order",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc1155Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc1155TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc1155TokenProperties"
                    },
                    {
                        "type": "uint128",
                        "name": "erc1155TokenAmount"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "preSignERC721Order",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "registerAllowedOrderSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "signer"
            },
            {
                "type": "bool",
                "name": "allowed"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "registerAllowedRfqOrigins",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "origins"
            },
            {
                "type": "bool",
                "name": "allowed"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rollback",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "selector"
            },
            {
                "type": "address",
                "name": "targetImpl"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sellERC1155",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "buyOrder",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc1155Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc1155TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc1155TokenProperties"
                    },
                    {
                        "type": "uint128",
                        "name": "erc1155TokenAmount"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "erc1155TokenId"
            },
            {
                "type": "uint128",
                "name": "erc1155SellAmount"
            },
            {
                "type": "bool",
                "name": "unwrapNativeToken"
            },
            {
                "type": "bytes",
                "name": "callbackData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sellERC721",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "buyOrder",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "erc721TokenId"
            },
            {
                "type": "bool",
                "name": "unwrapNativeToken"
            },
            {
                "type": "bytes",
                "name": "callbackData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sellEthForTokenToUniswapV3",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes",
                "name": "encodedPath"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "buyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "sellToLiquidityProvider",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "inputToken"
            },
            {
                "type": "address",
                "name": "outputToken"
            },
            {
                "type": "address",
                "name": "provider"
            },
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "bytes",
                "name": "auxiliaryData"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "boughtAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "sellToPancakeSwap",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "uint8",
                "name": "fork"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "buyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "sellToUniswap",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "bool",
                "name": "isSushi"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "buyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "sellTokenForEthToUniswapV3",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "encodedPath"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "buyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "sellTokenForTokenToUniswapV3",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "encodedPath"
            },
            {
                "type": "uint256",
                "name": "sellAmount"
            },
            {
                "type": "uint256",
                "name": "minBuyAmount"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "buyAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "setQuoteSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "quoteSigner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTransformerDeployer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "transformerDeployer"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportInterface",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "isSupported"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferProtocolFeesForPools",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "poolIds"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferTrappedTokensTo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "erc20"
            },
            {
                "type": "uint256",
                "name": "amountOut"
            },
            {
                "type": "address",
                "name": "recipientWallet"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transformERC20",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "inputToken"
            },
            {
                "type": "address",
                "name": "outputToken"
            },
            {
                "type": "uint256",
                "name": "inputTokenAmount"
            },
            {
                "type": "uint256",
                "name": "minOutputTokenAmount"
            },
            {
                "type": "tuple[]",
                "name": "transformations"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "outputTokenAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "uniswapV3SwapCallback",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "amount0Delta"
            },
            {
                "type": "int256",
                "name": "amount1Delta"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validateERC1155OrderProperties",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc1155Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc1155TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc1155TokenProperties"
                    },
                    {
                        "type": "uint128",
                        "name": "erc1155TokenAmount"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "erc1155TokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validateERC1155OrderSignature",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc1155Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc1155TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc1155TokenProperties"
                    },
                    {
                        "type": "uint128",
                        "name": "erc1155TokenAmount"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validateERC721OrderProperties",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "erc721TokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validateERC721OrderSignature",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "uint8",
                        "name": "direction"
                    },
                    {
                        "type": "address",
                        "name": "maker"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "address",
                        "name": "erc20Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc20TokenAmount"
                    },
                    {
                        "type": "tuple[]",
                        "name": "fees"
                    },
                    {
                        "type": "address",
                        "name": "erc721Token"
                    },
                    {
                        "type": "uint256",
                        "name": "erc721TokenId"
                    },
                    {
                        "type": "tuple[]",
                        "name": "erc721TokenProperties"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "signature",
                "components": [
                    {
                        "type": "uint8",
                        "name": "signatureType"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": []
    }
]
