import { useContext } from "react";
import Project from "../components/Project";
import { LanguageContext, ThemeContext, strings } from "../App";

export default function Portofolio(){
    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)

    const projects=[
        {
            id:1,
            tittle:[strings[language].weathering],
            description:"Aplikasi ini merupakan prakiraan cuaca yang bisa digunakan degan menginputkan nama kota yang ingin dicari. Menampilkan beberapa informasi seperti suhu udara, kecepatan anagin dan perkiraan cuaca berdasarkan awan. Dibuat dengan menggunakan HTML, CSS, dan Javascript dasar.  ",
            link:"https://github.com/kriserohalia/PROJEK-WEB_KRISE-ROHALIA",
        },
        {
            id:2,
            tittle:"Orphanage Information System",
            description:"API yang digunakan untuk kebutuhan sistem informasi Panti. Dapat melakukan CRUD dengan menggunakan Bahasa Pemrograman Golang native dan dapat diakses menggunakan HTML dan Javascript sebagai media FrontEnd. ",
            link:"https://github.com/kriserohalia/projek-go",
        },
        {
            id:3,
            tittle:"Laundry Information System",
            description:"API yang digunkan untuk kebutuhan sistem informasi Laundry. Dibangun menggunakan bahasa pemrograman Golang dengan menggunakan framework GIN. Api ini apat melakukan CRUD dengan menggunakan PostgreSQL sebagai Database.",
            link:"https://github.com/kriserohalia/uts-golang-laundry",
        },
    ];

    return (
        <div className={`${theme === 'dark' ? 'text-white': 'text-black'}`}>
        <h1 className="tex-base font-bold md:text-2xl p-4 m-10">{strings[language].sev}</h1>
        {projects.map((project)=>(
            <Project key={projects.id} 
                {...project}/>
        ))}
         </div>
    )
}


