import {createStackNavigator} from 'react-navigation-stack';

import Estabelecimento from './index';
import CadastrarEstabelecimentos from './CadastrarEstabelecimento';

const EstabelecimentoRoutes = createStackNavigator(
  {
    EstabelecimentoMain: {screen: Estabelecimento},
    CadastrarEstabelecimentos: {screen: CadastrarEstabelecimentos},
  },
  {
    initialRouteName: 'EstabelecimentoMain',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default EstabelecimentoRoutes;
