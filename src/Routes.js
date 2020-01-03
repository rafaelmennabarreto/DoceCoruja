import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/login';
import Splash from './pages/splash';
import HomeRoute from './pages/home/homeRoutes';

const Route = createAppContainer(
  createSwitchNavigator({
    Splash: Splash,
    Login: Login,
    Home: HomeRoute,
  }),
);

export default Route;
