import { Pressable, Text, TextInput, View, StyleSheet, Button } from 'react-native'

const NuevaNota = ({ AddNota, setNameNewNota, nameNewNota, cantNewNota, setCantNewNota, setAddNewNote }) => {
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
            <View style={styles.buttonContainer}>
                <Pressable style={styles.addButton} onPress={AddNota}>
                    <Text style={styles.buttonText}>ADD</Text>
                </Pressable>
                <Pressable style={styles.cancelButton} onPress={() => setAddNewNote(false)}>
                    <Text style={styles.buttonText}>CANCEL</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default NuevaNota

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#FCFFFC',
        borderWidth: 1,
        padding: 10,
        width: 180,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: 'green',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
