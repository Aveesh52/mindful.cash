/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from "ethers";
import {Provider} from "ethers/providers";
import {UnsignedTransaction} from "ethers/utils/transaction";

import {TransactionOverrides} from ".";
import {TestLibSafeApprove} from "./TestLibSafeApprove";

export class TestLibSafeApproveFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<TestLibSafeApprove> {
    return super.deploy(overrides) as Promise<TestLibSafeApprove>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): TestLibSafeApprove {
    return super.attach(address) as TestLibSafeApprove;
  }
  connect(signer: Signer): TestLibSafeApproveFactory {
    return super.connect(signer) as TestLibSafeApproveFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLibSafeApprove {
    return new Contract(address, _abi, signerOrProvider) as TestLibSafeApprove;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "doubleApprovalSafe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "doubleApprovalUnsafe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103ad806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633f04395d1461003b578063e2debe8e14610063575b600080fd5b6100616004803603602081101561005157600080fd5b50356001600160a01b0316610089565b005b6100616004803603602081101561007957600080fd5b50356001600160a01b03166100c5565b806100a66001600160a01b0382163361053963ffffffff6101c316565b6100c16001600160a01b03821633602a63ffffffff6101c316565b5050565b6040805163095ea7b360e01b81523360048201526105396024820152905182916001600160a01b0383169163095ea7b3916044808201926020929091908290030181600087803b15801561011857600080fd5b505af115801561012c573d6000803e3d6000fd5b505050506040513d602081101561014257600080fd5b50506040805163095ea7b360e01b8152336004820152602a602482015290516001600160a01b0383169163095ea7b39160448083019260209291908290030181600087803b15801561019357600080fd5b505af11580156101a7573d6000803e3d6000fd5b505050506040513d60208110156101bd57600080fd5b50505050565b60408051636eb1769f60e11b81523060048201526001600160a01b038481166024830152915160009286169163dd62ed3e916044808301926020929190829003018186803b15801561021457600080fd5b505afa158015610228573d6000803e3d6000fd5b505050506040513d602081101561023e57600080fd5b50519050818114156102505750610372565b80156102e457836001600160a01b031663095ea7b38460006040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156102b757600080fd5b505af11580156102cb573d6000803e3d6000fd5b505050506040513d60208110156102e157600080fd5b50505b836001600160a01b031663095ea7b384846040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561034457600080fd5b505af1158015610358573d6000803e3d6000fd5b505050506040513d602081101561036e57600080fd5b5050505b50505056fea26469706673582212200dcf0d18238ae68f789146163b95153ee8cb6390f53e82cb2d01486701fc61fc64736f6c63430006040033";