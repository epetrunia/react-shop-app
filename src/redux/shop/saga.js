import { takeEvery } from 'redux-saga/effects';
import shopActionTypes from './types';

export function* fetchCollectionsAsync() {
  yield console.log('get fired');
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
