import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, StyleSheet } from 'react-native';

import Routes from './routes';


const Index: React.FC = () => (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#00431E" />
      <View style={styles.container}>
        <Routes />
      </View>
    </NavigationContainer>
  );


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#312e38'
    },
  })

export default Index;