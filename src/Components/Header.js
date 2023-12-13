import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
});