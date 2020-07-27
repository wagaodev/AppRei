import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
`;
export const BackToLogin = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-top-width: 1px;
  border-color: #232129;
  background: #0105;
`;
export const BackToLoginText = styled.Text`
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 18px;
`;