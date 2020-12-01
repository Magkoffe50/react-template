import { RouterState } from 'connected-react-router';
import { UIState } from './ui';
import { Web3State } from './web3';
import { UserState } from './user';

export interface RootStoreState {
  ui: UIState;
  web3: Web3State;
  router: RouterState;
  user: UserState;
}
