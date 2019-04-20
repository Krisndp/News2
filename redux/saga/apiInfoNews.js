import axios from 'axios';
import cheerio from 'react-native-cheerio';

function* getInfoNewsFromAPI() {
    const response = yield axios({
        method: 'get',
        url: "https://vietnamnet.vn/vn/giai-tri/nhac/nsnd-doan-tan-giong-ca-cua-duong-chung-ta-di-qua-doi-514336.html"
    })
        .then(res => {
            // //console.log(res.data);
            // const data = res.data;
            // const $ = cheerio.load(data);
            // console.log($(".ArticleDetail").html());
            // $('.article-relate').remove();
            // $('.inner-article').remove();
            // return $(".ArticleDetail").html();
        })
        .catch(err => console.log('err'))
       // return response
}

export const asAPI = {
   // getInfoNewsFromAPI
}