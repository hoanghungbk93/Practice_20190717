import {StyleSheet} from 'react-native'
import {screenHeight} from '../Consts'
export const styles = StyleSheet.create(
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
            marginLeft : 30, alignContent : 'flex-end'
        },
        top : {
            marginTop : screenHeight/4, marginBottom : 50
        },
        mid : {
            marginTop : 50,
            flex : 1
        },
        bottom : {
            flex : 5, justifyContent : 'flex-start'
        },
        hideButtonText : {
            color : '#19A3D2',
            marginRight : 0
        }
    }
)