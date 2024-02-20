import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './components/Styles'; 
import Funciones from './components/Marvel'; 

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Comics de Marvel</Text>
      </View>
      <Funciones />
    </View>
  );
};

export default App;

