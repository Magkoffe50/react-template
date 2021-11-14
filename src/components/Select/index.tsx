/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import RSelect from 'react-select';
import cx from 'classnames';
import './styles.scss';
import { ISelectProps as ISelect } from '../../types/components/select';
import { P } from '../Typography';
import Spinner from '../Spinner';

const Select: FC<ISelect> = ({
  options,
  value = '',
  error = '',
  placeholder = 'Select value',
  label = '',
  name = 'select',
  className,
  isSearchable = false,
  isMulti = false,
  loader,
  onChange = () => {
  },
  ...rest
}) => {
  if (loader) return <div className="spin_s"><Spinner /></div>;
  return (
    <div className={cx(className)}>
      {label && <span className="rs__label">{label}</span>}
      <RSelect
        {...rest}
        options={options}
        value={value as never}
        placeholder={placeholder}
        name={name}
        isMulti={isMulti}
        allowSelectAll
        isClearable={false}
        isSearchable={isSearchable}
        className="rs__select"
        classNamePrefix="rs"
        onChange={onChange}
      />
      {error && <P color="error">{error}</P>}
    </div>
  );
};

export default Select;
