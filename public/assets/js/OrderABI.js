var abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "debug_delete_orders",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_item_id",
				"type": "uint256"
			},
			{
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "make_order",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_order_id",
				"type": "uint256"
			}
		],
		"name": "provide_order",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_order_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_item_name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_num",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_orderer",
				"type": "address"
			}
		],
		"name": "Make_order",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_all_orderlist",
		"outputs": [
			{
				"components": [
					{
						"name": "order_id",
						"type": "uint256"
					},
					{
						"name": "item_id",
						"type": "uint256"
					},
					{
						"name": "num",
						"type": "uint256"
					},
					{
						"name": "orderer",
						"type": "address"
					},
					{
						"name": "status",
						"type": "uint8"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_menu",
		"outputs": [
			{
				"components": [
					{
						"name": "item_name",
						"type": "string"
					},
					{
						"name": "price",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "menu",
		"outputs": [
			{
				"name": "item_name",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orderlist",
		"outputs": [
			{
				"name": "order_id",
				"type": "uint256"
			},
			{
				"name": "item_id",
				"type": "uint256"
			},
			{
				"name": "num",
				"type": "uint256"
			},
			{
				"name": "orderer",
				"type": "address"
			},
			{
				"name": "status",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]