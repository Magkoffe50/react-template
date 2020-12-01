import React, { FC, ChangeEvent } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Value = string | number;

type Props = {
  placeholder?: string,
  size?: 'normal',
  value?: Value,
  classNameWrap?: string,
  className?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onSearch?: (value: Value) => void,
  icon?: boolean,
};

const InputSearch: FC<Props> = ({
  placeholder = 'Enter amount',
  value = '',
  size= 'normal',
  classNameWrap,
  className,
  onChange = () => {},
  onSearch = () => {},
  icon= false,
}) =>  {

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(e.key === 'Enter') {
      onSearch(value);
    }
  };

  return (<div className={cx(styles.wrap, classNameWrap)}>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={cx(
        styles.input,
        styles[size],
        className,
      )}
      onChange={onChange}
      onKeyPress={handleKeyPress}
    />
    <button
      type="button"
      className={styles.iconBtn}
      onClick={() => onSearch(value)}
    >
      {icon && <i className="icon-search" />}
    </button>
  </div>);
};

export default InputSearch;
