import React from 'react'
import { Pressable, Text, StyleSheet} from 'react-native'
import {colors} from '../Data/Global/Colors/Colors'

const BotonGral = ({ action, setAction  }) => {
    return (
        <Pressable style={styles.container} onPress={()=>setAction(true)}>
            <Text style={styles.textInput}>{action}</Text>
        </Pressable>
    )
}

export default BotonGral


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bottons,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: 'black',
        textAlign:"center"
    }
});