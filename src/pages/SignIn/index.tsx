import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Container, Title } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';

 const SignIn: React.FC = () => {
   return(
     <Container>
      <Image style={styles.logoImg} source={logoImg} />
      <Title>Faça o seu login</Title>
      <Input />
      <Input />
      <Button>Entrar</Button>
    </Container>
   )
 };

 const styles = StyleSheet.create({
  logoImg: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    marginTop: 50
  }
 });

 export default SignIn;