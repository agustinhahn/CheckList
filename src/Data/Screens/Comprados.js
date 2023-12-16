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
            <View style={styles.buttonContainer}>
                <BotonVolver style={styles.button} setVerComprados={setVerComprados} title="VOLVER" />
                <BotonGral style={styles.button} action="Limpiar lista" setAction={setLimpiarComprados} />
            </View>
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
        borderWidth: 2
    }
});