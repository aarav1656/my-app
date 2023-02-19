export const betting_CA = '0x74E72a90B7AE62a8bE113374cAe7a2995A277ee7'
export const betting_abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "HomeTeam",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "AwayTeam",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			}
		],
		"name": "createGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gameID",
				"type": "uint256"
			}
		],
		"name": "endBet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Home_Away",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "gameID",
				"type": "uint256"
			}
		],
		"name": "placeBet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gameID",
				"type": "uint256"
			}
		],
		"name": "startBetting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "SBT_address",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Away_Amounts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "betAway",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "betHome",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gameID",
				"type": "uint256"
			}
		],
		"name": "getGamesCreated",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Home",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Away",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "totalBet",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "enum Betting.State",
						"name": "current_state",
						"type": "uint8"
					}
				],
				"internalType": "struct Betting.Game",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "winTeam",
				"type": "uint256"
			}
		],
		"name": "getWinData",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Home_Amounts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]