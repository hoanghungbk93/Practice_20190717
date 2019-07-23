import React, {Component} from "react";
import { createAppContainer, createSwitchNavigator, createDrawerNavigator} from "react-navigation";
import Home from './components/Home'
import Detail from './components/Detail'
import Authentication from './components/Authentication'


const DrawerStack = createDrawerNavigator(
  {
    home : Home,
    detail : Detail,
    logout : Authentication
  },
  {
    drawerPosition : "left"
  }
)
const AppContainer = createAppContainer(createSwitchNavigator(
  {
    home: DrawerStack,
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

