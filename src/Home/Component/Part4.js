import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, Switch, Alert } from 'react-native';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux';
import Item4 from './Item4';
//import { change_light } from '...\redux/action/actionCreator'

class Part4 extends React.Component {
    constructor(props) {
        super(props);

    }

    right1 = () => {
        return (
            <View style={styles.component3}>
                <Text style={[styles.text, { marginRight: 3 }]}>English</Text>
                <View style={styles.component31}>
                    <Image style={styles.image} source={{ uri: 'https://img.icons8.com/ios/50/000000/expand-arrow-filled.png' }} />
                </View>
            </View>

        )
    }

    right2 = () => {
        return (
            <View style={styles.component3}>
                <Switch
                    style={{}}
                // onValueChange={() => this.}
                // value={this.props.changeLightReducer.notification} 
                />
            </View>
        )
    }

    right3 = () => {
        return (
            <View style={styles.component3}>
                <Switch
                    style={{}}
                    onValueChange={() => this.change_light}
                    value={this.props.changeLightReducer.notification}
                />
            </View>
        )
    }

    right4 = () => {
        return (
            <View style={styles.component3}>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Item4
                    title={'Language'}
                    icon={'https://img.icons8.com/ios-glyphs/30/000000/give-way.png'}
                    right={this.right1()}
                />
                <Item4
                    title={'Notifications'}
                    icon={'https://img.icons8.com/windows/32/000000/appointment-reminders.png'}
                    right={this.right2()}
                />
                <Item4
                    title={'Darkmode'}
                    icon={'https://img.icons8.com/windows/64/000000/sun.png'}
                    right={this.right3()}
                />
                <Item4
                    title={'Help & Support'}
                    icon={'https://img.icons8.com/ios/50/000000/help.png'}
                    right={this.right4()}
                />
            </View>
        )
    }
}
function mapSTP(state) {
    alert(JSON.stringify(state.changeLightReducer))
    return { changeLightReducer: state.changeLightReducer }
}

export default connect(mapSTP)(Part4);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        //alignItems:'center',
        marginTop: 5,
        flexDirection: 'column',
    },
    image: {
        width: 15,
        height: 15,
    },
    component3: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'grey',
        fontSize: 15
    },
    component31: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})