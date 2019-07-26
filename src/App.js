import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import Header from './components/Header'
import Details from './components/Details'
import Spinner from './components/Spinner'

export default class App extends React.Component{

state={
    loggedIn:null
}

    componentWillMount(){   
        firebase.initializeApp({
            apiKey: 'AIzaSyBSuKxGMRsk6Y1ZgSw8ca1AhPNqQCxuDmM',
            authDomain: 'authentication-c4c3b.firebaseapp.com',
            databaseURL: 'https://authentication-c4c3b.firebaseio.com',
            projectId: 'authentication-c4c3b',
            storageBucket: 'authentication-c4c3b.appspot.com',
            messagingSenderId: '371300098002',
            appId: '1:371300098002:web:ac6e479342bff384'
          })

          firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn: true})
            }
            else{
                this.setState({loggedIn: false})
            }
        })
    
    }

    renderContent(){
        
            switch(this.state.loggedIn){
                    case true:return(
<TouchableOpacity onPress={()=>firebase.auth().signOut()} style={styles.styling}>
                <Text style={styles.textStyling}>LogOut</Text>
            </TouchableOpacity>                    )
                              
                    case false:return(
                        <Details />
                    )

                    default:
                        return(
                            <Spinner />
                        )
            }
        }
    
    render(){
        return(
            <View>
                <Header headerText={"Authentication"} />
                <View>
                {this.renderContent()}
                </View>
                </View>
        )
    }
}


const styles={
    styling:{
        flex:1,
        alignSelf:"stretch",
        backgroundColor:"#fff",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#007aff",
        marginLeft:5,
        marginRight:5,
        padding:25
    },
    textStyling:{
        paddingBottom:10,
        alignItems:"center",
        alignSelf:"center",
        color:"#007aff",
        fontSize:20,
        fontWeight:'600'
    }
}