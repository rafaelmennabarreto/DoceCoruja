import {createSwitchNavigator} from 'react-navigation';

import Estabelecimento from './index';

const EstabelecimentoRoutes = createSwitchNavigator(
  {
    EstabelecimentoMain: Estabelecimento,
  },
  {
    initialRouteName: 'EstabelecimentoMain',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default EstabelecimentoRoutes;
