import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './style';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.h1}> Sistema de Login</Text>
        <Text style={styles.h2}> Bem vindo(a)! Digite seus dados abaixo.</Text>



      </View>
    </ScrollView>
  );
}


