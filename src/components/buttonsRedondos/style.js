import styled from "styled-components/native";

export const ButtonsRedondos = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsRedondosImage = styled.Image`
  width: 100%;
  height: 100%;
`;



