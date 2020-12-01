import React, {ReactNode} from 'react';
import styles from './styles.module.scss';
import {H2, P} from '../Typography';

type Props = {
  children: ReactNode,
  description?: string,
  title: string
};

const ConnectAccountStep = ({ title, description= '', children }: Props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <H2>{title}</H2>
      </div>
      <div className={styles.row}>
        <P size="big">{description}</P>
      </div>
      {children}
    </div>
  );
};

export default ConnectAccountStep;