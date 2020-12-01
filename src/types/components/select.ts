import { Props as ReactSelectProps } from 'react-select';

export interface ISelectProps extends ReactSelectProps {
  label?: string,
  error?: string,
  loader: boolean,
}