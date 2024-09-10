/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './app/navigator/AppNavigator';

AppRegistry.registerComponent(appName, () => AppNavigator);
YellowBox.ignoreWarnings(['']);