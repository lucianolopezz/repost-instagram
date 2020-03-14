import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.View`
  width: 80%;
  background-color: white;
  box-shadow: 1px 2px 5px black;
  elevation: 1;
`;
export const CardHeader = styled.View`
  border-bottom-width: 1px;
  border-color: black;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;
export const CardHeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
export const CardContent = styled.View`
  padding: 10px;
`;



export const Text = styled.Text`
  color: black;
  line-height: 30px;
`;

export const B = styled.Text`
  font-weight: bold;
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
export const ButtonTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;