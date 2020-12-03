import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/saga';
import { userSagas } from './user/sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
