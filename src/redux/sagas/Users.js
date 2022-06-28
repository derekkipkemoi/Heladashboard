import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { GET_USER_DETAILS, GET_USERS, GET_WEEKLY_DATA } from "redux/constants/Users";
import {  saveUser, saveUsers, saveWeeklyData } from "redux/actions/Users";
import AppService from "services/AppService";

export function* getUsers() {
  yield takeEvery(GET_USERS, function* ({ payload }) {
    try {
      const response = yield call(AppService.getUsers);
      if (response.users.message) {
        yield put(saveUsers(response.users.allUsers.users));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getUsersWeeklyRegistration() {
  yield takeEvery(GET_WEEKLY_DATA, function* ({ payload }) {
    try {
      const response = yield call(AppService.getUsersWeeklyRegistration);
      yield put(saveWeeklyData(response));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getUserDetails() {
  yield takeEvery(GET_USER_DETAILS, function* ({ payload }) {
    try {
      console.log("Payload", payload)
      const response = yield call(AppService.getUserDetails, payload);
      console.log("Sagas weekly data response", response);
      yield put(saveUser(response));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getUsers), fork(getUsersWeeklyRegistration), fork(getUserDetails)]);
}
