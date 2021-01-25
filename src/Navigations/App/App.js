import { createStackNavigator } from 'react-navigation-stack';
import Login from '../../screen/Login';
import Home from '../../screen/Home';
import Market from '../../screen/Market';

const NavigatorConfig = {
    initialRouteName: 'login',
    headerMode: 'none',
}

const rootConfig = {
    login: Login,
    home: Home,
    market: Market
}

export default createStackNavigator(rootConfig, NavigatorConfig);