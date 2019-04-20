import { GET_ALL_NEWS, GET_FAIL, GET_SUCCES } from '../action/actionType';
import { put, takeLatest } from 'redux-saga/effects';
import { API } from './API';

function* getNews() {
    try {
        const receivedNews = yield API.getNewsFromAPI();
        yield console.log(receivedNews)
        yield put({ type: GET_SUCCES, receivedNews })
    } catch {
        yield put({ type: GET_FAIL })
    }
}

export function* watchGetNews(){
    yield takeLatest(GET_ALL_NEWS, getNews)
}