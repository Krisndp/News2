import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Setting from './Setting/Setting';
import WebViewDetail from './WebView/WebView';
import Drawer from './Drawer/Drawer';
import React from 'react';
import { Dimensions } from 'react-native';
import ConnectHistory from './ConnectHistory/ConnectHistory';
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
  }
}, {
    initialRouteName: 'ConnectHistory',
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