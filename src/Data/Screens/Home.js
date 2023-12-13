import React, { useState } from 'react'
import { Pressable,Text, View , StyleSheet} from 'react-native'
import Header from '../../Components/Header'
import BotonGral from '../../Components/BotonGral'
import NuevaNota from '../../Components/NuevaNota'

const   Home = ({setAction}) => {

    const [addNewNote, setAddNewNote] = useState(false)
    const [nameNewNota, setNameNewNota] = useState("")
    const [cantNewNota, setCantNewNota] = useState("")
    const [listaNotas, setListaNotas] = useState([])

    const AddNota = () =>{
        if(nameNewNota !== ""){
            const NewNota ={
                nombre: nameNewNota,
                cantidad: cantNewNota
            }
        setListaNotas(current =>[...current,nameNewNota ])
        setNameNewNota("")
        setCantNewNota("")
        setAddNewNote(false)
    }}


    return (
        <View style={styles.container}>
            <Header title="CHECK LIST" />
            <BotonGral action="Agregar nueva compra" setAction={setAddNewNote} />
            <BotonGral action="Ver comprados" setAction={setAction}/>
            <BotonGral action="Limpiar lista" />
            {
                addNewNote?
                <NuevaNota setNameNewNota={setNameNewNota} nameNewNota={nameNewNota} cantNewNota={cantNewNota} setCantNewNota={setCantNewNota} AddNota={AddNota} setAddNewNote={setAddNewNote} />
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