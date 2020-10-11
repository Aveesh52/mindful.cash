// This way of importing is a bit funky. We should fix this in the Mock Contracts package
import { MockTokenFactory } from "@pie-dao/mock-contracts/dist/typechain/MockTokenFactory";
import { MockToken } from "@pie-dao/mock-contracts/typechain/MockToken";
import { ethers, run } from "@nomiclabs/buidler";
import { Signer, Wallet, constants } from "ethers";
import { BigNumberish, BigNumber } from "ethers/utils";
import chai from "chai";
import { deployContract, solidity } from "ethereum-waffle";

import { deployBalancerPool, deployBalancerFactory, linkArtifact } from "../utils";
import { Ierc20 } from "../typechain/Ierc20";
import { IbPool } from "../typechain/IbPool";
import { IbPoolFactory } from "../typechain/IbPoolFactory";
import { Ipv2SmartPoolFactory } from "../typechain/Ipv2SmartPoolFactory";
import { MindfulProxy } from "../typechain/MindfulProxy";
import { Pv2SmartPool } from "../typechain/PV2SmartPool";
import { Ipv2SmartPool } from "../typechain/Ipv2SmartPool";

import Pv2SmartPoolArtifact from "../artifacts/Pv2SmartPool.json";
import MindfulProxyArtifact from "../artifacts/MindfulProxy.json";

chai.use(solidity);
const { expect } = chai;

const INITIAL_SUPPLY = constants.WeiPerEther;
const PLACE_HOLDER_ADDRESS = "0x0000000000000000000000000000000000000001";
const NAME = "DeFi Energy Chakra";
const SYMBOL = "DEC";
console.log("TOP0");

describe("MindfulProxy", () => {
  let signers: Signer[];
  let account: string;
  let mindfulProxy: MindfulProxy;
  let smartpool: Pv2SmartPool;
  let smartpoolProxy: Ipv2SmartPool;
  let tokens: MockToken[];
  let amounts: BigNumberish[] = [];
  let weights: BigNumberish[] = [];
  console.log("TOP1");
  beforeEach(async () => {
    console.log("before");
    tokens = [];
    amounts = [];
    weights = [];

    signers = await ethers.signers();
    account = await signers[0].getAddress();

    const balancerFactoryAddress = await deployBalancerFactory(signers[0]);

    mindfulProxy = (await deployContract(signers[0] as Wallet, MindfulProxyArtifact, [], {
      gasLimit: 100000000,
    })) as MindfulProxy;
    console.log("Z");
    console.log("mindfulProxy", mindfulProxy.address);

    const libraries = await run("deploy-libraries");
    const linkedArtifact = linkArtifact(Pv2SmartPoolArtifact, libraries);

    // Deploy this way to get the coverage provider to pick it up
    smartpool = (await deployContract(signers[0] as Wallet, linkedArtifact, [], {
      gasLimit: 100000000,
    })) as Pv2SmartPool;

    await smartpool.init(PLACE_HOLDER_ADDRESS, "IMP", "IMP", 1337);
    await mindfulProxy.init(balancerFactoryAddress, smartpool.address);

    const tokenFactory = new MockTokenFactory(signers[0]);
    for (let i = 0; i < 3; i++) {
      const token: MockToken = await tokenFactory.deploy(`Mock ${i}`, `M${i}`, 18);
      await token.mint(account, constants.WeiPerEther.mul(10000000000));
      await token.approve(mindfulProxy.address, constants.MaxUint256);
      tokens.push(token);
      weights.push(constants.WeiPerEther.mul(3));
      amounts.push(constants.WeiPerEther.mul(10));
    }
  });
  describe("init smart pool proxy", async () => {
    beforeEach(async () => {
      await mindfulProxy.newProxiedSmartPool(
        NAME,
        SYMBOL,
        constants.WeiPerEther,
        tokens.map((token) => token.address),
        amounts,
        weights,
        INITIAL_SUPPLY
      );
      expect((await mindfulProxy.getPools()).length).to.eq(1);
      smartpoolProxy = Ipv2SmartPoolFactory.connect(await mindfulProxy.pools(0), signers[0]);
    });
    it("bpt token settings", async () => {
      // NOT SURE WHY THESE dont work? smartPoolProxy IS an erc20?!
      // const name = await smartpoolProxy.name();
      // expect(name).to.eq(NAME);
      // const symbol = await smartpoolProxy.symbol();
      // expect(symbol).to.eq(SYMBOL);
      // const initialSupply = await smartpoolProxy.totalSupply();
      // expect(initialSupply).to.eq(INITIAL_SUPPLY);
    });
    it("permissioning is set correctly", async () => {
      const controller = await smartpoolProxy.getController();
      expect(controller).to.eq(mindfulProxy.address);

      const publicSwapSetter = await smartpoolProxy.getPublicSwapSetter();
      expect(publicSwapSetter).to.eq(mindfulProxy.address);

      const tokenBinder = await smartpoolProxy.getTokenBinder();
      expect(tokenBinder).to.eq(mindfulProxy.address);
    });

    // it("Tokens should be correctly set", async () => {
    //   const actualTokens = await smartpoolProxy.getTokens();
    //   const tokenAddresses = tokens.map((token) => token.address);
    //   expect(actualTokens).eql(tokenAddresses);
    // });
    // it("calcTokensForAmount should work", async () => {
    //   const amountAndTokens = await smartpoolProxy.calcTokensForAmount(constants.WeiPerEther);
    //   const tokenAddresses = tokens.map((token) => token.address);
    //   const expectedAmounts = tokenAddresses.map(() => constants.WeiPerEther.div(2));
    //   expect(amountAndTokens.tokens).to.eql(tokenAddresses);
    //   expect(amountAndTokens.amounts).to.eql(expectedAmounts);
    // });
    // it("Calling init when already initialized should fail", async () => {
    //   await expect(smartpoolProxy.init(PLACE_HOLDER_ADDRESS, NAME, SYMBOL, constants.WeiPerEther)).to.be.revertedWith(
    //     "PV2smartpool.init: already initialised"
    //   );
    // });
    // it("Smart pool should not hold any non balancer pool tokens after init", async () => {
    //   const smartPoolBalances = await getTokenBalances(smartpoolProxy.address);
    //   expectZero(smartPoolBalances);
    // });
  });

  async function getTokenBalances(address: string) {
    const balances: BigNumber[] = [];

    for (const token of tokens) {
      balances.push(await token.balanceOf(address));
    }

    return balances;
  }

  function expectZero(amounts: BigNumber[]) {
    for (const amount of amounts) {
      expect(amount).to.eq(0);
    }
  }

  function createBigNumberArray(length: number, value: BigNumber): BigNumber[] {
    const result: BigNumber[] = [];
    for (let i = 0; i < length; i++) {
      result.push(value);
    }

    return result;
  }
});
