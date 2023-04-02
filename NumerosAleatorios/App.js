import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Valores from './src/ValoresAleatorios.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Valores/>
      <StatusBar style="auto"> </StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
