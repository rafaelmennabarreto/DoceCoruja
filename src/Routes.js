import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/login';
import Home from './pages/home/main';

const Route = createAppContainer(
  createSwitchNavigator({
    Login: Login,
    Home: Home,
  }),
);

export default Route;
