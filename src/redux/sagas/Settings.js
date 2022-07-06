import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { saveSettings, SettingsUpdated } from "redux/actions/Settings";
import { GET_SETTINGS, UPDATE_SETTINGS } from "redux/constants/Settings";

import AppService from "services/AppService";

export function* getSettings() {
  yield takeEvery(GET_SETTINGS, function* ({ payload }) {
    try {
      const response = yield call(AppService.getSettings);
      console.log("Get settings response", response.setting)
      if (response) {
        yield put(saveSettings(response.setting));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* updateSettings() {
  yield takeEvery(UPDATE_SETTINGS, function* ({ payload }) {
    console.log("Update settings payload", payload)
    try {
      const response = yield call(AppService.updateSettings, payload);
      console.log("Get settings response", response)
      if (response.message) {
        yield put(SettingsUpdated(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getSettings), fork(updateSettings)]);
}
