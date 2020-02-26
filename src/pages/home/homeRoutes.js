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
import EstabelecimentoRoute from './estabelecimentos/estabelecimentosRoute';
import ClientesRoute from './clientes/clientsRoute';
import Caixa from './caixa';
import PendenciasRoute from './pendencias/pendenciasRoute';

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
      screen: EstabelecimentoRoute,
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
      screen: ClientesRoute,
      navigationOptions: {
        drawerIcon: DrawerClients,
      },
    },
    Pendencias: {
      screen: PendenciasRoute,
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
