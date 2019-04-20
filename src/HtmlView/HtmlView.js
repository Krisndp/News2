import React from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import axios from 'axios';
import cheerio from 'react-native-cheerio';
const { width, height } = Dimensions.get('window');

export default class HTMLViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    componentWillMount = () => {
        axios({
            method: 'get',
            url: "https://vietnamnet.vn/vn/giai-tri/nhac/nsnd-doan-tan-giong-ca-cua-duong-chung-ta-di-qua-doi-514336.html"
        })
            .then(res => {
                //console.log(res.data);
                const data = res.data;
                const $ = cheerio.load(data);
                console.log($(".ArticleDetail").html());
                $('.article-relate').remove();
                $('.inner-article').remove();
                $('.ArticleDateTime').remove();
                $('.FmsArticleBoxStyle').remove();
                $('.title').remove();
                this.setState({ uri: $(".ArticleDetail").html() });
            })
            .catch(err => console.log('err'))
    }
    render() {
        console.log(this.state.uri);
        const uri = `<body>

        <h2>HTML Image</h2>
        <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">
        
        </body>`;
        return (
            <ScrollView contentContainerStyle={{ padding: 15 }}>
                <HTMLView value={this.state.uri}  >

                </HTMLView>
            </ScrollView>
        )
    }
}