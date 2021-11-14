/* eslint-disable react/button-has-type */

import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import Spinner from '../Spinner';

type CommonUse = 'primary' | 'secondary' | 'danger';
type Props = {
  name?: string,
  // eslint-disable-next-line
    onClick?: () => any,
  type?: 'button' | 'submit' | 'reset',
  use?: CommonUse,
  outlined?: boolean,
  containsIcon?: boolean,
  disabled?: boolean,
  fill?: boolean,
  size?: string,
  children?: Node,
  loading?: boolean,
  transparent?: boolean,
  className?: string,
  danger?: boolean,
  underlined?: boolean,
  icon?: string,
};

const Button = ({
  name = '',
  type = 'button',
  onClick,
  use = 'primary',
  outlined,
  containsIcon = false,
  disabled = false,
  fill = false,
  size = 'm',
  loading = false,
  transparent = false,
  children,
  className = '',
  danger = false,
  underlined = true,
  icon = '',
}: Props) => (
  <button
    disabled={disabled || loading}
    type={type}
    className={cx(
      styles.button,
      styles[use],
      styles[size],
      {
        [styles.outlined]: outlined,
        [styles.fill]: fill,
        [styles.icon]: containsIcon,
        [styles.loading]: loading,
        [styles.transparent]: transparent,
        [styles.danger]: danger,
        [styles.underlined]: underlined,
        [styles.disabled]: disabled,
      },
      className,
    )}
    onClick={onClick}
  >
    <div className={styles.buttonContent}>
      {icon && <i className={icon} />}
      <div>{children || name}</div>
      {loading && <Spinner />}
    </div>
  </button>
);

export default Button;
