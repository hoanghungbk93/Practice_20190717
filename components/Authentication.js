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
            password : '',
            security : false
        }
        this.onPressLoginButton = this.onPressLoginButton.bind(this)
        this.onPressHide = this.onPressHide.bind(this)
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
    renderTextInput(placeHolderText, hide)
    {
        const isEmail = placeHolderText === 'email@example.com'
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
                }}>{isEmail ? 'E' : 'P'}</Text>
                <TextInput
                    style = {{
                        fontSize : 20,
                        paddingBottom : 0,
                        paddingTop : 0,
                        width : 200,
                        height : 40,
                        
                    }}
                    secureTextEntry={isEmail ? false : this.state.security }
                    autoFocus = {true}
                    placeholder = {placeHolderText}
                    onChangeText = {
                        (text) =>
                        {
                            isEmail ? this.setState({username : text}) : this.setState({password : text})
                        }
                    }
                >

                </TextInput>
                {this.renderHideButton(hide)}
            </View>
            
        )
    }
    renderHideButton(hide)
    {
        if(hide === true)
        {
            return(
                <TouchableOpacity 
                    style ={{marginLeft : 35, alignContent : 'flex-end'}}
                    onPress = {this.onPressHide}
                >
                    <Text style ={{color : '#19A3D2'}}>
                        {!this.state.security ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            )
        }
        else
        {
            return null
        }
    }
    onPressHide()
    {
        this.setState(previousState => ({security : !previousState.security}))
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
                    {this.renderTextInput('email@example.com', false)}
                    {this.renderTextInput('password', true)}
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