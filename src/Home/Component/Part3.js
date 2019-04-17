import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import FlatListItem from './Flatlist';
const { width, height } = Dimensions.get('window');
const showAllImage = "https://img.icons8.com/ios-glyphs/50/000000/chevron-right.png";

class Part3 extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.component1}>
                    <View style={styles.component11}>
                        <Text style={styles.text}>Favorites</Text>
                    </View>
                    <View style={styles.component12}>
                        <Image style={styles.image} source={{ uri: showAllImage }} />
                    </View>
                </View>
                <View style={styles.Component2}>
                    <FlatList
                        data={this.props.favoriteReducer}
                        renderItem={({ item }) =>
                            <FlatListItem
                                item={item}
                                backgroundColor={backgroundColor = 'white'}
                                tintColor={tintColor = 'black'}
                                color={color = 'black'}
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
    return { favoriteReducer: state.favoriteReducer }
}


export default connect(mapSTP)(Part3);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        justifyContent: 'center',
        flexDirection: 'column',
        //alignItems:'center',
        marginTop: 5,
    },
    text: {
        color: 'black',
        fontSize: 18
    },
    component1: {
        flex: 1,
        flexDirection: 'row'
    },
    Component2: {
        flex: 3,
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