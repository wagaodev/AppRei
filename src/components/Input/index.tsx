import React from 'react';
import { TextInputProps, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
   name: string;
   icon: string; 
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon style={style.Icons} name={icon} size={20} color="#666360"/>


    <TextInput 
    keyboardAppearance="dark"  
    placeholderTextColor="#666355" {...rest} />
  </Container>
);
const style = StyleSheet.create({
  Icons: {
    marginRight: 16
  }
})

export default Input;

