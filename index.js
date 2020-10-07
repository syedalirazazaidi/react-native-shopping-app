/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {makeServer} from './src/app/api/mockup';
import AppMain from './Apps';
import Appss from './Appss';

import {Provider} from 'react-redux';
makeServer();
AppRegistry.registerComponent(appName, () => Appss);
