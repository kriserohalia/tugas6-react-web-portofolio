/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
export default function Project({tittle,description,link}){
    return (

        <div className="p-4 m-10  rounded-10 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out shadow-lg shadow-white-500/50">
            <section>
            <h2 className="font-bold text-dark text-2xl">{tittle}</h2>
            <p className="py-4">{description}</p>
            <a href={link} className=" my-8 text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out ">Link Repo</a>
            </section>
        </div>

    );
}