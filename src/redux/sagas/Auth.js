import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  AUTH_TOKEN,
  USER_PHONE,
  USER_ID,
  USER_NAME,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  SIGNIN_WITH_GOOGLE,
  SIGNIN_WITH_FACEBOOK,
} from "../constants/Auth";
import {
  showAuthMessage,
  authenticated,
  signOutSuccess,
  signUpSuccess,
  signInWithGoogleAuthenticated,
  signInWithFacebookAuthenticated,
} from "../actions/Auth";

import FirebaseService from "services/FirebaseService";
import JwtAuthService from "services/JwtAuthService";

export function* signInWithFBEmail() {
  yield takeEvery(SIGNIN, function* ({ payload }) {
    try {
      const response = yield call(JwtAuthService.login, payload);
      if (response.message === "username/password is wrong!") {
        yield put(showAuthMessage(response.message));
      } else if (response.data.message === "logged in successful") {
        localStorage.setItem(AUTH_TOKEN, response.headers.token);
        localStorage.setItem(USER_PHONE, response.data.phone);
        localStorage.setItem(USER_ID, response.data.user_id);
        localStorage.setItem(USER_NAME, response.data.first_name + " " + response.data.surname);
        yield put(authenticated(response.headers.token));
      }
      //   if (user === 'username/password is wrong!') {
      //     yield put(showAuthMessage(user));
      //   }
      //   if (user.data.message === "logged in successfu") {
      //     localStorage.setItem(AUTH_TOKEN, user.headers.token);
      //     yield put(authenticated(user.headers.token));
      //   }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
    try {
      const signOutUser = yield call(FirebaseService.signOutRequest);
      if (signOutUser === undefined) {
        localStorage.removeItem(AUTH_TOKEN);
        yield put(signOutSuccess(signOutUser));
      } else {
        yield put(showAuthMessage(signOutUser.message));
      }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}

export function* signUpWithFBEmail() {
  yield takeEvery(SIGNUP, function* ({ payload }) {
    const { email, password } = payload;
    try {
      const user = yield call(
        FirebaseService.signUpEmailRequest,
        email,
        password
      );
      if (user.message) {
        yield put(showAuthMessage(user.message));
      } else {
        localStorage.setItem(AUTH_TOKEN, user.user.uid);
        yield put(signUpSuccess(user.user.uid));
      }
    } catch (error) {
      yield put(showAuthMessage(error));
    }
  });
}

export function* signInWithFBGoogle() {
  yield takeEvery(SIGNIN_WITH_GOOGLE, function* () {
    try {
      const user = yield call(FirebaseService.signInGoogleRequest);
      if (user.message) {
        yield put(showAuthMessage(user.message));
      } else {
        localStorage.setItem(AUTH_TOKEN, user.user.uid);
        yield put(signInWithGoogleAuthenticated(user.user.uid));
      }
    } catch (error) {
      yield put(showAuthMessage(error));
    }
  });
}

export function* signInWithFacebook() {
  yield takeEvery(SIGNIN_WITH_FACEBOOK, function* () {
    try {
      const user = yield call(FirebaseService.signInFacebookRequest);
      if (user.message) {
        yield put(showAuthMessage(user.message));
      } else {
        localStorage.setItem(AUTH_TOKEN, user.user.uid);
        yield put(signInWithFacebookAuthenticated(user.user.uid));
      }
    } catch (error) {
      yield put(showAuthMessage(error));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(signInWithFBEmail),
    fork(signOut),
    fork(signUpWithFBEmail),
    fork(signInWithFBGoogle),
    fork(signInWithFacebook),
  ]);
}
