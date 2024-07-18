import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 25px 10px;
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
