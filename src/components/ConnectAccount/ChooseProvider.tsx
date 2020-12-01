import React from 'react';
import styles from './styles.module.scss';
import ConnectAccountStep from './ConnectAccountStep';
import metamask from '../../assets/img/metamask.svg';
import {Button} from '../index';

type Props = {
  onProviderClick: (provider: string) => void
};

const ChooseProvider = ({ onProviderClick }: Props) => {
  return (
    <ConnectAccountStep
      title="Connect Wallet"
    >

      <div className={styles.stepContent}>
        <img src={metamask} alt="metamask"/>
        <Button
          name='Metamask'
          type="button"
          className={styles.providerButton}
          onClick={() => onProviderClick('Metamask')}
        />
        </div>
    </ConnectAccountStep>
  );
};

export default ChooseProvider;