import React ,{Component} from 'react'
import {Text, View, TouchableOpacity, FlatList} from 'react-native'
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {iconList} from '../Consts'
import {styles} from '../style/HomeStyle'

class MyListItem extends Component
{
    
    constructor(props)
    {
        super(props)
    }
    render()
    {
        const { icon } = this.props
        return(
            <View style = {styles.item}>
            <TouchableOpacity>
            <MaterialCommunityIcons
                name={icon.name}
                color={icon.color}
                size={25}
                />
            </TouchableOpacity>
            </View>
        )
    }
}
class TwiteerListItem extends Component
{
    
    constructor(props)
    {
        super(props)
        this.onPressItem = this.onPressItem.bind(this)
    }
    onPressItem(title)
    {
        this.props.parent.props.navigation.navigate('detail', {
            content : title
        })
    }
    render()
    {
        const { index } = this.props
        return(
            <View style = {styles.twiteerListItem}>
            <TouchableOpacity 
                onPress = {() => {this.onPressItem(this.props.item.title)}}
            >
            <Text>
                {this.props.item.title}
            </Text>
            </TouchableOpacity>
            </View>
        )
    }
}
export default class Home extends Component
{
    // static navigationOptions = {
    //     header: null
    // }
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <IoniconsIcon
            name="md-home"
            color="green"
            size={25}
          />
        ),
      }
    constructor(props)
    {
        super(props)
        this.state = {
            userEmail : '',
            twitter : []
        }
        this.openDrawer = this.openDrawer.bind(this)
    }
    openDrawer()
    {
        this.props.navigation.openDrawer()
    }
    renderTop()
    {
        const email = this.props.navigation.getParam('email');
        console.log(`hello ${email}`)
        return(
            <View style = {styles.top}
            >
                <View
                style = {{marginTop : 70}}
                ></View>
                <TouchableOpacity style ={styles.drawerButton}
                    onPress = { ()=> {this.openDrawer()}}
                >
                <EntypoIcon
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
                <TouchableOpacity style ={styles.notificationButton}>
                <IoniconsIcon
                    name="ios-notifications-outline"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity style ={styles.personButton}>
                <IoniconsIcon
                    name="ios-person"
                    color="white"
                    size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity style ={styles.settingButton}>
                <IoniconsIcon
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
        return(
            <FlatList
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
    renderBottom()
    {
        return(
            <FlatList
                data = {this.state.twitter}
                renderItem = {({item, index}) =>
                (
                    <TwiteerListItem item = {item} index = {index} parent = {this}>
                    </TwiteerListItem>
                )
                }
                numColumns = {1}
            >
            </FlatList>
        )
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
              twitter : json
          })
        });
    }
    render()
    {
        return(
            <View style = {styles.container}>
                {this.renderTop()}
                <View style = {styles.mid}>
                    {this.renderMidler()}
                </View>
                <Text style = {styles.switterFeedsText}>
                    Twitter Feeds
                </Text>  
                {this.renderBottom()}             
            </View>
        )
    }
}

