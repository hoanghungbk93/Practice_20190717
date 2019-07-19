import {StyleSheet} from 'react-native'
import {screenHeight, screenWidth} from '../Consts'

export const styles = StyleSheet.create(
    {
        container : {
            flex : 1
        },
        item : {
            width : screenWidth/4, 
            height : screenWidth/4, 
            backgroundColor : "white",
            marginRight : 10, 
            marginLeft : 20, 
            marginTop : 20,
            alignItems : 'center',
            justifyContent : 'center',
            borderRadius : 10
        },
        top : {
            flexDirection : 'row', 
            alignItems : 'baseline', 
            justifyContent : 'flex-start', 
            backgroundColor : '#534C9C',
            height : screenHeight / 4
        },
        drawerButton : {
            marginRight : 20, 
            marginLeft : 20
        },
        notificationButton : {
            marginRight : 20, 
            marginLeft : 70
        },
        personButton : {
            marginRight : 20, 
            marginLeft : 20
        },
        settingButton : {
            marginRight : 20, 
            marginLeft : 20
        },
        mid : {
            flexDirection : 'row', 
            backgroundColor : "#F9F7FF", 
            height : screenHeight / 3, 
            alignItems : 'center', 
            justifyContent : 'center'
        },
        switterFeedsText : 
        {
            fontSize : 30,
            color : '#534C9C',
            marginTop : 20
        },
        twiteerListItem :
        {
            borderBottomColor : 'gray',
            borderBottomWidth : 1,
            marginTop : 10,
            marginBottom : 10
        },
        title : {
            marginLeft : 10
        }
    }
)