import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather as Icon } from '@expo/vector-icons';
import { 
  Container,
  Title,
  BackToSignIn,
  BackToSignInText
} from './styles';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

 const SignUp: React.FC = () => {
  

   return(
    <>
      <KeyboardAvoidingView
        style={{ flex: 1}}
        behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <Container>
            <Image style={styles.logoImg} source={logoImg} />
            <Title>Crie sua conta</Title>

            <Input name="text" icon="user" placeholder="Nome"/>
            <Input name="email" icon="mail" placeholder="E-mail"/>
            <Input name="password" icon="lock" placeholder="Senha"/>
            <Input name="password" icon="home" placeholder="Filial de"/>

            <Button
              onPress={() => {}}
            >
              Cadastrar
            </Button>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
          <View style={{ justifyContent: "flex-end"}}>

            <BackToSignIn
              onPress={() => {}}
              >
            <Icon name="arrow-left" size={20} color="#A22C32" />
              <BackToSignInText style={{ marginLeft: 20 }}>Voltar para tela de login</BackToSignInText>
            </BackToSignIn>
              </View>
             
    </>
   );
 };

 const styles = StyleSheet.create({
  logoImg: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 100
  },
 });

 export default SignUp;