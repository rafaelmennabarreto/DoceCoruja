import {createStackNavigator} from 'react-navigation-stack';

import Clientes from './index';
import CadastrarClientes from './cadastrarClientes';

const ClientesRoute = createStackNavigator(
  {
    ClienteMain: {screen: Clientes},
    CadastrarCliente: {screen: CadastrarClientes},
  },
  {
    initialRouteName: 'ClienteMain',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default ClientesRoute;
