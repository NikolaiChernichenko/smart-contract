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

interface ConsumerInterface extends Interface {
  functions: {
    fulfill: TypedFunctionDescription<{
      encode([_requestId, _price]: [Arrayish, Arrayish]): string;
    }>;

    cancelRequest: TypedFunctionDescription<{
      encode([
        _oracle,
        _requestId,
        _payment,
        _callbackFunctionId,
        _expiration
      ]: [string, Arrayish, BigNumberish, Arrayish, BigNumberish]): string;
    }>;

    requestEthereumPriceByCallback: TypedFunctionDescription<{
      encode([_currency, _payment, _callback]: [
        string,
        BigNumberish,
        string
      ]): string;
    }>;

    requestEthereumPrice: TypedFunctionDescription<{
      encode([_currency, _payment]: [string, BigNumberish]): string;
    }>;

    withdrawLink: TypedFunctionDescription<{ encode([]: []): string }>;

    currentPrice: TypedFunctionDescription<{ encode([]: []): string }>;

    addExternalRequest: TypedFunctionDescription<{
      encode([_oracle, _requestId]: [string, Arrayish]): string;
    }>;
  };

  events: {
    RequestFulfilled: TypedEventDescription<{
      encodeTopics([requestId, price]: [
        Arrayish | null,
        Arrayish | null
      ]): string[];
    }>;

    ChainlinkRequested: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;

    ChainlinkFulfilled: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;

    ChainlinkCancelled: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;
  };
}

export class Consumer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Consumer;
  attach(addressOrName: string): Consumer;
  deployed(): Promise<Consumer>;

  on(event: EventFilter | string, listener: Listener): Consumer;
  once(event: EventFilter | string, listener: Listener): Consumer;
  addListener(eventName: EventFilter | string, listener: Listener): Consumer;
  removeAllListeners(eventName: EventFilter | string): Consumer;
  removeListener(eventName: any, listener: Listener): Consumer;

  interface: ConsumerInterface;

  functions: {
    fulfill(
      _requestId: Arrayish,
      _price: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    cancelRequest(
      _oracle: string,
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackFunctionId: Arrayish,
      _expiration: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    requestEthereumPriceByCallback(
      _currency: string,
      _payment: BigNumberish,
      _callback: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    requestEthereumPrice(
      _currency: string,
      _payment: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdrawLink(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    currentPrice(): Promise<string>;

    addExternalRequest(
      _oracle: string,
      _requestId: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  fulfill(
    _requestId: Arrayish,
    _price: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  cancelRequest(
    _oracle: string,
    _requestId: Arrayish,
    _payment: BigNumberish,
    _callbackFunctionId: Arrayish,
    _expiration: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  requestEthereumPriceByCallback(
    _currency: string,
    _payment: BigNumberish,
    _callback: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  requestEthereumPrice(
    _currency: string,
    _payment: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdrawLink(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  currentPrice(): Promise<string>;

  addExternalRequest(
    _oracle: string,
    _requestId: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    RequestFulfilled(
      requestId: Arrayish | null,
      price: Arrayish | null
    ): EventFilter;

    ChainlinkRequested(id: Arrayish | null): EventFilter;

    ChainlinkFulfilled(id: Arrayish | null): EventFilter;

    ChainlinkCancelled(id: Arrayish | null): EventFilter;
  };

  estimate: {
    fulfill(_requestId: Arrayish, _price: Arrayish): Promise<BigNumber>;

    cancelRequest(
      _oracle: string,
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackFunctionId: Arrayish,
      _expiration: BigNumberish
    ): Promise<BigNumber>;

    requestEthereumPriceByCallback(
      _currency: string,
      _payment: BigNumberish,
      _callback: string
    ): Promise<BigNumber>;

    requestEthereumPrice(
      _currency: string,
      _payment: BigNumberish
    ): Promise<BigNumber>;

    withdrawLink(): Promise<BigNumber>;

    currentPrice(): Promise<BigNumber>;

    addExternalRequest(
      _oracle: string,
      _requestId: Arrayish
    ): Promise<BigNumber>;
  };
}