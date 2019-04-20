import { createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Setting from './Setting/Setting';
import WebViewDetail from './WebView/WebView';
import HTMLViews from './HtmlView/HtmlView';


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
  },
  HTMLViews: {
    screen: HTMLViews,
    navigationOptions: ({header: null})
  }
}, {
    initialRouteName: 'Setting',
});

export default createAppContainer(AppNavigator);