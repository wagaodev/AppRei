import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* background-color: #A22C32; */
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Roboto_500Medium';
  margin-top: 44px;
  margin-bottom: 20px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  text-decoration: underline;
  font-size: 14px;
  font-family: 'Roboto_500Medium'
`;
export const CreateAccountButton = styled.TouchableOpacity `
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: #232129;
  background: #0105;
  padding: 14px 0 ${14 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  text-decoration: underline;
  font-size: 20px;
  font-family: 'Roboto_400Regular';
  color: #fff;
  margin-left: 10px;
`;