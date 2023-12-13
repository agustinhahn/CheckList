import { Pressable,Text, View , StyleSheet} from 'react-native'
import Header from '../../Components/Header'

const Comprados = () => {
    return (
        <View style={styles.container}>
            <Header title="COMPRADOS" />
        </View>
    )
}

export default Comprados

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})