import MetaMaskOnboarding from '@metamask/onboarding';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Button} from '../index';
import actionTypes from '../../store/web3/actionTypes';

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Connected';

const OnboardingButton = () => {

  const dispatch = useDispatch();

  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  React.useEffect(() => {
    if (!onboarding.current) {
      // @ts-ignore
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT);
        dispatch({type: actionTypes.SET_METAMASK_STATUS, payload: 'AVAILABLE'});
        dispatch({type: actionTypes.SET_ETH_ADDRESS, payload: accounts[0]});
        setDisabled(true);
        // @ts-ignore
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    function handleNewAccounts(newAccounts: any) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      (window as any).ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts);
      (window as any).ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        (window as any).ethereum.off('accountsChanged', handleNewAccounts);
      };
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      (window as any).ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts: any) => setAccounts(newAccounts));
    } else {
      // @ts-ignore
      onboarding.current.startOnboarding();
    }
  };
  return (
    <Button name={buttonText} type='button' disabled={isDisabled} onClick={onClick} />
  );
};

export default OnboardingButton;