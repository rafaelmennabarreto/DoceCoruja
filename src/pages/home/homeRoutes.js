import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Drawer from '../../components/drawer';
import {
  DrawerHome,
  DrawerEstabelecimento,
  DrawerCaixa,
  DrawerClients,
  DrawerPendencias,
} from '../../Icons';

import Main from './main';
import Estabelecimentos from './estabelecimentos';
import Caixa from './caixa';
import Clientes from './clientes';
import Pendencias from './pendencias';

export const HomeRoutes = createDrawerNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        drawerLabel: 'Pagina inicial',
        drawerIcon: DrawerHome,
      },
    },
    Estabelecimentos: {
      screen: Estabelecimentos,
      navigationOptions: {
        drawerIcon: DrawerEstabelecimento,
      },
    },
    Caixa: {
      screen: Caixa,
      navigationOptions: {
        drawerIcon: DrawerCaixa,
      },
    },
    Clientes: {
      screen: Clientes,
      navigationOptions: {
        drawerIcon: DrawerClients,
      },
    },
    Pendencias: {
      screen: Pendencias,
      navigationOptions: {
        drawerIcon: DrawerPendencias,
      },
    },
  },
  {
    contentComponent: Drawer,
    resetOnBlur: true,
  },
);

export default createAppContainer(HomeRoutes);
