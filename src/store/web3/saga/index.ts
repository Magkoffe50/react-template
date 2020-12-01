import { fork } from 'redux-saga/effects';
import onBoardingSaga from './onBoardingSaga';

export default function* web3(): Iterable<any> {
  yield fork(onBoardingSaga);
}
