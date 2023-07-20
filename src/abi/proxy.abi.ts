export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "getFunctionImplementation",
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
                "type": "address",
                "name": "impl"
            }
        ]
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
