import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import{cuerpo, yo} from "../datos/index"

export const Home = () => {
    return (
        <div className="text-center">
            <Header yo={yo}/>
            <Main cuerpo={cuerpo}/>
            <Footer />
        </div>
    )
}

