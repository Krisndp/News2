import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

class Header extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', margin: 5, borderBottomColor: 'black', borderBottomWidth: 0.8, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity onPress = {this.props.backToSetting} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} source={{ uri: "https://img.icons8.com/ios/50/000000/less-than.png" }} />
                </TouchableOpacity>
                <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: width / 20 }}>XEM GAN DAY</Text>
                </View>
                <TouchableOpacity onPress = {this.props.delete} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} source={{ uri: "https://img.icons8.com/material-outlined/24/000000/trash.png" }} />
                </TouchableOpacity>
            </View>
        )
    }
}
export default Header