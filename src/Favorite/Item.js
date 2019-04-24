import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');

class Item extends React.Component {

    Prepare = (item) => {
        const RealmDataFavorite = this.props.RealmDataFavorite;
        for (var i of RealmDataFavorite) {
            if (i.id == item.id) {
                var alived = true;
                return true
            }
        }
        if (alived == null) {
            return false
        }
    }
    render() {
        const item = this.props.item;
        const colorText = this.Prepare(item) ? 'red' : 'black';
        return (
            <TouchableOpacity onPress={this.props.toggleFavorite} style={{ height: width / 6, justifyContent: 'center', alignItems: 'center', width }}>
                <Text style={{ color: colorText, fontSize: width / 20, fontWeight: '600' }}>{item.nameTopic}</Text>
            </TouchableOpacity>
        )
    }
}
function MapSTP(state) {
    return {
        RealmDataFavorite: state.RealmDataFavorite,
    }
}
export default connect(MapSTP)(Item)