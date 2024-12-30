'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Reverter = contract({
 "contractName": "Reverter",
 "abi": [
  {
   "stateMutability": "payable",
   "type": "fallback"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50609280601d6000396000f3fe608060408190527f08c379a00000000000000000000000000000000000000000000000000000000081526020608452601660a4527f5261697365642062792052657665727465722e736f6c0000000000000000000060c452606490fdfea2646970667358221220492abdbed53c0f24c6f71966444389669a1520240bfab3a698365064d92caf4764736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x92 DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x84 MSTORE PUSH1 0x16 PUSH1 0xA4 MSTORE PUSH32 0x5261697365642062792052657665727465722E736F6C00000000000000000000 PUSH1 0xC4 MSTORE PUSH1 0x64 SWAP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x49 0x2A 0xBD 0xBE 0xD5 EXTCODECOPY 0xF 0x24 0xC6 0xF7 NOT PUSH7 0x444389669A1520 0x24 SIGNEXTEND STATICCALL 0xB3 0xA6 SWAP9 CALLDATASIZE POP PUSH5 0xD92CAF4764 PUSH20 0x6F6C634300060600330000000000000000000000 ",
   "sourceMap": "24:105:54:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;24:105:54;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x608060408190527f08c379a00000000000000000000000000000000000000000000000000000000081526020608452601660a4527f5261697365642062792052657665727465722e736f6c0000000000000000000060c452606490fdfea2646970667358221220492abdbed53c0f24c6f71966444389669a1520240bfab3a698365064d92caf4764736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x84 MSTORE PUSH1 0x16 PUSH1 0xA4 MSTORE PUSH32 0x5261697365642062792052657665727465722E736F6C00000000000000000000 PUSH1 0xC4 MSTORE PUSH1 0x64 SWAP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x49 0x2A 0xBD 0xBE 0xD5 EXTCODECOPY 0xF 0x24 0xC6 0xF7 NOT PUSH7 0x444389669A1520 0x24 SIGNEXTEND STATICCALL 0xB3 0xA6 SWAP9 CALLDATASIZE POP PUSH5 0xD92CAF4764 PUSH20 0x6F6C634300060600330000000000000000000000 ",
   "sourceMap": "24:105:54:-:0;;;;;81:40;;;;;;;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/tests/Reverter.sol\":\"Reverter\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/tests/Reverter.sol\":{\"keccak256\":\"0x652ba1d729cd11cd2fea02ebb0e0460230740cb08f2a1462d23a2501bd9876b1\",\"urls\":[\"bzz-raw://d340e3b22dd9cf0ff803fc95ca973a181e95516eb0d9cfaa20241fbd7ad99d76\",\"dweb:/ipfs/QmfXhjnCRN6C4w1QDD3bd8BWvbduJExz3gxPRg91M5ftsQ\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Reverter.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Reverter = Reverter
