import styled from "styled-components/native";

export const ButtonPrincipal = styled.TouchableOpacity`
  display: flex;
  min-width: 40%;
  height: 30px;
  padding: 3px 22px;
  justify-content: center;
  align-items: center;
  gap: 10.4px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.bgButton};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.textButton};
  font-family:'Inter-Bold';
  font-size: 14px;
`;
