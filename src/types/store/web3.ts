
export type Provider = 'Metamask';

export type MetamaskStatus = 'AVAILABLE' | 'NOT_AVAILABLE' | 'ADDRESS_SELECTED';

export type Web3State = {
  metamaskStatus: MetamaskStatus,
  address?: string | null,
  accounts: Array<any>,
  onboardingActive: boolean,
};

export interface IWeb3Payload {

}