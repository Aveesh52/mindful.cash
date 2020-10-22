/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Ownable } from "./Ownable";

export class OwnableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<Ownable> {
    return super.deploy(overrides) as Promise<Ownable>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): Ownable {
    return super.attach(address) as Ownable;
  }
  connect(signer: Signer): OwnableFactory {
    return super.connect(signer) as OwnableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnerChanged",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101ac806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f2fde38b14610030575b600080fd5b6100566004803603602081101561004657600080fd5b50356001600160a01b0316610058565b005b6100606100b3565b546001600160a01b031633146100a75760405162461bcd60e51b81526004018080602001828103825260278152602001806101506027913960400191505060405180910390fd5b6100b0816100e8565b50565b604080517f4f776e61626c652e73746f726167652e6c6f636174696f6e00000000000000008152905190819003601801902090565b60006100f26100b3565b80546040519192506001600160a01b03808516929116907fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c90600090a380546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c652e6f6e6c794f776e65723a206d73672e73656e646572206e6f74206f776e6572a2646970667358221220af8613e93799c64f2d46a0bc8d74bb639b0d492d6f7ccaf33d043893cc69755e64736f6c63430006040033";
