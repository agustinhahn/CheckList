import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet, FlatList } from 'react-native'
import { colors } from '../Data/Global/Colors/Colors'

const CardNota = ({ item, setArtComprado, DeleteNota }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.nombre}</Text>
            <Text style={styles.text}>{item.cantidad}</Text>
            <Pressable onPress={() => setArtComprado(item.nombre)}>
                <Text style={styles.text}>COMPRADO</Text>
            </Pressable>
            <Pressable onPress={() => DeleteNota(item)}>
                <Text style={styles.text}>ELIMINAR</Text>
            </Pressable>
        </View>
    )
}

export default CardNota

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        padding: 5,
        margin: 20,
        justifyContent: 'space-around',
        width:"80%"
    },
    text: {
        color: 'white',
        textAlign: 'center',
        margin: 5,
        borderWidth: 2,
        color: "white",
        fontSize: 10,
    }
});
