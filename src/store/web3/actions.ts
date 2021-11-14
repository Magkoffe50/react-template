import actionTypes from './actionTypes';

export const setMetamaskStatus = (payload: any) => ({
  type: actionTypes.SET_METAMASK_STATUS,
  payload,
});

export const setEthAddress = (payload: any) => ({
  type: actionTypes.SET_ETH_ADDRESS,
  payload,
});

export const startOnboarding = () => ({
  type: actionTypes.START_ONBOARDING,
});

export const stopOnboarding = () => ({
  type: actionTypes.STOP_ONBOARDING,
});

export const chooseProvider = (payload: any) => ({
  type: actionTypes.CHOOSE_PROVIDER,
  payload,
});
