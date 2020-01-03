import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Main from './main';

export const HomeRoutes = createDrawerNavigator({
  Main: {screen: Main},
});

export default createAppContainer(HomeRoutes);
