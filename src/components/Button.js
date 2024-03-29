import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { tsPropertySignature } from '@babel/types';

const Button=({onPress,children})=>{

    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{children}</Text>
            </TouchableOpacity>
    )

}

styles=StyleSheet.create({
    buttonStyle:{
        flex:1,
        alignSelf:"stretch",
        backgroundColor:"#fff",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#007aff",
        marginLeft:5,
        marginRight:5,
        
    },
    textStyle:{
        paddingTop:10,
        paddingBottom:10,
        alignSelf:"center",
        color:"#007aff",
        fontSize:16,
        fontWeight:'600'
    }
})


export default Button;