import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  GET_USER_DETAILS,
  GET_USERS,
  GET_WEEKLY_DATA,
  UPDATE_USER,
  CHANGE_USER_ROLE,
  CHANGE_USER_TYPE,
  DEACTIVATE_USER,
  ACTIVATE_USER,
  DECLINE_USER,
  APPROVE_USER,
  CHANGE_PASSWORD,
} from "redux/constants/Users";
import {
  saveUser,
  saveUsers,
  saveWeeklyData,
  userUpdated,
} from "redux/actions/Users";
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
      const response = yield call(AppService.getUserDetails, payload);
      yield put(saveUser(response));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* updateUser() {
  yield takeEvery(UPDATE_USER, function* ({ payload }) {
    try {
      const response = yield call(AppService.updateUser, payload);
      yield put(userUpdated(response.messages));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* changeUserRole() {
  yield takeEvery(CHANGE_USER_ROLE, function* ({ payload }) {
    try {
      const response = yield call(AppService.changeUserRole, payload);
      yield put(userUpdated(response.message));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* changeUserType() {
  yield takeEvery(CHANGE_USER_TYPE, function* ({ payload }) {
    try {
      const response = yield call(AppService.changeUserType, payload);
      yield put(userUpdated(response.message));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* deactivateUser() {
  yield takeEvery(DEACTIVATE_USER, function* ({ payload }) {
    try {
      const response = yield call(AppService.deactivateUser, payload);

      yield put(userUpdated(response.message));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* activateUser() {
  yield takeEvery(ACTIVATE_USER, function* ({ payload }) {
    try {
      const response = yield call(AppService.activateUser, payload);

      // yield put(saveUser(response));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* declineUser() {
  yield takeEvery(DECLINE_USER, function* ({ payload }) {
    try {
      const response = yield call(AppService.declineUser, payload);
      yield put(userUpdated(response.message));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* approveUser() {
  yield takeEvery(APPROVE_USER, function* ({ payload }) {
    try {
      const response = yield call(AppService.approveUser, payload);
      // yield put(saveUser(response));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* changePassword() {
  yield takeEvery(CHANGE_PASSWORD, function* ({ payload }) {
    try {
      const response = yield call(AppService.changePassword, payload);
      // yield put(saveUser(response));
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getUsers),
    fork(getUsersWeeklyRegistration),
    fork(getUserDetails),
    fork(updateUser),
    fork(changeUserRole),
    fork(changeUserType),
    fork(deactivateUser),
    fork(activateUser),
    fork(declineUser),
    fork(approveUser),
    fork(changePassword),
  ]);
}
