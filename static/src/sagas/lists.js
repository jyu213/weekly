import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getAll } from '../services/lists';
import { message } from 'antd';

function* getLists() {
  try {
    const { jsonResult } = yield call(getAll);
    if (jsonResult.data) {
      console.log('get data success')
      yield put({
        type: 'lists/get/success',
        payload: jsonResult.data,
      });
    }
  } catch (err) {
    message.error(err);
    //yield put({
    //  type: 'lists/get/failed',
    //  err,
    //});
  }
}

function* watchListsGet() {
  yield takeLatest('lists/get', getLists)
}

export default function* () {
  yield fork(watchListsGet);

  // Load lists.
  yield put({
    type: 'lists/get',
  });
}
