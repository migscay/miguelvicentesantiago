import React from "react";
import resume from './resume.pdf';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// react fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="https://github.com/migscay/" target="_blank" rel="noreferrer">
                                <GitHubIcon alt="Github icon" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.linkedin.com/in/miguel-vicente-ortega-santiago/" target="_blank" rel="noreferrer">
                                <LinkedInIcon alt="LinkedIn icon" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href={resume} target="_blank" rel="noreferrer">
                                <PictureAsPdfIcon alt="PDF icon" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <Link to="/Contact" className="nav-link"><MailOutlineIcon alt="Email icon" /></Link>
                            {/* <a href="MailTo:santiagomiguelvicente@gmail.com" target="_blank" rel="noreferrer">
                                <MailOutlineIcon alt="Email icon" />
                            </a>                     */}
                        </li>
                    </ul>    
                </div>
            </div>
        </nav>  
    )
}

export default Footer
