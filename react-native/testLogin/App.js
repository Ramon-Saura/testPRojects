import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function App (){
  return (
  <View style={styles.container}>
    <Text>Hola fills de puta</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})