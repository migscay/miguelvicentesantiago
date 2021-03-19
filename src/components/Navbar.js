import React from 'react'
import myPicture from "./assets/myPicture.jpg"
import Avatar from '@material-ui/core/Avatar';
// react fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // <div class="container ">
        <nav className="navbar navbar-top navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link to="/"><Avatar alt="Miguel Santiago" src={myPicture} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link active">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-link active">Projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Contact" className="nav-link active">Contact Me</Link>
                        </li> 
                    </ul>    
                </div>
            </div>
        </nav>  
        // </div>
    )
}

export default Navbar
