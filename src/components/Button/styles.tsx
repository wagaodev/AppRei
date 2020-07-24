import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #AE0001;
  opacity: 0.8;
  border-radius: 15px;

  justify-content: center;
  align-items: center;
  width: 75%
`;
export const ButtonText = styled.Text`

  color: #FFF;
  font-size: 22px;
  font-family: 'Roboto_500Medium';
`;