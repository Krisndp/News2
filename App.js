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
    this.state = {
      entries: [
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
          title: 'Earlier this morning, NYC',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
        {
          title: 'White Pocket Sunset',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
          illustration: 'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
          title: 'Acrocorinth, Greece',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
        },
        {
          title: 'The lone tree, majestic landscape of New Zealand',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
          title: 'Middle Earth, Germany',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/lceHsT6l.jpg'
        }
      ],
    }
  }

  

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      
    );
  }
}