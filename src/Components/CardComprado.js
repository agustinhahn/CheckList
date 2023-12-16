import React, { useState } from 'react'
import { Pressable,Text, View , StyleSheet, FlatList} from 'react-native'
import {colors} from '../Data/Global/Colors/Colors'

const CardComprado = ({item, DeleteComprado}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.nombre}</Text>
            <Text style={styles.text}>{item.cantidad}</Text>
            <Pressable onPress={()=>DeleteComprado(item)}>
                <Text style={styles.text}>ELIMINAR</Text>
            </Pressable>
        </View>
    )
}

export default CardComprado


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        padding: 5,
        margin: 20,
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        margin: 5,
        borderWidth: 2,
        color: "white"
    }
});