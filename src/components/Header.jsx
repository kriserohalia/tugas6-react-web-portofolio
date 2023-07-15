/* eslint-disable react/jsx-key */
import {Link} from "react-router-dom"
import {CgWebsite} from "react-icons/cg"

export default function Header(){
    return(
        <header className="flex justify-between space-x-4 p-8  bg-white-300 shadow-lg shadow-white-500/50 ">
             <Link to="/" className="flex justify-between gap-2">
                <CgWebsite size={48}/>
                 <div className="block font-bold text-dark text-2xl items-end py-2 ">Portofolio Website</div>
            </Link>
        <nav className="flex sm:justify-center space-x-4  text-xl font-bold text-dark">
            {[
                ['Home', '/'],
                ['CV', '/cv'],
                ['Portofolio', '/portofolio'],
            ].map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
            </nav>
            </header>
    );
}