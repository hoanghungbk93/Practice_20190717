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
                    width : 200,
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
    render()
    {
        return(
            <View style = {styles.container}>
                {this.renderText()}
                <View style = {{
                    marginLeft : 20,
                }}>
                    {this.renderTextInput('email@example.com')}
                    {this.renderTextInput('password')}
                </View>
                {this.renderButton('Sign In')}
            </View>
           
            
        )
    }
    renderTextInput(placeHolderText)
    {
        return(
            <View style = {{
                flexDirection : 'row',
                justifyContent : 'center',
                alignItems : 'center',
                borderBottomColor : 'gray',
                borderBottomWidth : 1
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
                        height : 50,
                        
                    }}
                    keyboardAppearance
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