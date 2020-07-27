import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';

 const SignIn: React.FC = () => {

  const navigation = useNavigation()

   return(
     <>
     <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined }
      enabled
      >
      <ScrollView 
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1}}
      >
        <Container>
          <Image style={styles.logoImg} source={logoImg} />
          <View>
          <Title>Faça o seu login</Title>
          </View>
          <Input name="email" icon="mail" placeholder="E-Mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
          onPress={() => {}} >
            Entrar
          </Button>

          <ForgotPassword onPress={() => {}} >
            <ForgotPasswordText>Esqueci a minha senha</ForgotPasswordText>
          </ForgotPassword>

        </Container>
      </ScrollView>

    </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp') }>
        <Icon name="log-in" size={20} color="#A22C32"  />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    
    </>
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
    height: '100%',
    position: 'absolute'
  }
 });

 export default SignIn;