import "../../styles/Projects.css"
import { useState, useEffect } from "react";

import useReveal from "../../Hooks/useReveal";
import renexaHome from "../../assets/renexa-images/renexa-1.png";
import renexaSignup from "../../assets/renexa-images/renexa-2.png";
import renexaLogin from "../../assets/renexa-images/renexa-3.png";
import renexaDashboard from "../../assets/renexa-images/renexa-4.png";
import renexaBookPickup from "../../assets/renexa-images/renexa-5.png";
import renexaReports from "../../assets/renexa-images/renexa-6.png";
import renexaSettings from "../../assets/renexa-images/renexa-7.png";
import renexaAdminEvents from "../../assets/renexa-images/renexa-8.png";

const Projects = () => {

    useReveal();

    const renexaImages = [renexaHome,
                    renexaSignup, 
                    renexaLogin, 
                    renexaDashboard,
                    renexaBookPickup,
                    renexaReports,
                    renexaSettings,
                    renexaAdminEvents
    ];

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % renexaImages.length);
      };
      const previousSlide = () => {
        setCurrentSlide(
            (currentSlide - 1 + renexaImages.length) % renexaImages.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                (prevSlide + 1) % renexaImages.length
            );
        }, 4500);
    
        return () => clearInterval(interval);
    }, []);

  return (
    <main className="projects-container" id="projects">
        <h2 className="reveal reveal-up">Projects</h2>
        <div className="featured-projects">
            <div className="feature-head reveal reveal-up reveal-delay-1">
                <h3>01/ FEATURED PROJECT</h3>
                <h1>ReNexa</h1>
                <p>Waste Management / Recycling Platform</p>
            </div>
            <div className="renexa featured-effect">
                <div className="renexa-images reveal reveal-left reveal-delay-2">
                    <div className="renexa-slider">
                    <img
                        key={currentSlide}
                        src={renexaImages[currentSlide]}
                        alt="Preview project images"
                        className="slide-image"
                        />
                    </div>
                    <div className="slider-controls">
                        <button onClick={previousSlide}>←</button>
                        <div className="slider-dots">
                            {renexaImages.map((image, index) =>(
                                <button
                                    key={index}
                                    className={currentSlide === index ? "dot active-dot" : "dot"}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`View slide ${index + 1}`}
                                    ></button>
                            ))}
                        </div>
                        <button onClick={nextSlide}>→</button>
                    </div>
                </div>
                <div className="renexa-content reveal reveal-right reveal-delay-3">
                    <h4>My Role:</h4>
                    <p>Built responsive React interfaces and integrated the
                    frontend with backend APIs.</p>
                    <h4>Key Features</h4>
                    <ul>
                        <li>Authentication & OTP</li>
                        <li>User Onboarding & Dashboard</li>
                        <li>Booking Services & Management</li>
                        <li>Admin activity logs</li>
                        <li>Responsiveness for desktop and mobile screens</li>
                    </ul>
                    <div className="renexa-tech">
                        <h4>Tech:</h4>
                        <p>React • JavaScript • Vite • CSS • REST APIs
                        • Git • GitHub • Figma</p>
                    </div>
                <div className="renexa-links">
                    <a href="https://renexa.vercel.app/" target="_blank" rel="noopener noreferrer">View Live ↗</a>
                    <a href="https://github.com/TheREBZ/ReNexa-Project.git" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
                </div>
            </div>
            <div className="battleship"></div>
        </div>
        <div className="other-projects"></div>
    </main>
  )
}

export default Projects