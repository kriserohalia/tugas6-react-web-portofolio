/* eslint-disable react/jsx-key */
import {Link} from "react-router-dom"
import {CgWebsite} from "react-icons/cg"
import { useContext } from "react";
import { ThemeContext } from "../App";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"

export default function Header(){
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <header className="flex justify-between sticky top-0 left-0 right-0 p-8 shadow-lg shadow-white-500/50   ">
             <Link to="/" className="flex justify-between gap-2">
                <CgWebsite size={48}/>
                <div className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                 <div className="block font-bold text-2xl items-end py-2 ">Portofolio Website</div>
                 </div>
            </Link>
            <div className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <nav className="flex sm:justify-center  text-xl font-bold">
            {[
                ['Home', '/'],
                ['CV', '/cv'],
                ['Portofolio', '/portofolio'],
            ].map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2  font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
                <button className='mt-2-mr-16 ' onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
                {
                theme === 'light' ?  <MdDarkMode size={24}/> : <MdOutlineLightMode size={24} /> 
                }
                </button>
            </nav>
            </div>
            </header>
            
    );
}