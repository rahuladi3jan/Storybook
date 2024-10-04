import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { lightTheme } from "./theme";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  return (
    <StyledThemeProvider mode="light" theme={lightTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
