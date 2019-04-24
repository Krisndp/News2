import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { deleteNews, querryAll } from '../../realmDB/allShema';
import { getDataFromRealm } from '../../redux/action/actionCreator';


class Item extends React.Component {

    deleteThisNews = (Newsid) => {
        deleteNews(Newsid)
            .then(querryAll().then(allNewsList => {
                const NewsSort = allNewsList.sort(function (a, b) { return b.published - a.published });
                this.props.getDataFromRealm(NewsSort)
            }))
            .catch(e => console.log(e))
    }
    render() {
        const item = this.props.item;
        const light = this.props.light;
        const colorText = light ? 'white' : 'black';
        const backgroundColor = light ? "#170B3B" : 'white';
        const colorIcon = light ? 'white' : 'black';
        return (
            <Swipeout backgroundColor={backgroundColor} autoClose={true} right={[{ text: 'Xóa', backgroundColor: 'red', onPress: () => this.deleteThisNews(item.id) }]}>
                <TouchableOpacity onPress={this.props.goToDetail} style={[styles.container,{backgroundColor}]}>
                    <View style={styles.ViewTitle}>
                        <Text numberOfLines={2} style={[styles.TextTitle,{color:colorText}]}>{item.title}</Text>
                        <Text style={styles.VNtext}>VietNamNet</Text>
                    </View>
                    <View style={styles.ViewDes}>
                        <View style={styles.ViewImage}>
                            <Image style={[styles.image]} source={{ uri: item.illustration }} />
                        </View>
                        <View style={styles.ViewDescription}>
                            <Text numberOfLines={4} style={[styles.TextDes,{color:colorText}]}>{item.subtitle}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }
}

function MapSTP(state) {
    return {
        RealmDataRecently: state.RealmDataRecently,
        light: state.changeLightReducer.light
    }
}
export default connect(MapSTP, { getDataFromRealm })(Item)

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        width,
        height: height / 4.2,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewTitle: {
        flex: 1,
        marginBottom: 5
    },
    TextTitle: {
        color: 'black',
        fontSize: width / 22,
        fontWeight: 'bold'
    },
    VNtext: {
        fontSize: width / 30,
        color: '#848484' 
    },
    ViewDes: {
        flex: 2,
        flexDirection: 'row'
    },
    image: {
        width: width * 0.2,
        height: width * 0.2
    },
    ViewImage: {
        flex: 2,
        justifyContent: 'center'
    },
    ViewDescription: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextDes: {
        color: 'black',
        fontSize: width / 26
    }
})