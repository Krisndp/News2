import React from 'react';
import { View, Text, Alert, ImageBackground, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
const urlTriagle = "https://img.icons8.com/cotton/64/000000/warning-triangle.png";

class Detail extends React.Component {

    render() {
        //alert(JSON.stringify(this.props.navigation.getParam('item')));
        const item = this.props.navigation.getParam('item');
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={{ uri: item.illustration }} style={styles.imageBackground}>
                        <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/share-rounded.png" }} style={styles.image} />
                        <Image source={{ uri: "https://img.icons8.com/ios/50/000000/bookmark-ribbon.png" }} style={styles.image} />
                    </ImageBackground>
                    <View style={{ padding: 40 }}>
                        <View style={styles.viewTotal}>
                            <View style={styles.view1}>
                                <Image source={{ uri: urlTriagle }} style={styles.icon} />
                            </View>
                            <View style={styles.view2}>
                                <Text>The Vergel</Text>
                            </View>
                            <View style={styles.view3}>
                                <Text>2h ago</Text>
                            </View>
                        </View>
                        <View style={styles.view4}>
                            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                        </View>
                        <View style={styles.view5}>
                            <Text style={[styles.text, {color:'black'}]}>{item.subtitle}</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}


export default connect()(Detail)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 6,
        width: width,
        height: height * 0.6,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 30
    },
    image: {
        width: width / 14,
        height: width / 14,
        tintColor: 'white',
        marginRight:20
    },
    viewTotal: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1
    },
    icon: {
        width: 20,
        height: 20
    },
    view1: {
        flex: 1,
        justifyContent: 'center'
    },
    view2: {
        flex: 6,
        justifyContent: 'center'
    },
    view3: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    view4: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    view5: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flex: 4
    },
    text: {
        fontSize: 17,
        color: 'gray'
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
})