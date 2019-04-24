import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { getDataFavoriteFromRealm } from '../../redux/action/actionCreator';
import { querryAllFavorite, deleteAllFavorite, deleteNewsFavorite, insertNewsToFavorite } from '../../realmDB/FavoriteNewsSchema';
import { connect } from 'react-redux';
import Item from './Item';
const { width, height } = Dimensions.get('window');

class Favorite extends React.Component {

    componentWillMount = () => {
        querryAllFavorite()
            .then(NewsFavorite => this.props.getDataFavoriteFromRealm(NewsFavorite))
            .catch(e => console.log(e))
    }

    toggleFavorite = (item) => {
        const RealmDataFavorite = this.props.RealmDataFavorite;
        for (var i of RealmDataFavorite) {
            if (item.id == i.id) {
                var alived = true;
                deleteNewsFavorite(i.id)
                    .then(
                        querryAllFavorite()
                            .then(NewsFavorite => this.props.getDataFavoriteFromRealm(NewsFavorite))
                            .catch(e => console.log(e))
                    )
                    .catch(e => console.log(e))
                break;
            }
        }
        if (alived == null) {
            const NewsFavoriteCurently = {
                id: item.id,
                nameTopic: item.nameTopic,
                links: item.link,
            }
            insertNewsToFavorite(NewsFavoriteCurently)
                .then(
                    querryAllFavorite()
                        .then(NewsFavorite => this.props.getDataFavoriteFromRealm(NewsFavorite))
                        .catch(e => console.log(e))
                )
                .catch(e => alert(e))
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: width / 22 }}>Yêu thích</Text>
                </View>
                <View style={{ flex: 12 }}>
                    <FlatList
                        data={this.props.allTopic}
                        renderItem={({ item }) => <Item toggleFavorite={() => this.toggleFavorite(item)} item={item} />}
                        keyExtractor = {(item) => item.id}
                    />
                </View>
            </View>
        )
    }
}
function MapSTP(state) {
    return {
        RealmDataFavorite: state.RealmDataFavorite,
        allTopic: state.categoriesNewsReducer.allTopic
    }
}
export default connect(MapSTP, { getDataFavoriteFromRealm })(Favorite);