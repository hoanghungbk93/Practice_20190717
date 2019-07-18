import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createSwitchNavigator} from "react-navigation";
import Home from './components/Home'
import Authentication from './components/Authentication'

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    home: Home,
    authen : Authentication
  },
  {
    initialRouteName: 'authen'
  }
));
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}