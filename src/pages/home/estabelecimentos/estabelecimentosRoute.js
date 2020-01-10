import {createStackNavigator} from 'react-navigation-stack';

import Estabelecimento from './index';

const EstabelecimentoRoutes = createStackNavigator(
  {
    EstabelecimentoMain: {screen: Estabelecimento},
  },
  {
    initialRouteName: 'EstabelecimentoMain',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default EstabelecimentoRoutes;
