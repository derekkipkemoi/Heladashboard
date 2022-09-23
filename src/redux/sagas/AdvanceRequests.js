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
  searchLoanByRefNoResponse,
  stopOrderDatasheetNumber,
  stopOrdersData,
  stopOrdersMenuData,
  stopOrdersUserData,
  topupsDashboard,
} from "redux/actions/AdvanceRequests";
import {
  ADD_COMMENT,
  ADD_DATASHEET_NUMBER,
  ADD_FILE,
  CALCULATOR,
  DOWNLOADED_APPLICATION,
  DOWNLOAD_APPLICATION,
  GETREQUESTSDATA,
  GET_STOP_ORDERS_DATA,
  GET_STOP_ORDERS_USER_DATA,
  GET_TOP_UPS_DASHBOARD,
  GET_USER_REQUESTS_DATA,
  MAINMENUDATA,
  NORMALREQUESTSMENU,
  POST_ADVANCE_REQUEST_ACTION,
  SEARCH_LOAN_BY_REFNO,
  STOP_ORDERS_MENU,
  STOP_ORDER_GENERATE_DATASHEET,
  STOP_ORDER_GENERATE_DATASHEET_NUMBER,
  TSCREQUESTSMENU,
  UPDATE_ADVANCE_REQUEST,
  UPDATE_STOP_ORDER,
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
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* stopOrdersMenu() {
  yield takeEvery(STOP_ORDERS_MENU, function* ({ payload }) {
    try {
      const response = yield call(AppService.getStopOrdersMainMenu);
      if (response) {
        yield put(stopOrdersMenuData(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getStopOrdersData() {
  yield takeEvery(GET_STOP_ORDERS_DATA, function* ({ payload }) {
    try {
      const response = yield call(AppService.getStopOrdersData, payload);
      if (response.message) {
        yield put(stopOrdersData(response.requests));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getStopOrdersUserData() {
  yield takeEvery(GET_STOP_ORDERS_USER_DATA, function* ({ payload }) {
    try {
      const response = yield call(AppService.getStopOrdersUserData, payload);
      if (response) {
        yield put(stopOrdersUserData(response.result));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* UpdateStopOrder() {
  yield takeEvery(UPDATE_STOP_ORDER, function* ({ payload }) {
    try {
      const response = yield call(AppService.updateStopOrder, payload);
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* stopOrderGenerateDatasheetNumber() {
  yield takeEvery(
    STOP_ORDER_GENERATE_DATASHEET_NUMBER,
    function* ({ payload }) {
      try {
        const response = yield call(
          AppService.stopOrderGenerateDatasheetNumber
        );
        if (response) {
          yield put(stopOrderDatasheetNumber(response));
        }
      } catch (err) {
        console.log("Messages listing error in sagas", err);
      }
    }
  );
}

export function* stopOrderGenerateDatasheet() {
  yield takeEvery(STOP_ORDER_GENERATE_DATASHEET, function* ({ payload }) {
    try {
      const response = yield call(
        AppService.stopOrderGenerateDatasheet,
        payload
      );
      if (response.message) {
        yield put(getAdvanceRequestActionMessage(response));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* loanSearchByRefNo() {
  yield takeEvery(SEARCH_LOAN_BY_REFNO, function* ({ payload }) {
    try {
      const response = yield call(AppService.loanSearchByRefNo, payload);
      if (response) {
        yield put(searchLoanByRefNoResponse(response.result));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getTopUpsDashboard() {
  yield takeEvery(GET_TOP_UPS_DASHBOARD, function* ({ payload }) {
    try {
      const response = yield call(AppService.getTopUpsDashboard);
      console.log("sagas response", response);
      if (response) {
        yield put(topupsDashboard(response));
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
    fork(stopOrdersMenu),
    fork(getStopOrdersData),
    fork(getStopOrdersUserData),
    fork(UpdateStopOrder),
    fork(stopOrderGenerateDatasheetNumber),
    fork(loanSearchByRefNo),
    fork(stopOrderGenerateDatasheet),
    fork(getTopUpsDashboard)
  ]);
}
