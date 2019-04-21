import React from 'react';
import { View, Text, Alert, Image, StyleSheet, Dimensions, TouchableOpacity, Touc } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import Header from './Component/Header';
const { width, height } = Dimensions.get('window');
const urlTriagle = "https://img.icons8.com/cotton/64/000000/warning-triangle.png";
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';
import {get_all_news, get_info_news} from '../../redux/action/actionCreator';
class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount = () => {
        this.props.get_all_news(this.props.linkNewsTopic)
        //alert(this.props.linkNewsTopic)
    }
    // rssParser = () => {
    //     axios({
    //         method: 'get',
    //         url: 'https://vietnamnet.vn/rss/tin-noi-bat.rss',
    //     })
    //         .then(response => {
    //             let data = rssParser.parse(response.data);
    //             console.log(data._55.items);
    //             return data._55.items;
    //         })
    //         .then(data => {
    //             var arr = [];
    //             for (i of data) {
    //                 let description = i.description;
    //                 var inital = description.indexOf('/>') + 2;
    //                 var finish = description.indexOf('</');
    //                 if (finish > inital) {
    //                     var cut = description.substring(inital, finish);
    //                 } else {
    //                     var firstSymbol = description.indexOf('">')
    //                     var cut = description.substring(firstSymbol, finish);
    //                 };
    //                 var one = cut.indexOf('<');
    //                 var two = cut.indexOf('>') + 1;
    //                 var des = cut.substring(one, two);
    //                 var subtitle = cut.replace(des, '');
    //                 let links = i.links[0].url;
    //                 let title = i.title;
    //                 var fisrtSrc = description.lastIndexOf('src=') + 5;
    //                 var lastSrc = description.lastIndexOf('"');
    //                 var illustration = description.substring(fisrtSrc, lastSrc);
    //                 var obj = { title, links, subtitle, illustration };
    //                 arr.push(obj);
    //             }
    //             console.log(arr)
    //             return arr;
    //         })
    //         .then(arr => this.setState({ arr }))
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    CarouselTouch = (item) => {
        this.props.navigation.navigate('Detail', { item });
    }
    renderItem({ item, index }, parallaxProps) {
        const borderBottomColor = this.props.light ? 'white' : 'black';
        const colorT = this.props.light ? 'white' : 'black';
        return (
            <View style={styles.carouselView}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.CarouselTouch(item)} style={styles.carouselView}>
                    <Image
                        source={{ uri: item.illustration }}
                        containerStyle={styles.containerStyle}
                        style={styles.containerStyle}
                    />
                    <View style={styles.viewTotal}>
                        <View style={styles.view1}>
                            <Image source={{ uri: urlTriagle }} style={styles.icon} />
                        </View>
                        <View style={styles.view2}>
                            <Text style={{ color: '#848484' }}>The Vergel</Text>
                        </View>
                        <View style={styles.view3}>
                            <Text style={{ color: "#848484" }}>2h ago</Text>
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <Text numberOfLines={2} style={[styles.title, { color: colorT }]}>{item.title}</Text>
                    </View>
                    <View style={styles.view5}>
                        <Text numberOfLines={4} style={[styles.text, { color: colorT }]}>{item.subtitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const backgroundColor = this.props.light ? "#170B3B" : 'white';
        return (
            <View style={[styles.container, { backgroundColor }]}>
                <Header setting={() => this.props.navigation.navigate('Home')} drawer = {()=> this.props.navigation.toggleDrawer()}/>
                <View style={styles.main}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.allNewsReducer}
                        renderItem={(item) => this.renderItem(item)}
                        sliderWidth={width}
                        itemWidth={0.8 * width}
                        sliderHeight={0.7 * height}
                        itemHeight={0.6 * height}
                        layout={'default'}
                        hasParallaxImages={true}
                    />
                </View>
            </View>
        )
    }
}
function mapSTP(state) {
    //alert(JSON.stringify(state.categoriesNewsReducer.choosedTopic[0].link));
    return {
        linkNewsTopic: state.categoriesNewsReducer.choosedTopic[0].link,
        allNewsReducer: state.allNewsReducer,
        light: state.changeLightReducer.light
    }
}

export default connect(mapSTP,{get_all_news, get_info_news})(Setting)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        //       backgroundColor:'#0A0A2A'
    },
    main: {
        flex: 11
    },
    carouselView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle: {
        width: 0.8 * width,
        height: 0.6 * height,
        marginRight: 0,
        borderRadius: 20,
        flex: 15
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    viewTotal: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1
    },
    icon: {
        width: 20,
        height: 20
    },
    view1: {
        flex: 1,
        justifyContent: 'center'
    },
    view2: {
        flex: 6,
        justifyContent: 'center'
    },
    view3: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    view4: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    view5: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flex: 4
    },
    text: {
        fontSize: 17,
        color: 'gray'
    }
})