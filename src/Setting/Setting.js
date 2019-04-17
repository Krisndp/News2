import React from 'react';
import { View, Text, Alert, Image, StyleSheet, Dimensions, TouchableOpacity, Touc } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import Header from './Component/Header';
const { width, height } = Dimensions.get('window');
const urlTriagle = "https://img.icons8.com/cotton/64/000000/warning-triangle.png";

class Setting extends React.Component {

    renderItem({ item, index }, parallaxProps) {
        //alert(JSON.stringify(item))
        return (
            <View style={styles.carouselView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', { item: item })} style={styles.carouselView}>
                    <Image
                        source={{ uri: item.illustration }}
                        containerStyle={styles.containerStyle}
                        style={styles.containerStyle}
                    // parallaxFactor={0.4}
                    // {...parallaxProps}

                    />
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
                        <Text numberOfLines={4} style={[styles.text, {color:'black'}]}>{item.subtitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Header setting={() => this.props.navigation.navigate('Home')} />
                <View style={styles.main}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.allNewsReducer}
                        renderItem={(item) => this.renderItem(item)}
                        sliderWidth={width}
                        itemWidth={0.8 * width}
                        sliderHeight={0.7 * height}
                        itemHeight={0.6 * height}
                        layout={'default'}
                        hasParallaxImages={true}
                    />
                </View>
            </View>
        )
    }
}
function mapSTP(state) {
    //alert(JSON.stringify(state));
    return { allNewsReducer: state.allNewsReducer }
}

export default connect(mapSTP)(Setting)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        //       backgroundColor:'#0A0A2A'
    },
    main: {
        flex: 9
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
    }
})