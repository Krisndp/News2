import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
const urlSetting = "https://img.icons8.com/ios/50/000000/settings.png";
const urlMenu = "https://img.icons8.com/ios/50/000000/menu-filled.png";
class Header extends React.Component {

    componentWillMount = () => {
    }

    render() {
        //alert(JSON.stringify(itemChoose));
        const colorT = this.props.light ? 'white' : 'black';
        const tintColorT = this.props.light ? 'white' : 'black';
        return (
            <View style={styles.header}>
                <View style={styles.view1}>
                    <TouchableOpacity onPress={this.props.drawer} style={styles.view1}>
                        <Image source={{ uri: urlMenu }} style={[styles.image, { tintColor: tintColorT }]} />
                    </TouchableOpacity>
                </View>

                <View style={styles.view2}>
                    <Text style={[styles.text, { color: colorT }]}>{this.props.nameTopic}</Text>
                </View>
                <View style={styles.view1}>
                    <TouchableOpacity onPress={this.props.setting} style={styles.view1}>
                        <Image source={{ uri: urlSetting }} style={[styles.image, { tintColor: tintColorT }]} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
function mapSTP(state) {
    //alert(JSON.stringify(state.categoriesNewsReducer))
    return {
        nameTopic :state.categoriesNewsReducer.choosedTopic[0].nameTopic,
        light: state.changeLightReducer.light,
    }
}
export default connect(mapSTP)(Header)
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent:'center',
        alignItems:'center'
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
        width: 20,
        height: 20,
        tintColor: 'black'
    },
    text: {
        color: 'black',
        fontSize: 20
    }
})