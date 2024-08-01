import React from "react";
import { ButtonTheme } from "./style";
import { useTheme } from "../../context/themeContext";
import { Feather } from "@expo/vector-icons";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonTheme onPress={toggleTheme}>
      <Feather name={theme.icon.iconThemeName} color={theme.colors.iconThemeColor} size={30} />
    </ButtonTheme>
  );
};

export default ToggleTheme;
