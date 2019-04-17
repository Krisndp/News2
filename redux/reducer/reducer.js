import {combineReducers} from 'redux';
import state from './state';
import categoriesReducer from './categoriesReducer';
import favoriteReducer from './favoriteReducer';
import allNewsReducer from './allNewsReducer';
import changeLightReducer from './changeLightReducer';
const reducer = combineReducers({
    state,
    categoriesReducer,
    favoriteReducer,
    allNewsReducer,
    changeLightReducer
})

export default reducer;
