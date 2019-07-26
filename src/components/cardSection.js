import React from 'react'
import {View,Text,StyleSheet} from "react-native"

const CardSection=({children})=>{
return(
    <View style={styles.styling}>
        {children}
        </View>
)

}

const styles=StyleSheet.create({
    styling:{
        
        borderBottomWidth:1,
        padding:5,
        backgroundColor:"#fff",
        justifyContent:"flex-start",
        flexDirection:"row",
        borderColor:"#ddd",
        position:"relative"
    }
    
})

export default CardSection;