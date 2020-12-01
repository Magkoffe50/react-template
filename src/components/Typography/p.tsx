import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import {TextAlign, TextColor, TextSize} from '../../types/components/typography';

type Props = {
  className?: string,
  underline?: boolean,
  style?: { [key: string]: string | number },
  size?: TextSize,
  color?: TextColor,
  align?: TextAlign;
  bold?: boolean,
};

const P: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  style = { },
  size = 'normal',
  color = 'dark',
  align = 'left',
  underline = false,
  bold = false,
}) => (
  <p
    style={style}
    className={cx(
      styles.p,
      styles[size],
      styles[color],
      styles[align],
      {
        [styles.bold]: bold,
        [styles.underline]: underline,
      },
      className,
    )}
  >
    {children}
  </p>
);

export default P;
