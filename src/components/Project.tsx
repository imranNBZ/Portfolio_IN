import React from "react";
import mock07 from '../assets/images/jobly.png';
import mock08 from '../assets/images/roadsidebuddy.png';
import mock09 from '../assets/images/warbler.png';
import mock10 from '../assets/images/pickup_soccer.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://soccer-pickup-frontend.onrender.com" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://soccer-pickup-frontend.onrender.com" target="_blank" rel="noreferrer"><h2>Pick Soccer</h2></a>
                <p>Developed a pickup soccer web app with real-time game creation, RSVPs, and map integration using React, Node.js, Express, PostgreSQL, and Mapbox for location-based search.</p>
            </div>
            <div className="project">
                <a href="https://warbler-lgo3.onrender.com" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://warbler-lgo3.onrender.com" target="_blank" rel="noreferrer"><h2>Warbler (Twitter Clone)</h2></a>
                <p>A microblogging app modeled after Twitter. Users can post messages, follow/unfollow others, and like messages. Built with Flask and SQLAlchemy.</p>
            </div>
            <div className="project">
                <a href="https://roadsidebuddy-1.onrender.com" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://roadsidebuddy-1.onrender.com" target="_blank" rel="noreferrer"><h2>RoadSide Buddy</h2></a>
                <p>Built a full-stack roadside assistance app with real-time service requests, chat, and emergency SMS alerts using React, Flask, Firebase, Mapbox, and ClickSend API.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Jobly</h2></a>
                <p>Developed a job board web app with user authentication, job search, company listings, and application tracking using React, Node.js, Express.js, PostgreSQL, and Bootstrap.</p>
           </div>
        </div>
    </div>
    );
}

export default Project;