import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/login';

const Route = createAppContainer(
  createSwitchNavigator({
    Login: Login,
  }),
);

export default Route;
