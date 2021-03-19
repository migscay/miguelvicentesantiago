import React from "react";
import resume from './assets/resume.pdf';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// react fontawesome imports
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    console.log(window.location.pathname);
    return (
        <nav className="navbar-footer navbar-light bg-dark">
            <ul>
                <li>
                    <a href="https://github.com/migscay/" target="_blank" rel="noreferrer">
                        <GitHubIcon alt="Github icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/miguel-vicente-ortega-santiago/" target="_blank" rel="noreferrer">
                        <LinkedInIcon alt="LinkedIn icon" />
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noreferrer">
                        <PictureAsPdfIcon alt="PDF icon" />
                    </a>
                </li>
                <li>
                    <Link to="/Contact" className="nav-link"><MailOutlineIcon alt="Email icon" /></Link>
                </li>
            </ul>
        </nav>  
    )
}

export default Footer
