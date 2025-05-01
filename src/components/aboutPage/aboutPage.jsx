import "./aboutPage.css";
import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";



export default function AboutPage(){
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
            if (isScrolled) setOpen(false);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <div className="aboutPage">
            <div className="leftSide">
                <div className="aboutPage__container">
                    <img src="src\assets\self_portrait.jpg" alt="Self Portrait" className="aboutPage__image" />
                    </div>
                <div className="aboutPage__content">
                    {/* <h1 className="aboutPage__title">About Me</h1> */}
                    <div className="aboutPage__paragraphDiv">                        
                        <p className="aboutPage__description">I am a passionate software developer with a love for creating innovative solutions. I enjoy working on challenging projects and continuously learning new technologies.</p>
                    </div>
                </div>
            </div>
            
            <div className="rightSide">
                <div className="aboutPage__container">
                    <h2 className="aboutPage__subtitle">My Skills</h2>
                    <ul className="aboutPage__skillsList">
                        <li className="aboutPage__skill">JavaScript</li>
                        <li className="aboutPage__skill">React</li>
                        <li className="aboutPage__skill">Node.js</li>
                        <li className="aboutPage__skill">CSS</li>
                        <li className="aboutPage__skill">HTML</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
