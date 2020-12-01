import React, { ChangeEvent, FC } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import cx from 'classnames';

import styles from './styles.module.scss';

type Value = string | number;

type Props = {
  placeholder?: string;
  size?: 'normal';
  value?: Value;
  classNameWrap?: string;
  className?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: Value) => void;
};

const InputAmount: FC<Props> = ({
  placeholder = 'Enter amount',
  value = '',
  name = '',
  size = 'normal',
  classNameWrap,
  className,
  onChange = () => {},
  onSearch = () => {},
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <div className={cx(styles.wrap, classNameWrap)}>
      <MaskedInput
        mask={createNumberMask({
          prefix: '',
          suffix: '',
          includeThousandsSeparator: true,
          thousandsSeparatorSymbol: '',
          allowDecimal: true,
          decimalSymbol: '.',
          decimalLimit: 18,
          // integerLimit: null,
          // requireDecimal: false,
          // allowNegative: false,
          // allowLeadingZeroes: false,
        })}
        guide={false}
        id="my-input-id"
        onBlur={() => {}}
        type="text"
        value={value}
        placeholder={placeholder}
        className={cx(styles.input, styles[size], className)}
        name={name}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default InputAmount;
