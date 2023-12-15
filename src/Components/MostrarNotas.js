import React, { useState } from 'react'
import { Pressable,Text, View , StyleSheet, FlatList} from 'react-native'
import CardNota from './CardNota'

const MostrarNotas = ({listaNotas, setArtComprado, DeleteNota}) => {
    return (
        <>
            <FlatList 
            data={listaNotas}
            keyExtractor={item => item.id}
            renderItem={({item})=><CardNota item={item} setArtComprado={setArtComprado} DeleteNota={DeleteNota}/>}
            />
        </>
    )
}

export default MostrarNotas