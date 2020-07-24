import React from 'react';
import { Image, StyleSheet, ImageBackground } from 'react-native';

import { Container, Title, ForgotPassword, ForgotPasswordText } from './styles';

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
      <Input name="email" icon="mail" placeholder="E-Mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
       onPress={() => {}} >
         Entrar
      </Button>

      <ForgotPassword onPress={() => {}} >
        <ForgotPasswordText>Esqueci a minha senha</ForgotPasswordText>
      </ForgotPassword>


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