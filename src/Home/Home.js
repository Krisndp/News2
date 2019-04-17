import React from 'react';
import { View, Text, Alert, StyleSheet, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window')
import Part1 from './Component/Part1';
import Part2 from './Component/Part2';
import Part3 from './Component/Part3';
import Part4 from './Component/Part4';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.component}>
                    <Part1 />
                    <Part2 />
                    <Part3 />
                    <Part4 />
                </View>
            </View>
        )
    }
}

export default connect()(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    component: {
        flex: 1,
        margin: 20,
        flexDirection: 'column'
    },


})