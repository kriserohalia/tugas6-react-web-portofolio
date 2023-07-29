/* eslint-disable react-refresh/only-export-components */
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

export const LanguageContext = createContext(
  {
    language:null,
    setLanguage:()=>{},
  }
);

export const strings = 
{
  id: {
    home:"Beranda",
    cv:"CV",
    portofolio:"Portofolio",
    halosemua:"Halo Semuanya",
    juniorProgrammer:"Programmer Junior",
    desc:"Penggemar pengembangan perangkat lunak yang memiliki kurva belajar yang tinggi, mencari praktik terbaik, selalu mengikuti perkembangan teknologi yang sedang berkembang, dan sangat ingin mempelajari sesuatu yang baru.",
    contact:"Kontak Saya",
    me:"Saya Krise Rohalia"
  },
  en :{
    home:"Home",
    cv:"CV",
    portofolio:"Portofolio",
    halosemua:"Hello Everyone",
    juniorProgrammer:"Junior Programmer",
    desc:"oftware development enthusiast that has a high learning curve, seeks the best practices, stays up-to-date on emerging technologies, and is eager to learn something new.",
    contact:"Contact Me",
    me:"I am Krise Rohalia",
  }
}

export default function App(){
  const [theme , setTheme] = useState("light")
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`${theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100 text-black"}`}>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}
