/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Pv2SmartPoolStorage } from "./Pv2SmartPoolStorage";

export class Pv2SmartPoolStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<Pv2SmartPoolStorage> {
    return super.deploy(overrides) as Promise<Pv2SmartPoolStorage>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): Pv2SmartPoolStorage {
    return super.attach(address) as Pv2SmartPoolStorage;
  }
  connect(signer: Signer): Pv2SmartPoolStorageFactory {
    return super.connect(signer) as Pv2SmartPoolStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Pv2SmartPoolStorage {
    return new Contract(address, _abi, signerOrProvider) as Pv2SmartPoolStorage;
  }
}

const _abi = [
  {
    inputs: [],
    name: "pasSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60c4610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063c059dfa5146038575b600080fd5b603e6050565b60408051918252519081900360200190f35b604051806024606b8239602401905060405180910390208156fe505632536d617274506f6f6c53746f726167652e73746f726167652e6c6f636174696f6ea2646970667358221220e1ab9f33df48476c425f73d23a22bfcea6fd955c5c3f9a8566f73ce15d68d11564736f6c63430006040033";
