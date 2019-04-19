import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux';

class Part1 extends React.Component {

    render() {
        const borderBottomColor = this.props.light ? 'white' : 'black';
        const color = this.props.light ? 'white' : 'black';
        return (
            <View style={[styles.container,{borderBottomColor}]}>
                <Text onPress={this.props.onPress} style={[styles.text,{color}]}>Preferences</Text>
            </View>
        )
    }
}
function mapSTP(state) {
    //alert(JSON.stringify(state.changeLightReducer))
    return { light: state.changeLightReducer.light }
}
export default connect(mapSTP)(Part1);

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        borderBottomWidth: 1,
        justifyContent: 'center',
        //alignItems:'center',
        marginTop:5
    },
    text: {
        fontSize: 25,
        fontWeight: '500'
    }
})