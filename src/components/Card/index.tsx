import React, { FC, PropsWithChildren, CSSProperties } from 'react';
import cx from 'classnames';
// import type { ActionsAction as Action } from 'types';
// import { Actions } from 'components';
import styles from './styles.module.scss';

type Props = {
  // actions?: Action[],
  tooltipID?: string | number,
  className?: string,
  style?: CSSProperties,
};

const Card: FC<PropsWithChildren<Props>> = ({
  // actions = [],
  className,
  style,
  // tooltipID= 'myTooltip',
  children,
}) => (
  <div className={cx(styles.card, className)} style={style || {}}>
    {/* {actions.length ? */}
    {/*  <Actions */}
    {/*    tooltipID={tooltipID} */}
    {/*    actions={actions} */}
    {/*    classNameBtn={styles.actionBtn} /> : <></> */}
    {/* } */}
    {children}
  </div>
);

export default Card;
