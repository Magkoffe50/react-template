import React from 'react';
import noop from 'lodash';
import cx from 'classnames';
import styles from './styles.module.scss';
import Button from '../Button';

export type Value = string | number | ToggleOption;

export type ToggleOption = {
  label: string,
  value: Value,
};

type Props = {
  onToggle?: (arg0: number) => void,
  options: ToggleOption[],
  selected?: Value,
  size?: 'sm' | 'md' | 'xs',
  fill?: boolean,
  className?: string,
  use?: string,
  disabled?: boolean,
};

const Toggler = ({
  onToggle = noop,
  options,
  selected,
  size = 'md',
  fill = true,
  className,
  use = 'default',
  disabled = false,
}: Props) => (
  <div className={cx(styles.toggler, styles[size], { [styles.fill]: fill }, className)}>
    {options.map((option, index) => (
      <Button
        key={JSON.stringify(option.value)}
        disabled={disabled}
        onClick={() => onToggle(index)}
        className={cx(
          styles.toggle,
          styles[size],
          {
            [styles.selected]:
            selected === option ||
            selected === option.value ||
            selected === index ||
            selected === option.label,
          },
          styles[use],
        )}
        name={option.label}
      />
    ))}
  </div>
);

export default Toggler;
