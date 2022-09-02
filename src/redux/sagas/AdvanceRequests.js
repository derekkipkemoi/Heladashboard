import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  getAdvanceRequestActionMessage,
  saveAdvanceRequestMainMenu,
  saveNormalRequestsMainMenu,
  saveRequestsData,
  saveTSCMainMenu,
  saveUserRequestsData,
} from "redux/actions/AdvanceRequests";
import {
  GETREQUESTSDATA,
  GET_USER_REQUESTS_DATA,
  MAINMENUDATA,
  NORMALREQUESTSMENU,
  POST_ADVANCE_REQUEST_ACTION,
  TSCREQUESTSMENU,
} from "redux/constants/AdvanceRequests";

import AppService from "services/AppService";

export function* getAdvanceRequestsMainMenu() {
  yield takeEvery(MAINMENUDATA, function* ({ payload }) {
    try {
      const response = yield call(AppService.getAdvanceRequestMainMenu);
      if (response) {
        yield put(saveAdvanceRequestMainMenu(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getNormalRequestsMainMenu() {
  yield takeEvery(NORMALREQUESTSMENU, function* () {
    try {
      const response = yield call(AppService.getNormalRequestMainMenu);
      if (response) {
        yield put(saveNormalRequestsMainMenu(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getTSCMainMenu() {
  yield takeEvery(TSCREQUESTSMENU, function* () {
    try {
      const response = yield call(AppService.getTSCMainMenu);
      if (response) {
        yield put(saveTSCMainMenu(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getRequestsData() {
  yield takeEvery(GETREQUESTSDATA, function* ({ payload }) {
    try {
      const response = yield call(AppService.getRequestsData, payload);
      if (response.message) {
        yield put(saveRequestsData(response.allRequests.advance_requests));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getUserRequestsData() {
  yield takeEvery(GET_USER_REQUESTS_DATA, function* ({ payload }) {
    try {
      const response = yield call(AppService.getUserRequestsData, payload);
      if (response) {
        yield put(saveUserRequestsData(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* postAdvanceRequestsAction() {
  yield takeEvery(POST_ADVANCE_REQUEST_ACTION, function* ({ payload }) {
    try {
      const response = yield call(
        AppService.postAdvanceRequestsAction,
        payload
      );
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getAdvanceRequestsMainMenu),
    fork(getNormalRequestsMainMenu),
    fork(getTSCMainMenu),
    fork(getRequestsData),
    fork(getUserRequestsData),
    fork(postAdvanceRequestsAction),
  ]);
}
