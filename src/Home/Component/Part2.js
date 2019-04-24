import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import FlatListItem from './Flatlist';
const { width, height } = Dimensions.get('window');
const showAllImage = "https://img.icons8.com/ios-glyphs/50/000000/chevron-right.png";

class Part2 extends React.Component {

    render() {
        const borderBottomColor = this.props.light ? 'white' : 'black';
        const colorText = this.props.light ? 'white' : 'black';
        const tintColorImage = this.props.light ? 'white' : 'black';
        return (
            <View style={[styles.container,{borderBottomColor}]}>
                <View style={styles.component1}>
                    <View style={styles.component11}>
                        <Text onPress = {this.props.ConnectHistory} style={[styles.text,{color:colorText}]}>Categories</Text>
                    </View>
                    <View style={styles.component12}>
                        <Image style={[styles.image,{tintColor: tintColorImage}]} source={{ uri: showAllImage }} />
                    </View>
                </View>
                <View style={styles.Component2}>
                    <FlatList
                        data={this.props.categoriesReducer.slice(0,3)}
                        renderItem={({ item }) =>
                            <FlatListItem
                                item={item}
                                backgroundColor={backgroundColor = item.id % 2 != 0 ? '#D8D8D8' : "#088A08"}
                                tintColor={tintColor = item.id % 2 != 0 ? 'black' : 'white'}
                                color={color = item.id % 2 != 0 ? 'black' : 'white'}
                            />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
}
function mapSTP(state) {
    //alert(JSON.stringify(state.categoriesReducer));
    return { 
        categoriesReducer: state.categoriesReducer,
        light: state.changeLightReducer.light
    }
}


export default connect(mapSTP)(Part2);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        borderBottomWidth: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        //alignItems:'center',
        marginTop: 5,
    },
    text: {
        fontSize: 18
    },
    component1: {
        flex: 1,
        flexDirection: 'row'
    },
    Component2: {
        flex: 3,
        width,
        marginLeft: -20
    },
    image: {
        width: 20,
        height: 20,
    },
    component11: {
        flex: 9,
        justifyContent: 'center'
    },
    component12: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})