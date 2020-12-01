// import type { UIAction } from './actions';
import {UIState} from '../../types/store';

const initialState: UIState = {
  TOKEN_GEYSER_DEPOSIT: 'INIT',
  TOKEN_GEYSER_WITHDRAW: 'INIT',
  GET_BALANCE: 'INIT',
  GET_STATS_DATA: 'INIT',
  GET_PAIRS: 'INIT',
  message: '',
};

export default (state: UIState = initialState, action: any): UIState => {
  const { type } = action;

  if (type === 'RESET_UI') return initialState;

  const matches = /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  if (requestState === 'ERROR') {
    const message  = action.payload?.message;
    return {
      ...state,
      [requestName]: requestState,
      message,
    };
  }

  return {
    ...state,
    [requestName]: requestState,
  };
};
