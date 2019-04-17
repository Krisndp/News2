import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window');

export default class Corousel extends React.Component {


    render() {
        const item = this.props.item;
        alert(JSON.stringify(item));
        return (
            <View style={styles.carouselView}>
                <TouchableOpacity onPress={this.props.onPress} style={styles.carouselView}>
                    <Image
                        source={{ uri: item.illustration }}
                        containerStyle={styles.containerStyle}
                        style={styles.containerStyle}
                    // parallaxFactor={0.4}
                    // {...parallaxProps}

                    />
                    <View style={{ flexDirection: 'row', marginTop: 10, flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Image source={{ uri: "https://img.icons8.com/cotton/64/000000/warning-triangle.png" }} style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center' }}>
                            <Text>The Vergel</Text>
                        </View>
                        <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text>2h ago</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
                        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, flex: 4 }}>
                        <Text numberOfLines={4} style={{ fontSize: 17, color: 'gray' }}>{item.subtitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 20
    },
    carouselView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle: {
        width: 0.8 * width,
        height: 0.6 * height,
        marginRight: 0,
        borderRadius: 20,
        flex: 15
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
})