

import {Web3State} from '../../types/store';
import actionTypes, {Web3Action} from './actionTypes';

const initialState: Web3State = {
  metamaskStatus: 'NOT_AVAILABLE',
  address: null,
  accounts: [],
  onboardingActive: false,
};

export default (state: Web3State = initialState, action: Web3Action): Web3State => {
  switch (action.type) {
    case actionTypes.SET_METAMASK_STATUS: {
      const { payload } = action;
      if (payload) {
        return {
          ...state,
          metamaskStatus: action.payload as any,
        };
      }
      return {
        ...state,
      };
    }
    case actionTypes.SET_ETH_ADDRESS: {
      return {
        ...state,
        address: action.payload as any,
        metamaskStatus: 'ADDRESS_SELECTED',
        onboardingActive: false,
      };
    }

    case actionTypes.START_ONBOARDING: {
      return {
        ...state,
        onboardingActive: true,
      };
    }

    case actionTypes.STOP_ONBOARDING: {
      return {
        ...state,
        onboardingActive: false,
      };
    }
    default:
      return state;
  }
};
