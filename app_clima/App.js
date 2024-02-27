import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clima from './components/Clima';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Clima/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { // Fondo de la aplicacion
    flex: 1,
    backgroundColor: '#30A2D1',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#0000',
    fontSize: 1,
    fontWeight: 'bold',
  },
  encabezado:{

  },
  cuerpo:{
    flex:1,
    padding:11,
  },

  
});
