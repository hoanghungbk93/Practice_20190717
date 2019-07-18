import React ,{Component} from 'react'
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, Keyboard,
    Image, FlatList} from 'react-native'
import Icon from "react-native-vector-icons/Entypo";
import Ic from 'react-native-vector-icons/Ionicons'
import Ic1 from 'react-native-vector-icons/MaterialCommunityIcons'
screenHeight = Dimensions.get('window').height
screenWidth = Dimensions.get('window').width
class MyListItem extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <View style = {{width : screenWidth/4, 
                            height : screenWidth/4, 
                            backgroundColor : "white",
                            marginRight : 10, 
                            marginLeft : 20, 
                            marginTop : 20,
                            alignItems : 'center', 
                            justifyContent : 'center',
                            borderRadius : 10
            }}>
            <TouchableOpacity style ={{}}>
            <Ic1
                name={this.props.icon.name}
                color={this.props.icon.color}
                size={25}
                />
            </TouchableOpacity>
            </View>
        )
    }
}
export default class Home extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            userEmail : ''
        }
    }
    renderTop()
    {
        return(
            <View style = {{flexDirection : 'row', 
                    marginTop : 70, 
                    alignItems : 'baseline', 
                    justifyContent : 'flex-start', 
                    backgroundColor : '#534C9C',
                    height : screenHeight / 4
                }}
            >
                <TouchableOpacity style ={{marginRight : 20, marginLeft : 20}}>
                <Icon
                    name="menu"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>
                
                <Text style = {{
                    fontSize : 25,
                    color : 'white'
                }}>
                    Home Page
                </Text>
                <TouchableOpacity style ={{marginRight : 20, marginLeft : 70}}>
                <Ic
                    name="ios-notifications-outline"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity style ={{marginRight : 20, marginLeft : 20}}>
                <Ic
                    name="ios-person"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity style ={{marginRight : 20, marginLeft : 20}}>
                <Ic
                    name="md-settings"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    renderMidler()
    {
        const iconList = [{name : "email", color : "#BFD3BB"},
                          {name : "email-alert", color : "#BAE3EA"},
                          {name : "email-box", color : "#FCE8AB"},
                          {name : "email-check", color : '#EFC0CE'},
                          {name : "email-box", color : "#FCE8AB"},
                          {name : "email-check", color : '#EFC0CE'}]
        return(
            <FlatList
                style = {{

                }}
                data = {iconList}
                renderItem = {({item, index}) =>
                (
                    <MyListItem icon = {item}>

                    </MyListItem>
                )
                
                }
                numColumns = {3}
            >

            </FlatList>
        )
    }
    render()
    {
        return(
            <View style = {{flex : 1}}>
                {this.renderTop()}
                <View style = {{flexDirection : 'row', backgroundColor : "#F9F7FF", height : screenHeight / 3, alignItems : 'center', justifyContent : 'center'}}>
                    {this.renderMidler()}
                </View>
                
            </View>
        )
    }
}