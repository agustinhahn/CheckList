import React, { useEffect, useState } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import Header from '../../Components/Header'
import BotonGral from '../../Components/BotonGral'
import NuevaNota from '../../Components/NuevaNota'
import MostrarNotas from '../../Components/MostrarNotas'

const Home = ({ setVerComprados, setLimpiarLista, setArtComprados, artComprados, addNewNote, setAddNewNote, nameNewNota, AddNota, DeleteNota, setNameNewNota, cantNewNota, setCantNewNota, listaNotas, setListaNotas, artComprado, setArtComprado }) => {



    return (
        <View style={styles.container}>
            <Header title="CHECK LIST" />
            <View style={styles.buttonContainer}>
                <BotonGral style={styles.button} action="Agregar Producto" setAction={setAddNewNote} />
                <BotonGral style={styles.button}  action="Ver comprados" setAction={setVerComprados} />
                <BotonGral style={styles.button}  action="Limpiar lista" setAction={setLimpiarLista} />
            </View>
            {
                addNewNote ?
                    <NuevaNota setNameNewNota={setNameNewNota} nameNewNota={nameNewNota} cantNewNota={cantNewNota} setCantNewNota={setCantNewNota} AddNota={AddNota} setAddNewNote={setAddNewNote} />
                    :
                    null
            }
            {
                listaNotas.length > 0 ?
                    <MostrarNotas listaNotas={listaNotas} setArtComprado={setArtComprado} DeleteNota={DeleteNota} />
                    :
                    null
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: "80%",
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        borderWidth: 2,
    }
});