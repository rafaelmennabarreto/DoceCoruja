import {createStackNavigator} from 'react-navigation-stack';

import Caixa from './index';
import CadastrarVendas from '~/pages/home/pendencias/cadastrarVenda';

const CaixaRoutes = createStackNavigator(
  {
    CaixaMain: {screen: Caixa},
    CaixaCadastrarVenda: {screen: CadastrarVendas},
  },
  {
    initialRouteName: 'CaixaMain',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default CaixaRoutes;
