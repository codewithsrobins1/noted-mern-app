import React from 'react';
import { Link } from "react-router-dom";

//Images
import heroImg from '../images/heroImg.svg'

function Landing() {
    return (
        <main className="hero-section">
            <div className="hero-info">
                <h1 className='hero-info__header heading'>Take notes on your favorite 
                    <span className="title-emphasis"> articles</span> and  
                    <span className="title-emphasis"> videos</span>
                </h1>
                <p className='hero-info__description'>
                    Forget bookmarking multiple online articles and videos and 
                    record notes all on one application.
                </p>
                <Link exact to="signup">
                    <button className="hero-info__button">
                            Get Started
                    </button>            
                </Link>

            </div>

            <div className="hero-image">
                <img src={heroImg} alt="hero"/>
            </div>
        </main>
    )
}

export default Landing;
