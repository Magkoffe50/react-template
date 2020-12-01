import type { Action } from '../../types';

// const GET_BALANCE = 'GET_BALANCE';
// const GET_BALANCE_SUCCESS = 'GET_BALANCE_SUCCESS';
// const SET_SELECTED_PAIRS = 'SET_SELECTED_PAIRS';
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

// const GET_PAIRS = 'GET_PAIRS';
// const GET_PAIRS_SUCCESS = 'GET_PAIRS_SUCCESS';

// const TOKEN_GEYSER_DEPOSIT = 'TOKEN_GEYSER_DEPOSIT';
// const TOKEN_GEYSER_DEPOSIT_SUCCESS = 'TOKEN_GEYSER_DEPOSIT_SUCCESS';

// const TOKEN_GEYSER_WITHDRAW = 'TOKEN_GEYSER_WITHDRAW';
// const TOKEN_GEYSER_WITHDRAW_SUCCESS = 'TOKEN_GEYSER_WITHDRAW_SUCCESS';

// const GET_STATS_DATA = 'GET_STATS_DATA';
// const GET_STATS_DATA_SUCCESS = 'GET_STATS_DATA_SUCCESS';

export type ToggleDarkMode = Action<typeof TOGGLE_DARK_MODE, boolean>;
// export type DepositTokenGeyserAction = Action<typeof TOKEN_GEYSER_DEPOSIT, any>;
// export type WithDrawTokenGeyserAction = Action<typeof TOKEN_GEYSER_WITHDRAW, any>;
// export type GetStatsDataAction = Action<typeof GET_STATS_DATA, any>;
// export type GetBalanceAction = Action<typeof GET_BALANCE, any>;
// export type GetPairsAction = Action<typeof GET_PAIRS, any>;
// export type SetPairsAction = Action<typeof SET_SELECTED_PAIRS, any>;
// export type TokenGeyserAction =
//   | DepositTokenGeyserAction
//   | Action<typeof TOKEN_GEYSER_DEPOSIT_SUCCESS, any>
//   | WithDrawTokenGeyserAction
//   | Action<typeof TOKEN_GEYSER_WITHDRAW_SUCCESS, any>
//   | GetStatsDataAction
//   | Action<typeof GET_STATS_DATA_SUCCESS, any>
//   | GetBalanceAction
//   | Action<typeof GET_BALANCE_SUCCESS, any>
//   | GetPairsAction
//   | Action<typeof GET_PAIRS_SUCCESS, any>
//   | SetPairsAction
//   | Action<typeof SET_SELECTED_PAIRS, any>;

export default {
  TOGGLE_DARK_MODE,
  // GET_BALANCE,
  // GET_BALANCE_SUCCESS,
  // TOKEN_GEYSER_DEPOSIT,
  // TOKEN_GEYSER_DEPOSIT_SUCCESS,
  // TOKEN_GEYSER_WITHDRAW,
  // TOKEN_GEYSER_WITHDRAW_SUCCESS,
  // GET_STATS_DATA,
  // GET_STATS_DATA_SUCCESS,
  // GET_PAIRS,
  // GET_PAIRS_SUCCESS,
  // SET_SELECTED_PAIRS,
};
