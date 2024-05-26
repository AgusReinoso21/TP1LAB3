import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="bg-dark-subtle">
            <h1>Contacto:</h1>
            <div class="fs-2">
            <FaGithub/>
            <a href="https://github.com/AgusReinoso21" >Github</a>
            </div>
            <div class="fs-2">
            <CiLinkedin/>
            <a href="https://www.linkedin.com/in/agustin-reinoso-87b69b227/" >Linkedin</a>
            </div>
        </div>
    )
}

export default Footer