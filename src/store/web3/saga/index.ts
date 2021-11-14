import { fork } from 'redux-saga/effects';
import onBoardingSaga from './onBoardingSaga';
// eslint-disable-next-line
export default function* web3(): Iterable<any> {
  yield fork(onBoardingSaga);
}
