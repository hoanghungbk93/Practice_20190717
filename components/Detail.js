import React, {Component} from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {connect} from 'react-redux'


class Detail extends Component
{
  static navigationOptions = {
    drawerLabel: 'Detail',
    drawerIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="details"
        color="red"
        size={25}
      />
    ),
  }
  constructor(props)
  {
    super(props)
    this.openDrawer = this.openDrawer.bind(this)
    this.state = {
      content : ''
    }
  }
  openDrawer()
  {
    this.props.navigation.openDrawer()
  }
  render()
  {
    const {navigation} = this.props
    const index = navigation.getParam('index')
    return(
        <View
        style = {{
              flex : 1,
              flexDirection : 'column', 
              alignItems : 'flex-start', 
              justifyContent : 'flex-start', 
              backgroundColor : '#534C9C',
          }}
        >
        <View style = {{
                    height : 70,
                    flexDirection : 'row', 
                    alignItems : 'flex-start', 
                    justifyContent : 'flex-start', 
                    backgroundColor : '#534C9C',
                    marginTop : 30
                }}
            >
                <TouchableOpacity style ={{marginRight : 20, marginLeft : 20}}
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
            
                  }}
                >
                  Detail
                </Text>
                
          </View>
                <Text style = {{
                    fontSize : 30,
                    color : 'white',
                    marginLeft : 20,
                    fontWeight : 'bold'
                  }}>
                  {this.props.data[index].title.charAt(0).toUpperCase() + this.props.data[index].title.slice(1)}
                </Text>
                <Text style = {{
                    fontSize : 25,
                    color : 'white',
                    marginLeft : 20,
                    marginTop : 20
                  }}>
                  {this.props.data[index].body.charAt(0).toUpperCase() + this.props.data[index].body.slice(1)}
                </Text>
          </View>
    )
  }
}
const mapStateToProps = (state) =>
{
    return{
        data : state.fetchReducer.data
    }
}
export default  connect(mapStateToProps)(Detail)