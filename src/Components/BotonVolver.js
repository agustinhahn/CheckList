import React from 'react'
import { Pressable, Text, StyleSheet} from 'react-native'

const BotonVolver = ({setVerComprados, title}) => {
    return (
        <Pressable style={styles.container} onPress={()=>setVerComprados(false)}>
            <Text style={styles.textInput}>{title}</Text>
        </Pressable>
    )
}

export default BotonVolver


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: 'white'
    }
});