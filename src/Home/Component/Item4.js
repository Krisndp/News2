import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux';

class Part4 extends React.Component {

    render() {
        const borderBottomColor = this.props.light ? 'white' : 'black';
        const colorText = this.props.light ? 'white' : 'black';
        return (
            <View style={[styles.container,{borderBottomColor}]}>
                <View style={styles.component1}>
                    <Image style={styles.image} source={{ uri: this.props.icon }} />
                </View>
                <View style={styles.component2}>
                    <Text style={[styles.text,{color:colorText}]}>{this.props.title}</Text>
                </View>
                {this.props.right}
            </View>
        )
    }
}
function mapSTP(state) {
    return { light: state.changeLightReducer.light }
}

export default connect(mapSTP)(Part4);

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
        fontSize: 15
    },
    component31:{
        justifyContent:'center',
        alignItems:'center'
    }

})