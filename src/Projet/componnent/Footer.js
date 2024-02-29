import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com"><FaGithub /></a>
                <a href="https://linkedin.com"><FaLinkedin /></a>
            </div>
            <h4>Front-end Developer Wassim EL Majidi et  Riad Annadam <p>2024 Web site Anime. All rights reserved.</p></h4>
           
         
        </footer>
    );
}
