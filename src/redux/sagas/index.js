import { all } from 'redux-saga/effects';
import Auth from './Auth';
import Messaging from './Messaging'
import RolesPermissions from './RolesPermissions';

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    Messaging(),
    RolesPermissions()
  ]);
}
