import React from 'react';
import { View, Text, Image, Dimensions,TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import { connect } from 'react-redux';

class Item extends React.Component {

    render() {
        const item = this.props.item;
        return (
            <TouchableOpacity onPress = {this.props.goToDetail} style={{marginBottom:10, width, height: height / 4.2, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, marginBottom:5 }}>
                    <Text numberOfLines={2} style={{ color: 'black', fontSize: width / 22, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontSize: width / 30 }}>VietNamNet</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Image style={{ width: width * 0.2, height: width * 0.2 }} source={{ uri: item.illustration }} />
                    </View>
                    <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center' }}>
                        <Text numberOfLines={4} style={{ color: 'black', fontSize: width / 26 }}>{item.subtitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


function MapSTP(state) {
    //console.log(state.RealmDataRecently)
    return {
        RealmDataRecently: state.RealmDataRecently,
    }
}
export default connect(MapSTP)(Item)