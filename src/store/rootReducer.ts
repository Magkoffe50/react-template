import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import web3 from './web3/reducer';
import ui from './ui/reducer';
import user from './user/reducer';

export default {
  router: connectRouter(history),
  web3,
  ui,
  user,
};
