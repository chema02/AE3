import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import {HomeComponent} from './components/HomeComponent'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pantalla App</Text>
      <StatusBar style="auto" />
      <HomeComponent></HomeComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
