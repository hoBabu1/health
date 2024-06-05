const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_record",
				"type": "string"
			}
		],
		"name": "addMedicalRecord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_specialization",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_emergencyContact",
				"type": "string"
			}
		],
		"name": "registerDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_height",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_weight",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_emergencyContact",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_medicalHistory",
				"type": "string[]"
			}
		],
		"name": "registerPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "doctorAddresses",
		"outputs": [
			{
				"internalType": "address",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "specialization",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "emergencyContact",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctors",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "specialization",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "emergencyContact",
						"type": "string"
					}
				],
				"internalType": "struct HealthcareRecordSystem.Doctor[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllPatients",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "height",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "weight",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "emergencyContact",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "medicalHistory",
						"type": "string[]"
					}
				],
				"internalType": "struct HealthcareRecordSystem.Patient[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "getDoctor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "specialization",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "emergencyContact",
						"type": "string"
					}
				],
				"internalType": "struct HealthcareRecordSystem.Doctor",
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
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "getPatient",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "height",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "weight",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "emergencyContact",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "medicalHistory",
						"type": "string[]"
					}
				],
				"internalType": "struct HealthcareRecordSystem.Patient",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientAddresses",
		"outputs": [
			{
				"internalType": "address",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "height",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "emergencyContact",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0x295e31F4A94eE00EeD58de617c022f0e2ABAc135";
export  {contractAbi, contractAddress};