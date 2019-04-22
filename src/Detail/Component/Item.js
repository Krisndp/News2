import React from 'react';
import { View, Image, ImageBackground, Text, Alert, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import cheerio from 'react-native-cheerio';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';
import { get_info_news } from '../../../redux/action/actionCreator'
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
        this.props.get_info_news(this.props.item.links, this.props.light)
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
                        <Text style={{ color: '#848484' }}>{item.published}</Text>
                    </View>
                </View>
                <View style={styles.view4}>
                    <Text onPress={this.props.onPress} style={[styles.title, { color: colorT }]}>{item.title}</Text>
                </View>
                <View style={styles.view5} activeOpacity={1}>
                    <HTMLView value={this.props.info} stylesheet={{ color: 'red' }} textComponentProps={{ color: 'red' }} />
                </View>
            </View>
        )
    }
}
function mapSTP(state) {
    return {
        light: state.changeLightReducer.light,
        info: state.infoNewsReducer,
    }
}

export default connect(mapSTP, { get_info_news })(Item)

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
        flex: 3,
        justifyContent: 'center'
    },
    view3: {
        flex: 6,
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