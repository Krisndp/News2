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
        const backgroundColor = this.props.light ? "#170B3B" : 'white';
        return (
            <View style={[styles.container, {backgroundColor:backgroundColor}]}>
                <View style={styles.component}>
                    <Part1 onPress = {()=>this.props.navigation.navigate('Setting')} />
                    <Part2 ConnectHistory = {()=>this.props.navigation.navigate('ConnectHistory')}/>
                    <Part3 goToSaved = {()=> this.props.navigation.navigate('Saved')} />
                    <Part4 />
                </View>
            </View>
        )
    }
}
function mapSTP(state) {
    //alert(JSON.stringify(state.changeLightReducer))
    return { light: state.changeLightReducer.light }
}
export default connect(mapSTP)(Home)

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