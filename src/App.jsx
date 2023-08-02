/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import {MdOutlineArrowUpward} from "react-icons/md"

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
    me:"Saya Krise Rohalia",
    sev:"Beberapa Projek",
    weathering:"Aplikasi Prakiraan Cuaca"
  },
  en :{
    home:"Home",
    cv:"CV",
    portofolio:"Portofolio",
    halosemua:"Hello Everyone",
    juniorProgrammer:"Junior Programmer",
    desc:"Software development enthusiast that has a high learning curve, seeks the best practices, stays up-to-date on emerging technologies, and is eager to learn something new.",
    contact:"Contact Me",
    me:"I am Krise Rohalia",
    sev:"Several Project",
    weathering:"Weather Forecasting App"
  }
}

export default function App(){
  const [theme , setTheme] = useState("light")
  const [language, setLanguage] = useState("en");
  const BackToTop = useRef(null)

  useEffect(()=> {
    console.log("Successful theme change"),[theme]
  })

  const goto = (ref) => {
    window.scrollTo ({
      top:ref.offsetTop,
      left:0,
      behavior:"smooth"
    })
  }

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`${theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100 text-black"}`} ref={BackToTop}>
    <Header/>
    <Outlet/>
    <Footer/>
    <div className="flex justify-end fixed bottom-0 right-0 mb-4 mr-4">
    <button  onClick={()=>goto(BackToTop.current)} className=" bg-slate-400 py-2 px-4 rounded-lg absolute bottom-0 right-0 mt-4 mr-4"><MdOutlineArrowUpward size={24}/></button>
    </div>
    </div>
    </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}


