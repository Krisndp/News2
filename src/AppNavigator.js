import { createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Setting from './Setting/Setting';
import WebViewDetail from './WebView/WebView';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({header: null})
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({header: null})
  },
  Setting: {
    screen: Setting,
    navigationOptions: ({header: null})
  },
  WebView:{
    screen: WebViewDetail,
    navigationOptions: ({header: null})
  }
}, {
    initialRouteName: 'WebView',
});

export default createAppContainer(AppNavigator);