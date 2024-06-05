import {ethers} from 'ethers';
async function connectMetaMask() {
    if (typeof window.ethereum!== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected to MetaMask");
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.log("Ethereum object does not exist.");
    }
}

async function registerPatient() {
    console.log(" REGISTERED FUNCTION IS BEING CALLED ");
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const height = document.getElementById('patientHeight').value;
    const weight = document.getElementById('patientWeight').value;
    const emergencyContact = document.getElementById('patientEmergencyContact').value;
    const medicalHistory = document.getElementById('patientMedicalHistory').value.split(',');

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contractAddress = "0xb86a664E16652413D57df3f6FcfA293083514bD4";
    const contractABI = [
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
    ];

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
        const tx = await contract.registerPatient(name, age, height, weight, emergencyContact, medicalHistory);
        await tx.wait();
        console.log('Patient registered successfully');
    } catch (error) {
        console.error('Error registering patient:', error);
    }
}

async function registerDoctor() {
   console.log("it is being called ");
    const name = document.getElementById('doctorName').value;
    const age = document.getElementById('doctorAge').value;
    const specialization = document.getElementById('doctorSpecialization').value;
    const emergencyContact = document.getElementById('doctorEmergencyContact').value;
    
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contractAddress ="0x295e31F4A94eE00EeD58de617c022f0e2ABAc135";
    const contractABI =[
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
    ];
    
    const contracttt = new ethers.Contract(contractAddress, contractABI, signer);

    try {
        await contracttt.registerDoctor(name, age, specialization, emergencyContact);
        console.log('Doctor registered successfully');
    } catch (error) {
        console.error('Error registering doctor:', error);
    }
}

module.exports = {
    connectMetaMask,
    registerPatient,
    registerDoctor
  };
