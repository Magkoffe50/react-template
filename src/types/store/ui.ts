import { RequestStatus as Status} from '../base/enums';

export interface UIState {
  TOKEN_GEYSER_DEPOSIT: Status,
  TOKEN_GEYSER_WITHDRAW: Status,
  GET_BALANCE: Status,
  GET_STATS_DATA: Status,
  GET_PAIRS: Status,
  message: string,
}