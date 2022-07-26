import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { savePayRollRegistration } from "redux/actions/Payroll";
import { PAYROLL_REGISTRATION } from "redux/constants/Payroll";

import AppService from "services/AppService";

export function* getPayRollRegistration() {
  yield takeEvery(PAYROLL_REGISTRATION, function* ({ payload }) {
    try {
      const response = yield call(AppService.getPayRollRegistration);
      if (response.message) {
        yield put(
          savePayRollRegistration(response.allStaffs.staff_registrations)
        );
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getPayRollRegistration)]);
}
