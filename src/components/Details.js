import React from 'react'
import {View,Text,TextInput,Linking} from 'react-native'
import firebase from 'firebase'
import Card from './card'
import CardSection from './cardSection'
import Button from './Button'
import Spinner from './Spinner'

class Details extends React.Component{

    state={email: '', password: '', error: '', isLoading: false}; 


onButtonPress(){

const {email,password,error}=this.state;

this.setState({error: '',isLoading: true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onFailedLogin.bind(this))
        });
    }

onLoginSuccess(){
    return(
        this.setState({email: '',password: '',error: '',isLoading: false})
    )
}

onFailedLogin(){
    return(
        this.setState({error: 'Authentication Failed' ,isLoading: false})
    )
}

renderButton(){
    if(this.state.isLoading === true){
        return (<Spinner />)
    }

    return(
        <Button onPress={this.onButtonPress.bind(this)} >LOGIN</Button>
    )
}

render()
{
    return(

    <Card>
        <CardSection>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{fontSize:20,padding:10}}>User Id :</Text>
                      
            <TextInput 
            placeholder="User@gmail.com"
            autoCorrect={false}
            onChangeText={(email) => this.setState({ email })} 
            value={this.state.email}         
            />
          
             </View>
             
                
            </CardSection>

            <CardSection>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{fontSize:20,padding:10}}>User Password :</Text>
             
            <TextInput 
            placeholder="UserPassword"
            autoCorrect={false}
            secureTextEntry={true} 
            onChangeText={(password)=>this.setState({password})}
            value={this.state.password}
            />
          
             </View>
            </CardSection>
            <Text style={{alignSelf:"center",fontSize:20,color:"red"}}>{this.state.error}</Text>

            <CardSection>
                  {this.renderButton()}
                </CardSection>
        </Card>
)
}

}

export default Details;