import React from 'react';
import miguel from './miguelsantiago.jpg';

const About = () => {
    return (
        <div className="about-wraper">
            <div className="about_picture">
                <img class="about__img" src={miguel} alt="Miguel Santiago"></img>
            </div>
            <div className="about__paragraph">
                <p>Experienced Analyst/Programmer with decades of experience. I have recently completed the Junior Web Development bootcamp by Generation Australia.
                   With my knowledge and experience in coding, I can help create effective systems to assist businesses effectively connect with their customers. I am excited to apply my 
                   strengths in diagnosing and developing innovative solutions.This Portfolio is made with React with Bootstrap.</p>
            </div>
        </div>
    )
}

export default About
