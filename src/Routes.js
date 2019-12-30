import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/login';
import Home from './pages/home/main';
import Splash from './pages/splash';

const Route = createAppContainer(
  createSwitchNavigator({
    Splash: Splash,
    Login: Login,
    Home: Home,
  }),
);

export default Route;
