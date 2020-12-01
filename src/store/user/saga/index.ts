import { fork } from 'redux-saga/effects';
import withdraw from './withdraw';

export default function* tokenGeyser(): Iterable<any> {
  yield fork(withdraw);
}
