export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "zeroExAddress"
            },
            {
                "type": "address",
                "name": "weth"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ERC1155OrderCancelled",
        "inputs": [
            {
                "type": "address",
                "name": "maker",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "nonce",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ERC1155OrderFilled",
        "inputs": [
            {
                "type": "uint8",
                "name": "direction",
                "indexed": false
            },
            {
                "type": "address",
                "name": "maker",
                "indexed": false
            },
            {
                "type": "address",
                "name": "taker",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "nonce",
                "indexed": false
            },
            {
                "type": "address",
                "name": "erc20Token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "erc20FillAmount",
                "indexed": false
            },
            {
                "type": "address",
                "name": "erc1155Token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "erc1155TokenId",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "erc1155FillAmount",
                "indexed": false
            },
            {
                "type": "address",
                "name": "matcher",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ERC1155OrderPreSigned",
        "inputs": [
            {
                "type": "uint8",
                "name": "direction",
                "indexed": false
            },
            {
                "type": "address",
                "name": "maker",
                "indexed": false
            },
            {
                "type": "address",
                "name": "taker",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expiry",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "nonce",
                "indexed": false
            },
            {
                "type": "address",
                "name": "erc20Token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "erc20TokenAmount",
                "indexed": false
            },
            {
                "type": "tuple[]",
                "name": "fees",
                "indexed": false
            },
            {
                "type": "address",
                "name": "erc1155Token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "erc1155TokenId",
                "indexed": false
            },
            {
                "type": "tuple[]",
                "name": "erc1155TokenProperties",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "erc1155TokenAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "EIP712_DOMAIN_SEPARATOR",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "FEATURE_NAME",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "FEATURE_VERSION",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "_buyERC1155",
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
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "uint128",
                        "name": "buyAmount"
                    },
                    {
                        "type": "uint256",
                        "name": "ethAvailable"
                    },
                    {
                        "type": "bytes",
                        "name": "takerCallbackData"
                    }
                ]
            }
        ],
        "outputs": []
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
                "name": "erc1155FillAmounts"
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
        "name": "migrate",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes4",
                "name": "success"
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
                "type": "address"
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
    }
]
