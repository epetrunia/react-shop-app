import userActionTypes from './types';

const initialState = {
  currentUser: null,
  errorMessage: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: '',
      };
    case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case userActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
