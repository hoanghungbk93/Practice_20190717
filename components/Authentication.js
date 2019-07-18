import React ,{Component} from 'react'
import {Text, View, TextInput, TouchableOpacity, Alert, Dimensions} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {screenHeight, screenWidth} from '../Consts'

import {
    userName,
    pass
} from '../Consts'
import {styles} from '../style/AuthenticationStyle'
export default class Authentication extends Component{
    static navigationOptions = {
        drawerLabel: 'Logout',
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="logout"
            color="yellow"
            size={25}
          />
        ),
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
                    placeholderTextColor = 'gray'
                    autoCapitalize = 'none'
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
