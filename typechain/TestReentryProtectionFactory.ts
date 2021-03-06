/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from "ethers";
import {Provider} from "ethers/providers";
import {UnsignedTransaction} from "ethers/utils/transaction";

import {TransactionOverrides} from ".";
import {TestReentryProtection} from "./TestReentryProtection";

export class TestReentryProtectionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<TestReentryProtection> {
    return super.deploy(overrides) as Promise<TestReentryProtection>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): TestReentryProtection {
    return super.attach(address) as TestReentryProtection;
  }
  connect(signer: Signer): TestReentryProtectionFactory {
    return super.connect(signer) as TestReentryProtectionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestReentryProtection {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestReentryProtection;
  }
}

const _abi = [
  {
    inputs: [],
    name: "reenter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "test",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061016a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a0fe97e31461003b578063f8a8fd6d14610045575b600080fd5b61004361004d565b005b610043610067565b60006100576100c3565b80546001018082559091505b5050565b60006100716100c3565b805460010180825590915061008461004d565b815481146100635760405162461bcd60e51b815260040180806020018281038252602d8152602001806100e6602d913960400191505060405180910390fd5b600080604051808061011360229139604051908190036022019020939250505056fe5265656e74727950726f74656374696f6e2e6e6f5265656e7472793a207265656e7472792064657465637465645265656e74727950726f74656374696f6e2e73746f726167652e6c6f636174696f6ea2646970667358221220d9a022bbc4849be7ad5ba82d3bd2fe7ba372f9aafef8441d76acd63f8b47e99164736f6c63430006040033";
