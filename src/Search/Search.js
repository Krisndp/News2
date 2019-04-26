import React from 'react';
import { View, Text, Dimensions, TextInput, Image, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
import { search } from '../../redux/action/actionCreator';
import Item from './Item';
import { updateWatchedNews, querryAll, insertRecentlyRead } from '../../realmDB/allShema';
import { getDataSavedFromRealm, getDataFromRealm } from '../../redux/action/actionCreator';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    Search = async () => {
        let text = this.state.text.toLowerCase();
        console.log(text);
        let list = this.props.allNewsReducer;
        if (text != '') {
            let filterSearch = list.filter((data) => {
                return data.title.toLowerCase().match(text) || data.subtitle.toLowerCase().match(text);
            })
            console.log(filterSearch);
            this.props.search(filterSearch)
        } else {
            let filterSearch = [];
            this.props.search(filterSearch)
        }
    }

    addToRealm = async (item) => {
        const RealmDataRecently = this.props.RealmDataRecently;
        for (var i of RealmDataRecently) {
            if (item.links == i.links) {
                var alived = true;
                const NewsUpdate = {
                    id: i.id,
                    published: new Date()
                };
                updateWatchedNews(NewsUpdate)
                    .then(querryAll().then(allNewsList => {
                        const NewsSort = allNewsList.sort(function (a, b) { return b.published - a.published });
                        this.props.getDataFromRealm(NewsSort)
                    })).catch(e => console.log(e))
                break;
            }
        }
        if (alived == null) {
            const recentlyRead = {
                id: Math.floor(Date.now() / 1000),
                title: item.title,
                illustration: item.illustration,
                links: item.links,
                subtitle: item.subtitle,
                published: new Date(),
            }
            insertRecentlyRead(recentlyRead)
                .then(querryAll().then(allNewsList => {
                    const NewsSort = allNewsList.sort(function (a, b) { return b.published - a.published });
                    this.props.getDataFromRealm(NewsSort)
                }))
                .catch(e => alert(e))
        } else { }
    }

    render() {
        const light = this.props.light;
        const colorText = light ? 'white' : 'black';
        const backgroundColor = light ? "#170B3B" : 'white';
        const tintIconColor = light ? 'white' : 'black';
        const borderColorT = light ? 'white' : 'black';
        const placeholderColor = light ? 'white' : 'black';
        return (
            <View style={{ flex: 1, backgroundColor }}>
                <View style={{ width, height: width / 7, flexDirection: 'row' }}>
                    <View style={{ flex: 6, borderColor: borderColorT, borderRadius: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 10 }}>
                        <TextInput
                            value={this.state.text}
                            placeholder={`Tìm kiếm trong ${this.props.nameTopic}`}
                            onChangeText={(text) => this.setState({ text })}
                            placeholderTextColor = {placeholderColor}
                            style={{ paddingLeft: 20, paddingTop: -5, justifyContent: 'center', alignItems: 'center', color: colorText, fontSize: width / 25, marginHorizontal: 10, flex: 7 }}
                        />
                        <TouchableOpacity onPress={() => { this.Search(), Keyboard.dismiss() }} style={{ flex: 1 }}>
                            <Image source={{ uri: "https://img.icons8.com/material-rounded/96/000000/search.png" }} style={{ width: 25, height: 25, tintColor: tintIconColor }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'blue', fontSize: width / 22 }}>Hủy</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width, height: height - width / 7, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={this.props.SearchReducer}
                        renderItem={({ item }) => <Item item={item} goToDetail={() => { this.props.navigation.navigate('Detail', { item }), this.addToRealm(item) }} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        )
    }
}
function MapSTP(state) {
    //alert(state.SearchReducer)
    return {
        RealmDataRecently: state.RealmDataRecently,
        RealmDataSaved: state.RealmDataSaved,
        SearchReducer: state.SearchReducer,
        allNewsReducer: state.allNewsReducer,
        nameTopic: state.categoriesNewsReducer.choosedTopic[0].nameTopic,
        light: state.changeLightReducer.light
    }
}
export default connect(MapSTP, { search, getDataSavedFromRealm, getDataFromRealm })(Search)