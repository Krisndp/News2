import React from 'react';
import { View, Image, ImageBackground, Text, Alert, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
const urlTriagle = "https://img.icons8.com/cotton/64/000000/warning-triangle.png";
const { width, height } = Dimensions.get('window');

class Item extends React.Component {

    render() {
        const item = this.props.item;
        const colorT = this.props.light ? 'white' : 'black';
        const backgroundColor = this.props.light ? "#170B3B" : 'white';

        return (
                <View style={{ padding: 40, marginTop: 0.6*height, paddingTop:10 }}>
                    <View style={styles.viewTotal}>
                        <View style={styles.view1}>
                            <Image source={{ uri: urlTriagle }} style={[styles.icon]} />
                        </View>
                        <View style={styles.view2}>
                            <Text style={{ color: '#848484' }}>The Vergel</Text>
                        </View>
                        <View style={styles.view3}>
                            <Text style={{ color: '#848484' }}>2h ago</Text>
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <Text style={[styles.title, { color: colorT }]}>{item.title}</Text>
                    </View>
                    <View style={styles.view5}>
                        <Text onPress={this.props.onPress} style={[styles.text, { color: colorT }]}>{item.news}</Text>
                    </View>
                </View>
        )
    }
}
function mapSTP(state) {
    return {
        light: state.changeLightReducer.light
    }
}

export default connect(mapSTP)(Item)

const styles = StyleSheet.create({
    image: {
        width: width / 14,
        height: width / 14,
        tintColor: 'white',
        marginRight: 20
    },
    viewTotal: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1
    },
    icon: {
        width: 20,
        height: 20
    },
    view1: {
        flex: 1,
        justifyContent: 'center'
    },
    view2: {
        flex: 6,
        justifyContent: 'center'
    },
    view3: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    view4: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    view5: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 17,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
})