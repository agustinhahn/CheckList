import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import {colors} from '../Data/Global/Colors/Colors'

const Header = ({title}) => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}



export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.header,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    text:{
        color: "white",
        fontSize: 25,
        textAlign:"center",
        fontFamily: "Josefin"
    }
});