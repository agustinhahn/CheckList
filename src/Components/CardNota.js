import React, { useState } from 'react'
import { Pressable,Text, View , StyleSheet, FlatList} from 'react-native'

const CardNota = ({item, setArtComprado, DeleteNota}) => {
    return (
        <View>
            <Text>{item.nombre}</Text>
            <Text>{item.cantidad}</Text>
            <Pressable onPress={()=>setArtComprado(item.nombre)}>
                <Text>COMPRADO</Text>
            </Pressable>
            <Pressable onPress={()=>DeleteNota(item)}>
                <Text>ELIMINAR</Text>
            </Pressable>
        </View>
    )
}

export default CardNota