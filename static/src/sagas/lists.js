import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getAll } from '../services/lists';

function* getLists(action) {
    try {
        const { payload = {} } = action;
        const { jsonResult } = yield call(getAll, payload);

        if (jsonResult.data) {
            yield put({
                type: 'lists/get/success',
                payload: jsonResult.data,
            });
        }
    } catch (err) {
        console.log(err, arguments)
        yield put({
            type: 'lists/get/failed',
            err,
        });
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
