import {
  call, put, select, takeLeading,
} from 'redux-saga/effects';
import MetamaskOnboarding from '@metamask/onboarding';
import { setEthAddress, setMetamaskStatus } from '../actions';
import actionTypes from '../actionTypes';

// @ts-ignore
const onboarding = new MetamaskOnboarding(window.location.origin);

function* onAccountsChange(accounts: any) {
  yield put(setEthAddress(accounts[0]));
  // yield put({type: actionTokenGeyserTypes.GET_PAIRS});
  onboarding.stopOnboarding();
}

function* chooseProviderSaga(): Iterable<any> {
  try {
    const accounts = yield select((state) => state.web3.accounts);
    const metamaskStatus = yield select((state) => state.web3.metamaskStatus);
    if (metamaskStatus === 'NOT_AVAILABLE') {
      onboarding.startOnboarding();
      // @ts-ignore
    } else if (accounts && accounts.length > 0) {
      yield put(setMetamaskStatus('ADDRESS_SELECTED'));
      onboarding.stopOnboarding();
    } else {
      onboarding.stopOnboarding();
      // @ts-ignore
      yield call(window.ethereum.enable);
    }

    if (metamaskStatus === 'AVAILABLE') {
      // @ts-ignore
      window.ethereum.on('accountsChanged', onAccountsChange);
    }
  } catch (err) {
    yield 123;
  }
}

export default function* listener(): Iterable<any> {
  yield takeLeading(actionTypes.CHOOSE_PROVIDER, chooseProviderSaga);
}
