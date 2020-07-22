import React from 'react';
import { Image, View, Text } from 'react-native';

 import styles from './styles';
 import logoImg from '../../assets/logo.png';

 const SignIn: React.FC = () => {
   return(
    <View style={styles.container}>
      <Image style={styles.logoImg} source={logoImg} />
      <Text style={styles.title}>Faça seu Login</Text>
    </View>
   )
 };

 export default SignIn;