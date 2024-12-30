/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { VRF } from "./VRF";

export class VRFFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<VRF> {
    return super.deploy(overrides) as Promise<VRF>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): VRF {
    return super.attach(address) as VRF;
  }
  connect(signer: Signer): VRFFactory {
    return super.connect(signer) as VRFFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VRF {
    return new Contract(address, _abi, signerOrProvider) as VRF;
  }
}

const _abi = [
  {
    inputs: [],
    name: "PROOF_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060818061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063e911439c14602d575b600080fd5b60336045565b60408051918252519081900360200190f35b6101a08156fea26469706673582212209edf824e021ba3a773e3ede6590b71810a5cf38fe7bf8e30f7df44ccd85cb42264736f6c63430006060033";
