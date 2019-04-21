import React from 'react';
import { View, Dimensions, ScrollView, Text, FlatList } from 'react-native';
import axios from 'axios';
import cheerio from 'react-native-cheerio';
import { connect } from 'react-redux';
import FlatlistItem from './component/FlatlistItem';
import {change_choose_topic, get_all_news} from '../../redux/action/actionCreator';
const { width, height } = Dimensions.get('window');

class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    onPress = async (id) => {
        await this.props.change_choose_topic(id);
        this.props.navigation.toggleDrawer();
        this.props.get_all_news(this.props.categoriesNewsReducer.choosedTopic[0].link);
        //this.props.navigation.push('Setting')
    }
    render() {
        const allTopic = this.props.categoriesNewsReducer.allTopic;
        return (
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50, }}>
                <FlatList
                    data={allTopic}
                    renderItem={({ item, index }) => <FlatlistItem onPress={() => this.onPress(item.id)} item={item}/>}
                    keyExtractor = {item=> item.id}
                />
            </View>
        )
    }
}
function mapSTP(state) {
    //alert(JSON.stringify(state.categoriesNewsReducer.choosedTopic[0].link,));
    return { 
        categoriesNewsReducer: state.categoriesNewsReducer,
        //linkNewsTopic: state.categoriesNewsReducer.choosedTopic[0].link,
     }
}
export default connect(mapSTP,{change_choose_topic,get_all_news})(Drawer)