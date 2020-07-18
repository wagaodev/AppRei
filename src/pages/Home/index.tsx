import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, View, Text } from 'react-native';



import styles from './styles';

const Home: React.FC = () => (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={styles.container}>
        <Text style={styles.text}>Olá Mundo!!!</Text>
      </View>
    </>
  );


export default Home;