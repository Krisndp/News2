import { CHANGE_LIGHT, GET_ALL_NEWS, GET_FAIL, GET_SUCCES, GET_INFO_NEWS, GET_SUCCES_INFO } from './actionType';

export function change_light() {
    return { type: CHANGE_LIGHT }
}

export function get_all_news() {
    return { type: GET_ALL_NEWS }
}

export function get_fail() {
    return { type: GET_FAIL, error }
}

export function get_succes() {
    return { type: GET_SUCCES, receivedNews }
}

export function get_info_news(){
    return{ type: GET_INFO_NEWS }
}

export function get_success_info() {
    return {type: GET_SUCCES_INFO, receivedInfoNews}
}