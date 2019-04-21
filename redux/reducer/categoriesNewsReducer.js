import { CHANGE_CHOOSE_TOPIC } from '../action/actionType';
const defaultState = {
    allTopic: [
        {
            id: 1,
            nameTopic: "Tin nổi bật",
            color: "red",
            link: "http://vietnamnet.vn/rss/tin-noi-bat.rss",
            onClick: true
        },
        {
            id: 2,
            nameTopic: "Pháp luật",
            color: "red",
            link: "	http://vietnamnet.vn/rss/phap-luat.rss",
            onClick: false
        },
        {
            id: 3,
            nameTopic: "Công nghệ",
            color: "red",
            link: "	http://vietnamnet.vn/rss/cong-nghe.rss",
            onClick: false
        },
        {
            id: 4,
            nameTopic: "Kinh doanh",
            color: "red",
            link: "http://vietnamnet.vn/rss/kinh-doanh.rss",
            onClick: false
        },
        {
            id: 5,
            nameTopic: "Giáo dục",
            color: "red",
            link: "http://vietnamnet.vn/rss/giao-duc.rss",
            onClick: false
        }
    ],
    choosedTopic: {}
}

const categoriesNewsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CHOOSE_TOPIC:
            return {
                 allTopic: state.allTopic.map(e => {
                    if (e.id == action.id) {
                        return { ...e, onClick: true }
                    } else {
                        return { ...e, onClick: false }
                    }
                }),
                choosedTopic: state.allTopic.filter(e => {
                    if (e.id == action.id) {
                        return e
                    }
                }),
            }


        default:
            return {
                allTopic: state.allTopic,
                choosedTopic: state.allTopic.filter(e => {
                    if (e.onClick == true) {
                        return e
                    }
                })
            };
    }
}

export default categoriesNewsReducer;