import styled from "styled-components/native";
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

export const ButtonPrincipal = styled.TouchableOpacity`
  display: flex;
  width: 80%;
  height: 50px;
  padding: 3px 22px;
  justify-content: center;
  align-items: center;
  gap: 10.4px;
  border-radius: 15px;
  background-color: #537552;
`;

export const ButtonText = styled.Text`
  color: #bad9a2;
  font-family:'Inter-Bold';
  font-size: 14px;
`;
