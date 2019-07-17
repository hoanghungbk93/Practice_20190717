import React ,{Component} from 'react'
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, Keyboard,
    KeyboardAvoidingView} from 'react-native'
screenWidth = Dimensions.get('window').width
screenHeight = Dimensions.get('window').height
const userName = 'Hung'
const pass = '1234'
export default class Authentication extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        this.onPressLoginButton = this.onPressLoginButton.bind(this)
    }
    componentDidMount(){
        // Keyboard.dismiss();
    }
    renderText()
    {
        return (
            <Text style = {styles.text}>
            Member Sign In
            </Text>   
        )
    }
    onPressLoginButton()
    {
        if(this.state.username == userName && this.state.password === pass)
        {
            Alert.alert('login success')
        }
        else{
            Alert.alert('login fail')
        }   
    }
    renderButton(buttonName)
    {
        return(
            <TouchableOpacity 
                onPress = {this.onPressLoginButton}
                style = {{
                    alignItems : 'center',
                    justifyContent : 'center',
                    width : 300,
                    height : 50,
                    backgroundColor : '#19A3D2',
                    borderColor : 'gray',
                    borderRadius : 10,
                    borderWidth : 1,
                    marginTop : 20  
                }}
            >
                <Text style = {{
                    fontSize : 25,
                    color : 'white',
                }}>
                    {buttonName}
                </Text>
            </TouchableOpacity>
        )
    }
    renderTextInput(placeHolderText)
    {
        return(
            <View style = {{
                flexDirection : 'row',
                justifyContent : 'flex-start',
                alignItems : 'center',
                borderBottomColor : 'gray',
                borderBottomWidth : 1,
                width : 300,
            }}>
                <Text style = {{
                    marginRight : 20,
                    fontSize : 25,
                    color : 'white'
                }}>{placeHolderText === 'email@example.com' ? 'E' : 'P'}</Text>
                <TextInput
                    style = {{
                        fontSize : 20,
                        paddingBottom : 0,
                        paddingTop : 0,
                        width : 200,
                        height : 40,
                        
                    }}
                    autoFocus = {true}
                    placeholder = {placeHolderText}
                    onChangeText = {
                        (text) =>
                        {
                            placeHolderText === 'email@example.com' ? this.setState({username : text}) : this.setState({password : text})
                        }
                    }
                >

                </TextInput>
            </View>
            
        )
    }
    render()
    {
        return(
            <View style = {styles.container}>
                <View style = {{flex : 4, justifyContent : 'flex-end'}}>
                    {this.renderText()}
                </View>
                
                <View style = {{
                    marginLeft : 20,
                    flex : 1
                }}>
                    {this.renderTextInput('email@example.com')}
                    {this.renderTextInput('password')}
                </View>
                <View
                style = {{flex : 5, justifyContent : 'flex-start'}}>
                    {this.renderButton('Sign In')}
                </View>
                
            </View>
           
            
        )
    }
    
}
styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : '#404886',
        }
        ,
        text : {
            fontSize : 24,
            color : 'white',
            marginTop : screenHeight / 10
        }
    }
)