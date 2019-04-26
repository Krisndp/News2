import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Setting from './Setting/Setting';
import Drawer from './Drawer/Drawer';
import React from 'react';
import { Dimensions } from 'react-native';
import ConnectHistory from './ConnectHistory/ConnectHistory';
import Saved from './Saved/Saved';
import Favorite from './Favorite/Favorite';
import Search from './Search/Search';
const { width } = Dimensions.get('window');


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ header: null })
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ header: null })
  },
  Setting: {
    screen: Setting,
    navigationOptions: ({ header: null })
  },
  ConnectHistory: {
    screen: ConnectHistory,
    navigationOptions: ({ header: null })
  },
  Saved: {
    screen: Saved,
    navigationOptions: ({ header: null })
  },
  Favorite: {
    screen: Favorite,
    navigationOptions: ({ header: null })
  },
  Search: {
    screen: Search,
    navigationOptions: ({ header: null })
  }
}, {
    initialRouteName: 'Setting',
  });


const Drawers = createDrawerNavigator({
  Tabs: {
    screen: AppNavigator
  }
}, {
    drawerWidth: width / 2,
    drawerPosition: 'left',
    contentComponent: props => <Drawer {...props} />
  });
export default createAppContainer(Drawers);