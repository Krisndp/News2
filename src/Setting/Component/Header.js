import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
const urlSetting = "https://img.icons8.com/ios/50/000000/settings.png";
const urlMenu = "https://img.icons8.com/ios/50/000000/menu-filled.png";
export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.view1}>
                    <Image source={{ uri: urlMenu }} style={styles.image} />
                </View>

                <View style={styles.view2}>
                    <Text style={styles.text}>All News</Text>
                </View>
                <View style={styles.view1}>
                    <TouchableOpacity onPress={this.props.setting} style={styles.view1}>
                        <Image source={{ uri: urlSetting }} style={styles.image} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    view1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 30,
        height: 30,
        tintColor: 'black'
    },
    text: {
        color: 'black',
        fontSize: 20
    }
})