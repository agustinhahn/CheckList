import { Pressable, Text, TextInput, View, StyleSheet, Button } from 'react-native'

const NuevaNota = ({AddNota, setNameNewNota, nameNewNota,cantNewNota,setCantNewNota, setAddNewNote}) => {
    return (
        <View>
            <TextInput
                placeholder='Nombre producto'
                value={nameNewNota}
                style={styles.input}
                onChangeText={(text) => setNameNewNota(text)}
            />
            <TextInput
                placeholder='Cantidad'
                value={cantNewNota}
                style={styles.input}
                onChangeText={(text) => setCantNewNota(text)}
            />
            <Pressable  style={styles.container} onPress={AddNota}>
                <Text style={styles.input}>ADD</Text>
            </Pressable>
            <Pressable style={styles.container} onPress={()=>setAddNewNote(false)}>
                <Text style={styles.input}>CANCEL</Text>
            </Pressable>
        </View>
    )
}

export default NuevaNota

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#FCFFFC",
        borderWidth: 1,
        padding: 2,
        width: 180,
        justifyContent:"center",
        alignItems:'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        color:"yellow"
    },
    textInput: {
        color: 'white'
    }
})