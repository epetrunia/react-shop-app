import userActionTypes from './types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (errorMessage) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = () => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
});

export const emailSignInSuccess = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: emailAndPassword,
});

export const emailSignInFailure = (errorMessage) => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage,
});
