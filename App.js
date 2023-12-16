import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Data/Screens/Home'
import Comprados from './src/Data/Screens/Comprados';
import uuid from 'react-native-uuid';
import {colors} from './src/Data/Global/Colors/Colors'
import { useFonts } from "expo-font"

export default function App() {
  

  const [verComprados, setVerComprados] = useState(false)
  const [artComprados, setArtComprados] = useState([])
  const [addNewNote, setAddNewNote] = useState(false)
  const [nameNewNota, setNameNewNota] = useState("")
  const [cantNewNota, setCantNewNota] = useState("")
  const [listaNotas, setListaNotas] = useState([])
  const [artComprado, setArtComprado] = useState("")
  const [limpiarLista, setLimpiarLista] = useState(false)
  const [limpiarComprados, setLimpiarComprados] = useState(false)


  const AddNota = () =>{
    if(nameNewNota !== ""){
        const NewNota ={
            id : uuid.v4(),
            nombre: nameNewNota,
            cantidad: cantNewNota
        }
    setListaNotas(current =>[...current,NewNota ])
    setNameNewNota("")
    setCantNewNota("")
    setAddNewNote(false)
}}

const DeleteNota = (item) =>{
  setListaNotas(prevListaNotas => prevListaNotas.filter(nota => nota.id !== item.id));
}
const DeleteComprado = (item) =>{
  setArtComprados(prevListaNotas => prevListaNotas.filter(nota => nota.id !== item.id));
}


useEffect(()=>{
  if(listaNotas.length>0){
      const ArticulosComprados = listaNotas.filter(prod => prod.nombre === artComprado)
      const ArtAgregar = ArticulosComprados[0]
      setArtComprados(current =>[...current, ArtAgregar ])
      console.log("operacion realizada")
      console.log(ArtAgregar.id)
      for(let i = 0; i < listaNotas.length; i++){
          if(listaNotas[i].id === ArtAgregar.id){
              listaNotas.splice(i,1);
              break
          }
      }
  }
},[artComprado])

  useEffect(()=>{
    if(listaNotas.length>0){
      setListaNotas([])
      setLimpiarLista(false)
    }
  },[limpiarLista])

  useEffect(()=>{
    if(artComprados){
      setArtComprados([])
      setLimpiarComprados(false)
    }
  },[limpiarComprados])

  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf")
  })
  if(!fontLoaded) return null
  return (

    <View style={styles.container}>
      {verComprados ?
        <Comprados 
        artComprados={artComprados} 
        setVerComprados={setVerComprados} 
        DeleteComprado={DeleteComprado}
        setLimpiarComprados={setLimpiarComprados}
        />
        :
        <Home 
        setVerComprados={setVerComprados} 
        setArtComprados={setArtComprados} 
        artComprados={artComprados} 
        addNewNote={addNewNote} 
        setAddNewNote={setAddNewNote}
        nameNewNota={nameNewNota}
        setNameNewNota={setNameNewNota}
        cantNewNota={cantNewNota}
        setCantNewNota={setCantNewNota}
        listaNotas={listaNotas}
        setListaNotas={setListaNotas}
        artComprado={artComprado}
        setArtComprado={setArtComprado}
        AddNota={AddNota}
        DeleteNota={DeleteNota}
        setLimpiarLista={setLimpiarLista}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: colors.principal,
    alignItems: 'center',
    justifyContent: 'start',
  },
});
