import { takeLeading, call, put } from 'redux-saga/effects';
import { getWeb3 } from '../../../utils/metamask';
import actionTypes from '../actionTypes';
import apiActions from '../../api/actions';


function* yourSagaName({ type, payload}: any ) {
  try {
  } catch(err) {
  }
}

export default function* listener(): Iterable<any> {
  yield takeLeading(1, yourSagaName);
}