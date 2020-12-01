import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMetamaskStatus,
  setEthAddress,
  startOnboarding,
  stopOnboarding,
  chooseProvider,
} from '../../store/web3/actions';
import styles from './styles.module.scss';
import { ConnectAccount, Modal } from '../../components';
import { RootStoreState } from '../../types/store';

type Props = {
  children?: ReactNode;
};

const Web3Provider = ({ children }: Props) => {
  const dispatch = useDispatch();
  const isOnboardingActive: boolean = useSelector(
    (state: RootStoreState) => state.web3.onboardingActive,
  );

  const onModalClose = React.useCallback(() => {
    dispatch(stopOnboarding());
  }, []);

  React.useEffect(() => {
    if (typeof (window as any).ethereum !== 'undefined') {
      const { selectedAddress } = (window as any).ethereum;
      dispatch(setMetamaskStatus('AVAILABLE'));
      (window as any).ethereum.on('accountsChanged', (accounts: any) => {
        if (accounts.length > 0) {
          dispatch(setEthAddress(accounts[0]));
        } else {
          dispatch(startOnboarding());
          dispatch(setMetamaskStatus('AVAILABLE'));
        }
      });

      if (selectedAddress === null) {
        dispatch(startOnboarding());
      } else if (selectedAddress) dispatch(setEthAddress(selectedAddress));
    } else {
      dispatch(setMetamaskStatus('NOT_AVAILABLE'));
      dispatch(startOnboarding());
    }
  }, []);

  const onProviderClick = React.useCallback((provider) => {
    if (provider === 'Metamask') {
      dispatch(chooseProvider(provider));
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={isOnboardingActive}
        onClose={onModalClose}
        className={styles.modal}
      >
        <ConnectAccount onProviderClick={onProviderClick} />
      </Modal>
      {children}
    </>
  );
};

export default Web3Provider;
