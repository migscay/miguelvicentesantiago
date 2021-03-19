import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Junior Web Developer</h1>
                <Typed className="typed-text"
                       strings={["Javascript","HTML/CSS","Bootstrap","NPM","React","GIT/Github","PHP","C#","SQL"]}
                       typeSpeed={80}
                       backSpeed={80}
                       loop
                ></Typed>
                <a href="https://www.freepik.com/photos/background">Background photo created by freepik - www.freepik.com</a>    
                {/* <a href="#" className="btn-main-offer">Contact Me</a> */}
            </div>
        </div>  
    )
}

export default Header

