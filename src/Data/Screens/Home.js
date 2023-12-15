import React, { useEffect, useState } from 'react'
import { Pressable,Text, View , StyleSheet} from 'react-native'
import Header from '../../Components/Header'
import BotonGral from '../../Components/BotonGral'
import NuevaNota from '../../Components/NuevaNota'
import MostrarNotas from '../../Components/MostrarNotas'

const   Home = ({setVerComprados,setLimpiarLista, setArtComprados, artComprados, addNewNote, setAddNewNote, nameNewNota, AddNota,DeleteNota,setNameNewNota, cantNewNota, setCantNewNota, listaNotas,setListaNotas, artComprado, setArtComprado}) => {



    return (
        <View style={styles.container}>
            <Header title="CHECK LIST" />
            <BotonGral action="Agregar nueva compra" setAction={setAddNewNote} />
            <BotonGral action="Ver comprados" setAction={setVerComprados}/>
            <BotonGral action="Limpiar lista" setAction={setLimpiarLista} />
            <Pressable onPress={()=> console.log(listaNotas)}>
                <Text>PROBANDO</Text>
            </Pressable>
            {
                addNewNote?
                <NuevaNota setNameNewNota={setNameNewNota} nameNewNota={nameNewNota} cantNewNota={cantNewNota} setCantNewNota={setCantNewNota} AddNota={AddNota} setAddNewNote={setAddNewNote} />
                :
                null
            }
            {
                listaNotas.length > 0 ?
                <MostrarNotas listaNotas={listaNotas} setArtComprado={setArtComprado} DeleteNota={DeleteNota}/>
                :
                null
            }
        </View> 
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})