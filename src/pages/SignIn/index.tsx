import React from 'react';
import { Image, StyleSheet, ImageBackground } from 'react-native';

import { Container, Title } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';

 const SignIn: React.FC = () => {
   return(
     <Container>
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        style={styles.backgroundImage}      
      >

      <Image style={styles.logoImg} source={logoImg} />
      <Title>Faça o seu login</Title>
      <Input />
      <Input />
      <Button onPress={() => {}} >Entrar</Button>
      </ImageBackground>
    </Container>
   )
 };

 const styles = StyleSheet.create({
  logoImg: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    marginTop: 100
  },
  backgroundImage: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
 });

 export default SignIn;