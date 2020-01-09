/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Route from './src/Routes';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Route />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
