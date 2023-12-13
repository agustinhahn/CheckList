import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Data/Screens/Home'
import Comprados from './src/Data/Screens/Comprados';

export default function App() {
  const [verComprados, setVerComprados] = useState(false)



  return (
    <View style={styles.container}>
      {verComprados ?
        <Comprados />
        :
        <Home setAction={setVerComprados}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
