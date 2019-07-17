/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Authentication from './components/Authentication'
import Home from './components/Home'
AppRegistry.registerComponent(appName, () => Home);
