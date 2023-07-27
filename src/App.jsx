/* eslint-disable no-undef */
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme:() => {},
});



export default function App(){
  const [theme , setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`${theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100 text-black"}`}>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}
