import {createStackNavigator} from 'react-navigation-stack';

import Estabelecimento from './index';

const estabelecimentoRoutes = createStackNavigator(
  {
    EstabelecimentoMain: Estabelecimento,
  },
  {
    initialRouteName: 'EstabelecimentoMain',
    defaultNavigationOptions: {header: null},
  },
);
