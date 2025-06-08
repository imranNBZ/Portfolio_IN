import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React-Redux",
    "Axios",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind",
];

const labelsSecond = [
    "JavaScript",
    "Node.js",
    "Express.js",
    "Python",
    "Flask",
];

const labelsThird = [
    "Git",
    "Git hub",
    "PSQL",
    "MySQL",
    "Render",
    "Mapbox",
    "Firebase",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Fron-end</h3>
                    <p>I have built a range of responsive and user-friendly web applications from scratch using modern front-end technologies like React, JavaScript, HTML5, and CSS3. I have a strong understanding of the software development lifecycle (SDLC) and specialize in creating intuitive, accessible, and performant user interfaces.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Back-end</h3>
                    <p>I stay competitive by integrating modern technologies into scalable backend systems. With hands-on experience using tools like Node.js, Express, Flask, Firebase, and PostgreSQL, I’ve built backend solutions that support secure authentication, real-time data handling, and robust API development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Additional Skills</h3>
                    <p>I use Git and GitHub for version control, Postman for API testing, and Chrome DevTools for debugging. I’ve implemented Firebase and Supabase for authentication and data management, and deployed projects using Render and Netlify. I follow Agile practices, use the command line regularly, and have basic experience with Docker for containerizing backend apps.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;