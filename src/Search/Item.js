import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
class Item extends React.Component {

    render() {
        const item = this.props.item;
        const light = this.props.light;
        const colorText = light ? 'white' : 'black';
        const backgroundColor = light ? "#170B3B" : 'white';
        return (
            <TouchableOpacity onPress={this.props.goToDetail} style={[styles.container, { backgroundColor }]}>
                <View style={styles.ViewTitle}>
                    <Text numberOfLines={2} style={[styles.TextTitle, { color: colorText }]}>{item.title}</Text>
                    <Text style={styles.VNtext}>VietNamNet</Text>
                </View>
                <View style={styles.ViewDes}>
                    <View style={styles.ViewImage}>
                        <Image style={[styles.image]} source={{ uri: item.illustration }} />
                    </View>
                    <View style={styles.ViewDescription}>
                        <Text numberOfLines={4} style={[styles.TextDes, { color: colorText }]}>{item.subtitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

function MapSTP(state) {
    return {
        light: state.changeLightReducer.light
    }
}

export default connect(MapSTP)(Item)

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        width,
        height: height / 4.2,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewTitle: {
        flex: 1,
        marginBottom: 5
    },
    TextTitle: {
        color: 'black',
        fontSize: width / 22,
        fontWeight: 'bold'
    },
    VNtext: {
        fontSize: width / 30,
        color: '#848484'
    },
    ViewDes: {
        flex: 2,
        flexDirection: 'row'
    },
    image: {
        width: width * 0.2,
        height: width * 0.2
    },
    ViewImage: {
        flex: 2,
        justifyContent: 'center'
    },
    ViewDescription: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextDes: {
        color: 'black',
        fontSize: width / 26
    }
})