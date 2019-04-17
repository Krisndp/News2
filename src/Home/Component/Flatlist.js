import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class FlatlistItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const item = this.props.item;
        const backgroundColor = this.props.backgroundColor;
        const color = this.props.color;
        const tintColor = this.props.tintColor;
        //alert(JSON.stringify(item));
        return (
            <View style={[styles.container, {backgroundColor }]}>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <View style={styles.view2}>
                        <Image source={{ uri: item.image }} style={[styles.image, { tintColor }]} />
                    </View>
                    <View style={styles.view1}>
                        <Text style={[styles.text,{color}]}>{item.name}</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}

export default FlatlistItem;


const styles = StyleSheet.create({
    container: {
        width: width / 2.8,
        height: width / 3.5,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#D8D8D8'
    },
    touchableOpacity: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    text: {
        fontSize: 18
    },
    image: {
        width: width / 15,
        height: width / 15,
    },
    view1: {
        justifyContent: 'center',
        flex: 1
    },
    view2: {
        flex: 1,
        justifyContent: 'center'
    }

})
