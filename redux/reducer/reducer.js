import {combineReducers} from 'redux';
import state from './state';
import categoriesReducer from './categoriesReducer';
import favoriteReducer from './favoriteReducer';
import allNewsReducer from './allNewsReducer';
import changeLightReducer from './changeLightReducer';
import infoNewsReducer from './infoNewsReducer';
import categoriesNewsReducer from './categoriesNewsReducer';
import RealmDataRecently from './RealmDataRecently';
import RealmDataSaved from './RealmDataSaved';
import RealmDataFavorite from './RealmDataFavorite';

const reducer = combineReducers({
    state,
    categoriesReducer,
    favoriteReducer,
    allNewsReducer,
    changeLightReducer,
    infoNewsReducer,
    categoriesNewsReducer,
    RealmDataRecently,
    RealmDataSaved,
    RealmDataFavorite
})

export default reducer;
