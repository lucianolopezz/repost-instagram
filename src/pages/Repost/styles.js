import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const height = (Dimensions.get('window').height / 2) - 20;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: ${height}px;
`;

export const Text = styled.Text`
  color: black;
  padding: 5px;
`;

export const B = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${height}px;
  resize-mode: cover;
`;

export const Mark = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 5px;
  position: absolute;
  bottom: 0;
  align-self: flex-start;/* Importante para o background acompanhar a largura de acordo com tamanho do texto */
`;

export const ProfilePic = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: cover;
`;

export const AuthorName = styled.Text`
  color: black;
  margin-left: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  background-color: green;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 2px 3px black;
  elevation: 1;
`;
export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
