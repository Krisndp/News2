import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux';

class Part4 extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.component1}>
                    <Image style={styles.image} source={{ uri: this.props.icon }} />
                </View>
                <View style={styles.component2}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
                {this.props.right}
            </View>
        )
    }
}

export default connect()(Part4);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems:'center',
        flexDirection: 'row',
    },
    component1: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 15,
        height: 15,
        tintColor:'green'
    },
    component2: {
        flex: 6,
        justifyContent: 'center',
    },
    component3: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'black',
        fontSize: 15
    },
    component31:{
        justifyContent:'center',
        alignItems:'center'
    }

})