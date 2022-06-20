import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { GET_MESSAGES, SEND_MESSAGE } from "redux/constants/Messaging";
import { saveMessagesList } from "redux/actions/Messaging";

import AppService from "services/AppService";

export function* getMessages() {
  yield takeEvery(GET_MESSAGES, function* ({ payload }) {
    try {
      const response = yield call(AppService.getMessages);
      if (response.message.message) {
        yield put(saveMessagesList(response.message.allMessages.messages_sent));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getMessages)]);
}
