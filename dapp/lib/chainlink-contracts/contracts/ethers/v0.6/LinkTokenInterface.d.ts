/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface LinkTokenInterfaceInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, value]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{ encode([owner]: [string]): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseApproval: TypedFunctionDescription<{
      encode([spender, addedValue]: [string, BigNumberish]): string;
    }>;

    increaseApproval: TypedFunctionDescription<{
      encode([spender, subtractedValue]: [string, BigNumberish]): string;
    }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([to, value]: [string, BigNumberish]): string;
    }>;

    transferAndCall: TypedFunctionDescription<{
      encode([to, value, data]: [string, BigNumberish, Arrayish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([from, to, value]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class LinkTokenInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): LinkTokenInterface;
  attach(addressOrName: string): LinkTokenInterface;
  deployed(): Promise<LinkTokenInterface>;

  on(event: EventFilter | string, listener: Listener): LinkTokenInterface;
  once(event: EventFilter | string, listener: Listener): LinkTokenInterface;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): LinkTokenInterface;
  removeAllListeners(eventName: EventFilter | string): LinkTokenInterface;
  removeListener(eventName: any, listener: Listener): LinkTokenInterface;

  interface: LinkTokenInterfaceInterface;

  functions: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(owner: string): Promise<BigNumber>;

    decimals(): Promise<number>;

    decreaseApproval(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    increaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferAndCall(
      to: string,
      value: BigNumberish,
      data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(owner: string, spender: string): Promise<BigNumber>;

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(owner: string): Promise<BigNumber>;

  decimals(): Promise<number>;

  decreaseApproval(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  increaseApproval(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  name(): Promise<string>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferAndCall(
    to: string,
    value: BigNumberish,
    data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(spender: string, value: BigNumberish): Promise<BigNumber>;

    balanceOf(owner: string): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    decreaseApproval(
      spender: string,
      addedValue: BigNumberish
    ): Promise<BigNumber>;

    increaseApproval(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(to: string, value: BigNumberish): Promise<BigNumber>;

    transferAndCall(
      to: string,
      value: BigNumberish,
      data: Arrayish
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish
    ): Promise<BigNumber>;
  };
}
