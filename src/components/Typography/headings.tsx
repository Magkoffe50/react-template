import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import {HeadingType, TextAlign, TextColor} from '../../types/components/typography';

type Props = {
  children: ReactNode,
  underline?: boolean,
  align?: TextAlign,
  color?: TextColor,
  className?: string,
};

const createHeading = (type: HeadingType) => ({
  children,
  underline = false,
  className = '',
  align = 'left',
  color = 'dark',
  ...rest
}: Props) => {
  const hProps = {
    className: cx(
      styles[type],
      styles[color],
      className, styles[align],
      {
        [styles.underline]: underline,
      },
    ),
    children,
    ...rest,
  };
  return React.createElement(type, hProps, children);
};

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
