import {watchGetNews} from './AllNewsSaga';
import {call, all} from 'redux-saga/effects';

export default function* saga(){
    yield call(watchGetNews);
    //yield all(watchGetInfoNews);
}