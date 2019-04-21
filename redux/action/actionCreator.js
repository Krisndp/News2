import { CHANGE_LIGHT, GET_ALL_NEWS, GET_FAIL, GET_SUCCES, GET_INFO_NEWS, GET_SUCCES_INFO, CHANGE_CHOOSE_TOPIC } from './actionType';

export function change_light() {
    return { type: CHANGE_LIGHT }
}

export function get_all_news(linkNewsTopic) {
    return { type: GET_ALL_NEWS, linkNewsTopic }
}

export function get_fail() {
    return { type: GET_FAIL, error }
}

export function get_succes() {
    return { type: GET_SUCCES, receivedNews }
}

export function get_info_news(linkNews){
    return{ type: GET_INFO_NEWS, linkNews }
}

export function get_success_info() {
    return {type: GET_SUCCES_INFO, receivedInfoNews}
}

export function change_choose_topic(id){
    return {type: CHANGE_CHOOSE_TOPIC, id}
}