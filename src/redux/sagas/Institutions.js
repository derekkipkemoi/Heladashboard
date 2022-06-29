import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { instituteUpdated, saveInstitute, saveInstitutions } from "redux/actions/Institutions";
import {
  GET_INSTITUTE,
  GET_INSTITUTIONS,
  INSTITUTE_UPDATED,
  SAVE_INSTITUTIONS,
  UPDATE_INSTITUTE,
} from "redux/constants/Institutions";
import AppService from "services/AppService";

export function* getInstitutions() {
  yield takeEvery(GET_INSTITUTIONS, function* ({ payload }) {
    try {
      const response = yield call(AppService.getInstitutions);

      if (response.message.message) {
        yield put(saveInstitutions(response.message.allCompanies.companies));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getInstitute() {
  yield takeEvery(GET_INSTITUTE, function* ({ payload }) {
    try {
      const response = yield call(AppService.getInstitute, payload);
      if (response.message) {
        yield put(saveInstitute(response.company));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* updateInstitute() {
  yield takeEvery(UPDATE_INSTITUTE, function* ({ payload }) {
    try {
      const response = yield call(AppService.updateInstitute, payload);
      console.log("Sagas Response", response);
      if (response.message) {
        yield put(instituteUpdated(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getInstitutions), fork(getInstitute), fork(updateInstitute)]);
}
