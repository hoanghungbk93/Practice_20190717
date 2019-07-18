import React ,{Component} from 'react'
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, Keyboard,
    KeyboardAvoidingView} from 'react-native'
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
screenWidth = Dimensions.get('window').width
screenHeight = Dimensions.get('window').height
const userName = 'Hung'
const pass = '1234'
export default class Authentication extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password : '',
            security : true
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
        if(this.state.username === userName && this.state.password === pass)
        {
            this.props.navigation.navigate('home', {email : this.state.username})
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
                style = {styles.loginButton}
            >
                <Text style = {styles.textLogin}>
                    {buttonName}
                </Text>
            </TouchableOpacity>
        )
    }
    renderTextInput(placeHolderText, hide)
    {
        const isEmail = placeHolderText === 'email@example.com'
        return(
            <View style = {styles.textInputContainer}>
                <Text style = {styles.textEP}>{isEmail ? 'E' : 'P'}</Text>
                <TextInput
                    style = {styles.textInput}
                    secureTextEntry={isEmail ? false : this.state.security }
                    autoFocus
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
        if(hide)
        {
            return(
                <TouchableOpacity 
                    style ={styles.hideButton}
                    onPress = {this.onPressHide}
                >
                    <Text style ={styles.hideButtonText}>
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
                <View style = {styles.top}>
                    {this.renderText()}
                </View>
                
                <View style = {styles.mid}>
                    {this.renderTextInput('email@example.com', false)}
                    {this.renderTextInput('password', true)}
                </View>
                <View
                style = {styles.bottom}>
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
        },
        loginButton : {
            alignItems : 'center',
            justifyContent : 'center',
            width : 300,
            height : 50,
            backgroundColor : '#19A3D2',
            marginTop : 20  
        },
        textLogin : {
            fontSize : 20,
            color : 'white',
        },
        textInputContainer : {
            flexDirection : 'row',
            justifyContent : 'flex-start',
            alignItems : 'center',
            borderBottomColor : 'gray',
            borderBottomWidth : 1,
            width : 300,
        },
        textEP : {
            marginRight : 20,
            fontSize : 25,
            color : 'white'
        },
        textInput : {
            fontSize : 20,
            paddingBottom : 0,
            paddingTop : 0,
            width : 200,
            height : 40,
            color : 'white',
        },
        hideButton : {
            marginLeft : 35, alignContent : 'flex-end'
        },
        top : {
            marginTop : screenHeight/4, marginBottom : 50
        },
        mid : {
            flex : 1
        },
        bottom : {
            flex : 5, justifyContent : 'flex-start'
        },
        hideButtonText : {
            color : '#19A3D2'
        }
    }
)