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

interface ERC677TokenInterface extends Interface {
  functions: {
    approve: TypedFunctionDescription<{
      encode([spender, value]: [string, BigNumberish]): string;
    }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transferFrom: TypedFunctionDescription<{
      encode([from, to, value]: [string, string, BigNumberish]): string;
    }>;

    transferAndCall: TypedFunctionDescription<{
      encode([_to, _value, _data]: [string, BigNumberish, Arrayish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{ encode([who]: [string]): string }>;

    transfer: TypedFunctionDescription<{
      encode([to, value]: [string, BigNumberish]): string;
    }>;

    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;
  };

  events: {
    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value, data]: [
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class ERC677Token extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC677Token;
  attach(addressOrName: string): ERC677Token;
  deployed(): Promise<ERC677Token>;

  on(event: EventFilter | string, listener: Listener): ERC677Token;
  once(event: EventFilter | string, listener: Listener): ERC677Token;
  addListener(eventName: EventFilter | string, listener: Listener): ERC677Token;
  removeAllListeners(eventName: EventFilter | string): ERC677Token;
  removeListener(eventName: any, listener: Listener): ERC677Token;

  interface: ERC677TokenInterface;

  functions: {
    approve(
      spender: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    totalSupply(): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferAndCall(
      _to: string,
      _value: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(who: string): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    allowance(owner: string, spender: string): Promise<BigNumber>;
  };

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  totalSupply(): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferAndCall(
    _to: string,
    _value: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(who: string): Promise<BigNumber>;

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  allowance(owner: string, spender: string): Promise<BigNumber>;

  filters: {
    Transfer(
      from: string | null,
      to: string | null,
      value: null,
      data: null
    ): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;
  };

  estimate: {
    approve(spender: string, value: BigNumberish): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish
    ): Promise<BigNumber>;

    transferAndCall(
      _to: string,
      _value: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    balanceOf(who: string): Promise<BigNumber>;

    transfer(to: string, value: BigNumberish): Promise<BigNumber>;

    allowance(owner: string, spender: string): Promise<BigNumber>;
  };
}
