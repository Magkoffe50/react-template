import type { Action } from '../../types';

const SET_METAMASK_STATUS = 'SET_METAMASK_STATUS';
const SET_ETH_ADDRESS = 'SET_ETH_ADDRESS';
const START_ONBOARDING = 'START_ONBOARDING';
const STOP_ONBOARDING = 'STOP_ONBOARDING';
const CHOOSE_PROVIDER = 'CHOOSE_PROVIDER';

export type SetMetamaskStatusAction = Action<typeof SET_METAMASK_STATUS, any>;
export type SetETHAddress = Action<typeof SET_ETH_ADDRESS, any>;
export type StartOnboarding = Action<typeof START_ONBOARDING, any>;
export type StopOnboarding = Action<typeof STOP_ONBOARDING, any>;
export type ChooseProvider = Action<typeof CHOOSE_PROVIDER, any>;

export type Web3Action =
    SetMetamaskStatusAction
    | SetETHAddress
    | StartOnboarding
    | StopOnboarding
    | ChooseProvider;

export default {
  SET_METAMASK_STATUS,
  SET_ETH_ADDRESS,
  START_ONBOARDING,
  STOP_ONBOARDING,
  CHOOSE_PROVIDER,
};
