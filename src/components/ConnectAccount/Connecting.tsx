import React from 'react';
import ConnectAccountStep from './ConnectAccountStep';
import styles from './styles.module.scss';
import { Spinner } from '../index';

const Connecting = () => (
  <ConnectAccountStep
    title="Unlock Wallet"
    description="You may need to click the extension"
  >
    <div className={styles.row}>
      <div className={styles.stepContent}>
        <Spinner />
      </div>
    </div>
  </ConnectAccountStep>
);

export default Connecting;
