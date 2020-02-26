import {createStackNavigator} from 'react-navigation-stack';

import Pendencias from './index';
import CadastrarVendas from './cadastrarVenda';

const PendenciaRoutes = createStackNavigator(
  {
    PendenciaMain: {screen: Pendencias},
    CadastrarVenda: {screen: CadastrarVendas},
  },
  {
    initialRouteName: 'PendenciaMain',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default PendenciaRoutes;
