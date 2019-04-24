import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Animated, Platform, StatusBar, RefreshControl, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
import Item from './Component/Item';
const HEADER_MAX_HEIGHT = height * 0.6;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 85;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            refreshing: false,
        };
    }

    componentWillMount = () => {
        //this.getInfoNews(this.props.navigation.navigate('item').links)
    }

    render() {
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });
        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });
        const titleOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 1, 1],
            extrapolate: 'clamp',
        });
        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 1, 1],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });
        const item = this.props.navigation.getParam('item');
        const backgroundColor = this.props.light ? "#170B3B" : 'white';
        const backgroundColorHeader = this.props.light ? 'white' : "#170B3B";
        const colorT = this.props.light ? 'black' : 'white';
        const tintColorT = this.props.light ? 'black' : 'white';
        return (
            <View style={[styles.container, { backgroundColor }]}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />
                <Animated.ScrollView
                    style={[styles.container]}
                    scrollEventThrottle={1}
                    contentInset={{ top: HEADER_MAX_HEIGHT, }}
                    contentOffset={{ y: -HEADER_MAX_HEIGHT, }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            progressViewOffset={HEADER_MAX_HEIGHT}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                setTimeout(() => this.setState({ refreshing: false }), 500);
                            }}
                        />
                    }
                >
                    <Item item={item} />
                </Animated.ScrollView>
                <Animated.View
                    pointerEvents="none"
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] },
                        { backgroundColor: backgroundColorHeader }
                    ]}>
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                        ]}
                        source={{ uri: item.illustration }}>
                    </Animated.Image>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.bar,
                        {
                            transform: [
                                { scale: titleScale },
                                { translateX: titleTranslate },
                            ],
                            opacity: titleOpacity,
                        },
                    ]}
                >
                    <View style={styles.viewHeader}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop()} style={styles.backToHome}>
                            <Image source={{ uri: "https://img.icons8.com/ios/50/000000/less-than.png" }} style={[styles.image, { tintColor: tintColorT }]} />
                        </TouchableOpacity>
                        <View style={styles.titleView}>
                            <Text numberOfLines={1} style={[styles.title, { color: colorT }]}>{item.title}</Text>
                        </View>
                        <View style={styles.viewIcon}>
                            <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/share-rounded.png" }} style={[styles.image, { tintColor: tintColorT }]} />
                            <Image source={{ uri: "https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon.png" }} style={[styles.image, { tintColor: tintColorT }]} />
                        </View>
                    </View>
                </Animated.View>
            </View >
        )
    }
}

function mapSTP(state) {
    return {
        light: state.changeLightReducer.light,
    }
}

export default connect(mapSTP)(Detail)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        resizeMode: 'cover',
        flex: 6,
        width: width,
        height: height * 0.6,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 60
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        padding: 10
    },
    title: {
        backgroundColor: 'transparent',
        color: '#A4A4A4',
        fontSize: 22,
    },
    image: {
        width: 20,
        height: 20,
        tintColor: '#A4A4A4',
        marginRight: 10
    },
    viewHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    backToHome: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 5
    },
    titleView: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewIcon: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    }
})