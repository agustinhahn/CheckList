import React, { useState } from 'react'
import { Pressable,Text, View , StyleSheet, FlatList} from 'react-native'

const CardComprado = ({item, DeleteComprado}) => {
    return (
        <View>
            <Text>{item.nombre}</Text>
            <Text>{item.cantidad}</Text>
            <Pressable onPress={()=>DeleteComprado(item)}>
                <Text>ELIMINAR</Text>
            </Pressable>
        </View>
    )
}

export default CardComprado