import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header =(props)=>{
      return  (
         <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>{props.headerText}</Text>
            </View>
            )
}


const styles=StyleSheet.create({
    headerStyle:{
        
        backgroundColor:"#ff1493",
        alignItems:"center",
        padding:20,
        shadowColor:"#fff",
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.2


    },
    textStyle:{
        fontSize:25,
        fontWeight:"bold",
    }
})
export default Header;