import React, { createContext, useContext, useMemo, useState } from "react";

export const initialState = {theme: "", data: []} // Aqui deberan definir el estado inicial

export const themes = {
  light: {
    type: "light",
    font: "black",
    background: "white",
  },
  dark: {
    type: "dark",
    font: "white",
    background: "black",
  },
};

export const GlobalContext = createContext(initialState); // Aqui deberan definir el contexto

export function useGlobal() { // Aqui deberan definir el hook personalizado
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) { // Aqui deberan definir el provider
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    console.log("entro al boton");
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  const tema = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <GlobalContext.Provider value={tema}>
      {children}
    </GlobalContext.Provider>
  );
}