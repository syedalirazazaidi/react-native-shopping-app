/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {makeServer} from './src/app/api/mockup';
makeServer();
AppRegistry.registerComponent(appName, () => App);