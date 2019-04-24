import React from 'react';
import {View } from 'react-native';
import { connect } from 'react-redux';
import { getDataFavoriteFromRealm, get_all_news } from '../../redux/action/actionCreator';
import { querryAllFavorite, deleteAllFavorite, deleteNewsFavorite, insertNewsToFavorite } from '../../realmDB/FavoriteNewsSchema';

class AllFavorite extends React.Component{
    componentWillMount = () => {
        querryAllFavorite()
        .then(NewsFavorite => this.props.getDataFavoriteFromRealm(NewsFavorite))
        .catch(e => console.log(e))

    }

    getAllFavoriteNews = () => {
        const RealmDataFavorite = this.props.RealmDataFavorite;
        for (var i of RealmDataFavorite){
            
        }
    }
    render(){
        return(
            <View >
                
            </View>
        )
    }
}
function MapSTP(state) {
    console.log(state.RealmDataFavorite)
    return {
        RealmDataFavorite: state.RealmDataFavorite,
    }
}
export default connect(MapSTP,{getDataFavoriteFromRealm})(AllFavorite)