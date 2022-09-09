import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  calculatorResponseData,
  downloadedApplication,
  getAdvanceRequestActionMessage,
  saveAdvanceRequestMainMenu,
  saveNormalRequestsMainMenu,
  saveRequestsData,
  saveTSCMainMenu,
  saveUserRequestsData,
} from "redux/actions/AdvanceRequests";
import {
  ADD_COMMENT,
  ADD_DATASHEET_NUMBER,
  ADD_FILE,
  CALCULATOR,
  DOWNLOADED_APPLICATION,
  DOWNLOAD_APPLICATION,
  GETREQUESTSDATA,
  GET_USER_REQUESTS_DATA,
  MAINMENUDATA,
  NORMALREQUESTSMENU,
  POST_ADVANCE_REQUEST_ACTION,
  TSCREQUESTSMENU,
  UPDATE_ADVANCE_REQUEST,
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

export function* calculator() {
  yield takeEvery(CALCULATOR, function* ({ payload }) {
    try {
      const response = yield call(AppService.calculator, payload);
      if (response.message) {
        yield put(calculatorResponseData(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* updateAdvanceRequest() {
  yield takeEvery(UPDATE_ADVANCE_REQUEST, function* ({ payload }) {
    try {
      const response = yield call(AppService.updateAdvanceRequest, payload);
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* addDatasheetNumber() {
  yield takeEvery(ADD_DATASHEET_NUMBER, function* ({ payload }) {
    try {
      const response = yield call(AppService.addDatasheetNumber, payload);
      console.log("Response", response);
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* downloadApplication() {
  yield takeEvery(DOWNLOAD_APPLICATION, function* ({ payload }) {
    try {
      const response = yield call(AppService.downloadApplication, payload);
      console.log("Response sagas", response);
      if (response) {
        yield put(downloadedApplication(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* addComment() {
  yield takeEvery(ADD_COMMENT, function* ({ payload }) {
    try {
    
      const response = yield call(AppService.addComment, payload);
      console.log("Response", response);
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* addFile() {
  yield takeEvery(ADD_FILE, function* ({ payload }) {
    try {
     
      const response = yield call(AppService.addFile, payload);
      console.log("Response", response);
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response));
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
    fork(calculator),
    fork(updateAdvanceRequest),
    fork(addDatasheetNumber),
    fork(downloadApplication),
    fork(addComment),
    fork(addFile),
  ]);
}
