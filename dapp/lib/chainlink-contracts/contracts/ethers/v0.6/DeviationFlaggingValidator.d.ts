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

interface DeviationFlaggingValidatorInterface extends Interface {
  functions: {
    THRESHOLD_MULTIPLIER: TypedFunctionDescription<{ encode([]: []): string }>;

    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    flaggingThreshold: TypedFunctionDescription<{ encode([]: []): string }>;

    flags: TypedFunctionDescription<{ encode([]: []): string }>;

    isValid: TypedFunctionDescription<{
      encode([, _previousAnswer, , _answer]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setFlaggingThreshold: TypedFunctionDescription<{
      encode([_flaggingThreshold]: [BigNumberish]): string;
    }>;

    setFlagsAddress: TypedFunctionDescription<{
      encode([_flags]: [string]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;

    validate: TypedFunctionDescription<{
      encode([_previousRoundId, _previousAnswer, _roundId, _answer]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;
  };

  events: {
    FlaggingThresholdUpdated: TypedEventDescription<{
      encodeTopics([previous, current]: [
        BigNumberish | null,
        BigNumberish | null
      ]): string[];
    }>;

    FlagsAddressUpdated: TypedEventDescription<{
      encodeTopics([previous, current]: [
        string | null,
        string | null
      ]): string[];
    }>;

    OwnershipTransferRequested: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;
  };
}

export class DeviationFlaggingValidator extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): DeviationFlaggingValidator;
  attach(addressOrName: string): DeviationFlaggingValidator;
  deployed(): Promise<DeviationFlaggingValidator>;

  on(
    event: EventFilter | string,
    listener: Listener
  ): DeviationFlaggingValidator;
  once(
    event: EventFilter | string,
    listener: Listener
  ): DeviationFlaggingValidator;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DeviationFlaggingValidator;
  removeAllListeners(
    eventName: EventFilter | string
  ): DeviationFlaggingValidator;
  removeListener(
    eventName: any,
    listener: Listener
  ): DeviationFlaggingValidator;

  interface: DeviationFlaggingValidatorInterface;

  functions: {
    THRESHOLD_MULTIPLIER(): Promise<number>;

    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    flaggingThreshold(): Promise<number>;

    flags(): Promise<string>;

    isValid(
      arg0: BigNumberish,
      _previousAnswer: BigNumberish,
      arg2: BigNumberish,
      _answer: BigNumberish
    ): Promise<boolean>;

    owner(): Promise<string>;

    setFlaggingThreshold(
      _flaggingThreshold: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setFlagsAddress(
      _flags: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    validate(
      _previousRoundId: BigNumberish,
      _previousAnswer: BigNumberish,
      _roundId: BigNumberish,
      _answer: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  THRESHOLD_MULTIPLIER(): Promise<number>;

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  flaggingThreshold(): Promise<number>;

  flags(): Promise<string>;

  isValid(
    arg0: BigNumberish,
    _previousAnswer: BigNumberish,
    arg2: BigNumberish,
    _answer: BigNumberish
  ): Promise<boolean>;

  owner(): Promise<string>;

  setFlaggingThreshold(
    _flaggingThreshold: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setFlagsAddress(
    _flags: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  validate(
    _previousRoundId: BigNumberish,
    _previousAnswer: BigNumberish,
    _roundId: BigNumberish,
    _answer: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    FlaggingThresholdUpdated(
      previous: BigNumberish | null,
      current: BigNumberish | null
    ): EventFilter;

    FlagsAddressUpdated(
      previous: string | null,
      current: string | null
    ): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;
  };

  estimate: {
    THRESHOLD_MULTIPLIER(): Promise<BigNumber>;

    acceptOwnership(): Promise<BigNumber>;

    flaggingThreshold(): Promise<BigNumber>;

    flags(): Promise<BigNumber>;

    isValid(
      arg0: BigNumberish,
      _previousAnswer: BigNumberish,
      arg2: BigNumberish,
      _answer: BigNumberish
    ): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    setFlaggingThreshold(_flaggingThreshold: BigNumberish): Promise<BigNumber>;

    setFlagsAddress(_flags: string): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;

    validate(
      _previousRoundId: BigNumberish,
      _previousAnswer: BigNumberish,
      _roundId: BigNumberish,
      _answer: BigNumberish
    ): Promise<BigNumber>;
  };
}