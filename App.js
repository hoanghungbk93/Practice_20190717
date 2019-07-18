import React, {Component}from "react";
import { View, Text, TouchableOpacity, Dimensions} from "react-native";
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from "react-navigation";
import Home from './components/Home'
import Icon from "react-native-vector-icons/Entypo"
import Authentication from './components/Authentication'

class Detail extends Component
{
  constructor(props)
  {
    super(props)
    this.openDrawer = this.openDrawer.bind(this)
  }
  openDrawer()
  {
    this.props.navigation.openDrawer()
  }
  render()
  {
    return(
        <View style = {{
                    flex : 1,
                    flexDirection : 'row', 
                    alignItems : 'flex-start', 
                    justifyContent : 'flex-start', 
                    backgroundColor : '#534C9C',
                }}
            >
                <TouchableOpacity style ={{marginRight : 20, marginLeft : 20, marginTop : 70}}
                    onPress = {()=> {this.openDrawer()}}
                >
                <Icon
                    name="menu"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>          
                <Text style = {{
                    fontSize : 25,
                    color : 'white',
                    marginTop : 70
                  }}
                >
                  Detail
                </Text>
          </View>
    )
  }
}
const DrawerStack = createDrawerNavigator(
  {
    home : Home,
    detail : Detail
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