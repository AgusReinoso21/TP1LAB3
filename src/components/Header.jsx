import React from "react";
import foto from "../assets/foto.jpeg"


const Header = ({ yo }) => {

    return (

        <header>
          <section className="bg-dark-subtle d-flex justify-content-center">
            <div className="d-flex flex-wrap h-50 w-50 justify-content-center  " >
            <img src={foto} alt="foto" className="m-3 h-25 w-25 "/>
            <div className="mt-auto p-2 fst-italic h-100 w-100">
            <h1 className="">{yo.nombre} {yo.apellido}</h1>
            <h2 className="fw-lighter"> Profesion: {yo.estudios}</h2>
            <hr />
            </div>
            </div>
            </section>
        </header>
    )
}

export default Header