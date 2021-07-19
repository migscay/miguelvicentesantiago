import React from 'react';
import miguel from './miguelsantiago.jpg';

const About = () => {
    return (
        <div className="about-wraper">
            <div className="about__picture">
                <img class="about__img" src={miguel} alt="Miguel Santiago"></img>
            </div>
            <div className="about__paragraph">
                <p>Experienced Analyst/Programmer with over a decade of experience.
                I am currently on an internship at MVPStudio where in just a month, 
                I have gained much practical experience in Full Stack Web Development. 
                I Developed an ASP.NET Core MVC app with React, with the database on 
                Microsoft SQL Server. I deployed the Web App and database on Azure - 
                https://mvpstore.azurewebsites.net I am assigned on the Talent project 
                and for the second sprint I implemented enhancements to the Employer 
                Profile page. And I implemented the Manage Jobs page to display the jobs 
                posted by Employer as a list of Cards. I also implemented the edit and 
                close functions on the Job Summary card. https://mvptalentm.azure
                websites.net/Home
                </p>
            </div>
        </div>
    )
}

export default About
