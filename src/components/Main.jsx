import React from "react";



const Main = ({ cuerpo }) => {

    return (
        <main className="d-flex justify-content-center bg-dark-subtle" >
            
            <div className="m-4  container-sm">
                <section className="bg-dark-subtle" >
                    <h1>Sobre mi</h1>
                    <h5 >{cuerpo.sobreMi}</h5>
                </section>
            </div>
            <div className=" m-4 container-sm bg-dark-subtle" >
            <aside >
                <h1 >Habilidades</h1>
                <h2 >{cuerpo.habilidades}</h2>
            </aside>
            </div>
        </main>
    )

}
export default Main