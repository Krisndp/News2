import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux';

class Part1 extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Preferences</Text>
            </View>
        )
    }
}

export default connect()(Part1);

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        justifyContent: 'center',
        //alignItems:'center',
        marginTop:5
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontWeight: '500'
    }
})