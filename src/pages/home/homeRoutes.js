import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Drawer from '../../components/drawer';

import Main from './main';
import Estabelecimentos from './estabelecimentos';

export const HomeRoutes = createDrawerNavigator(
  {
    Main: {screen: Main, navigationOptions: {drawerLabel: 'Home'}},
    Estabelecimentos: {screen: Estabelecimentos},
  },
  {
    contentComponent: Drawer,
  },
);

export default createAppContainer(HomeRoutes);
