import { GET_INFO_NEWS, GET_FAIL, GET_SUCCES } from '../action/actionType';
import { put, takeLatest } from 'redux-saga/effects';
import { API } from './apiInfoNews';

function* getInfoNews() {
    try {
        // const receivedInfoNews = yield API.getNewsFromAPI();
        // yield console.log(receivedInfoNews)
        // yield put({ type: GET_SUCCES, receivedInfoNews })
    } catch {
        // yield put({ type: GET_FAIL })
    }
}

export function* watchGetInfoNews(){
    // yield takeLatest(GET_INFO_NEWS, getInfoNews)
}