import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// Import do Provider
import { Provider } from 'react-redux';

// Configuração dos stores
import store from './src/store';

// Rotas
import Routes from './src/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App);
