import React from 'react';
import { Image, View, Text } from 'react-native';

 import styles from './styles';
 import logoImg from '../../assets/logo.png';

 const SignIn: React.FC = () => {
   return(
    <View style={styles.container}>
      <Image source={logoImg} />
      <Text style={styles.title}>Faça seu logon</Text>
    </View>
   )
 };

 export default SignIn;