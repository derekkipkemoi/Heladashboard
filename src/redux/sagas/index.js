import { all } from 'redux-saga/effects';
import Auth from './Auth';
import Messaging from './Messaging'

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    Messaging(),
  ]);
}
