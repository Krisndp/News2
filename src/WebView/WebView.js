import React from 'react';
import { View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import cheerio from 'react-native-cheerio';
const {width, height} = Dimensions.get('window');

export default class WebViewDetail extends React.Component {
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
                this.setState({uri: $(".ArticleDetail").html()});
            })
            .catch(err => console.log('err'))
    }
    render() {
        console.log(this.state.uri)
        return (
            <WebView source = {{html: this.state.uri}} style = {{width}} >

            </WebView>
        )
    }
}