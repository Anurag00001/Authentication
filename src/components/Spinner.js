import React from 'react'
import {View,ActivityIndicator} from 'react-native'

const Spinner=()=>{

return(
    <View style={styles.spinnerStyle}>
            <ActivityIndicator size={'small'}/>
        
    </View>
)

}

const styles={
    spinnerStyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
}

export default Spinner;