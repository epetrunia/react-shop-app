import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './types';
import { googleSignInSuccess, googleSignInFailure } from './actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from './../../firebase/utils';

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error.message));
  }
}

export function* googleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* userSagas() {
  yield all([call(googleSignInStart)]);
}
