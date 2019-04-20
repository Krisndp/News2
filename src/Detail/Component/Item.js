import React from 'react';
import { View, Image, ImageBackground, Text, Alert, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import cheerio from 'react-native-cheerio';
import axios from 'axios';
import HTMLView from 'react-native-htmlview'
const urlTriagle = "https://img.icons8.com/cotton/64/000000/warning-triangle.png";
const { width, height } = Dimensions.get('window');


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: ''
        }
    }

    componentWillMount = () => {
        axios({
            method: 'get',
            url: this.props.item.links
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
        const item = this.props.item;
        const colorT = this.props.light ? 'white' : 'black';
        const backgroundColor = this.props.light ? "#170B3B" : 'white';
        //alert(JSON.stringify(item.links))

        return (
            <View style={{ padding: 40, marginTop: 0.6 * height, paddingTop: 10 }}>
                <View style={styles.viewTotal}>
                    <View style={styles.view1}>
                        <Image source={{ uri: urlTriagle }} style={[styles.icon]} />
                    </View>
                    <View style={styles.view2}>
                        <Text style={{ color: '#848484' }}>The Vergel</Text>
                    </View>
                    <View style={styles.view3}>
                        <Text style={{ color: '#848484' }}>2h ago</Text>
                    </View>
                </View>
                <View style={styles.view4}>
                    <Text onPress = {this.props.onPress} style={[styles.title, { color: colorT }]}>{item.title}</Text>
                </View>
                <View style={styles.view5} activeOpacity={1}>
                    <HTMLView value={this.state.uri} stylesheet={{color:'red'}}/>
                </View>
            </View>
                )
            }
        }
function mapSTP(state) {
    return {
                    light: state.changeLightReducer.light
            }
        }
        
        export default connect(mapSTP)(Item)
        
const styles = StyleSheet.create({
                    image: {
                    width: width / 14,
                height: width / 14,
                tintColor: 'white',
                marginRight: 20
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
            },
    view5: {
                    justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
            },
    text: {
                    fontSize: 17,
            },
    title: {
                    fontSize: 25,
                fontWeight: 'bold'
            },
})