import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');

class FlatlistItem extends React.Component {

    choosed = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 20, height: 20 }} source={{ uri: "https://img.icons8.com/ios/50/000000/checkmark.png" }} />
            </View>
        )
    }
    render() {
        const item = this.props.item;
        const colorText = this.props.light ? 'white' : 'black';
        return (
            <View style={{ margin: 10, flexDirection: 'row', borderLeftColor: item.color, borderLeftWidth: 3 }}>
                <TouchableOpacity onPress={this.props.onPress} style={{ flex: 9, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={{ margin: 10, color: colorText, fontSize: width / 25 }}>{item.nameTopic}</Text>
                </TouchableOpacity>
                {item.onClick ? this.choosed() : <View style={{ flex: 1 }} />}
            </View>
        )
    }
}
function mapSTP(state) {
    return {
        light: state.changeLightReducer.light
    }
}
export default connect(mapSTP)(FlatlistItem)