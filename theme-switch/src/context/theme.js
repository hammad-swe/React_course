import { createContext, useContext } from "react";
export const ThemeContext = createContext(
    {
        thememode: "light",
        darktheme: "dark",
        lighttheme: "light"
        }
);
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
};