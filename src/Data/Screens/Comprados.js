import { Pressable, Text, View, StyleSheet, FlatList } from 'react-native'
import Header from '../../Components/Header'
import CardNota from '../../Components/CardNota'
import CardComprado from '../../Components/CardComprado'
import BotonVolver from '../../Components/BotonVolver'
import BotonGral from '../../Components/BotonGral'

const Comprados = ({ artComprados ,setVerComprados, DeleteComprado, setLimpiarComprados}) => {

    console.log("Hola desde comprados")
    console.log(artComprados)
    return (
        <View style={styles.container}>
            <Header title="ARTICULOS COMPRADOS"/>
            <BotonVolver setVerComprados={setVerComprados} title="VOLVER" />
            <BotonGral action="Limpiar lista" setAction={setLimpiarComprados} />
            <Pressable onPress={()=> console.log(artComprados)}>
                <Text>PROBANDO</Text>
            </Pressable>
            <FlatList 
            data={artComprados}
            keyExtractor={item => item.id}
            renderItem={({item})=><CardComprado item={item} DeleteComprado={DeleteComprado}/>}
            />
        </View>

    )
}

export default Comprados

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})