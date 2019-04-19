import store from './redux/store/store';
import { Provider } from 'react-redux';
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window');
import AppNavigator from './src/AppNavigator';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      
    );
  }
}