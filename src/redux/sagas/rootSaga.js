import {all} from 'redux-saga/effects';
import UserSaga from './handlers/User';
import CardsSaga from './handlers/Cards';
export function* watcherSaga() {
  yield all([UserSaga,CardsSaga]);
}
