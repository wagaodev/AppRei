import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 0px ${Platform.OS === 'android' ? 200 : 40 }px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Roboto_500Medium';
  margin-top: 44px;
  margin-bottom: 20px;
`;
export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px ${16 + getBottomSpace()}px;
  border-top-width: 1px;
  border-color: #232129;
  background: #0105;
`;
export const BackToSignInText = styled.Text`
  text-decoration: underline;
  font-size: 20px;
  font-family: 'Roboto_400Regular';
  color: #fff;
  margin-left: 10px;
`;