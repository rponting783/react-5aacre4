import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_USERS, GET_USERS, GET_USERS_STARTED, GET_USERS_FAILED } from '../actions';
import Axios from 'axios';

export const watchGetUsers = function* () {
  yield takeEvery(GET_USERS, workerGetUsers);
}

function* workerGetUsers() {
  try {
    const uri = 'https://jsonplaceholder.typicode.com/users';
    const result = yield call(Axios.get, uri);
    yield put({ type: SET_USERS, value: result.data });
  } 
  catch {
    console.log('Failed');
  }
} 