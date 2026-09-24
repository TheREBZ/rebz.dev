import "../../styles/Projects.css";
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
import battleshipVideo from "../../assets/battleship-game.mp4";
import adviceAppImage from "../../assets/side-projects/advice-app.png";
import ecommerceImage from "../../assets/side-projects/e-commerce.png";
import urlShortenerImage from "../../assets/side-projects/url-shortener.png";
import extensionApp from "../../assets/side-projects/extension-app.png";

const Projects = () => {

    useReveal();

    const renexaImages = [
        renexaHome,
        renexaSignup,
        renexaLogin,
        renexaDashboard,
        renexaBookPickup,
        renexaReports,
        renexaSettings,
        renexaAdminEvents
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(
            (currentSlide + 1) % renexaImages.length
        );
    };

    const previousSlide = () => {
        setCurrentSlide(
            (currentSlide - 1 + renexaImages.length)
            % renexaImages.length
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
        <main
            className="projects-container"
            id="projects"
        >

            <h2 className="reveal reveal-up">
                Projects
            </h2>


            <div className="featured-projects">


                {/* =========================
                    RENEXA
                ========================= */}

                <div className="feature-head reveal reveal-up reveal-delay-1">
                    <h3>01/ FEATURED PROJECT</h3>

                    <h1>ReNexa</h1>

                    <p>
                        Waste Management / Recycling Platform
                    </p>
                </div>


                <div className="featured-project renexa featured-effect">

                    <div className="featured-media renexa-media reveal reveal-left reveal-delay-2">

                        <div className="renexa-slider">

                            <img
                                key={currentSlide}
                                src={renexaImages[currentSlide]}
                                alt="ReNexa project preview"
                                className="slide-image"
                            />

                        </div>


                        <div className="slider-controls">

                            <button
                                onClick={previousSlide}
                                aria-label="Previous project image"
                            >
                                ←
                            </button>


                            <div className="slider-dots">

                                {renexaImages.map((image, index) => (

                                    <button
                                        key={index}
                                        className={
                                            currentSlide === index
                                                ? "dot active-dot"
                                                : "dot"
                                        }
                                        onClick={() =>
                                            setCurrentSlide(index)
                                        }
                                        aria-label={`View slide ${index + 1}`}
                                    />

                                ))}

                            </div>


                            <button
                                onClick={nextSlide}
                                aria-label="Next project image"
                            >
                                →
                            </button>

                        </div>

                    </div>


                    <div className="featured-content reveal reveal-right reveal-delay-3">

                        <h4>My Role:</h4>

                        <p>
                            Built responsive React interfaces and
                            integrated the frontend with backend APIs.
                        </p>


                        <h4>Key Features</h4>

                        <ul>
                            <li>Authentication & OTP</li>
                            <li>User Onboarding & Dashboard</li>
                            <li>Booking Services & Management</li>
                            <li>Admin Activity Logs</li>
                            <li>
                                Responsive desktop and mobile interfaces
                            </li>
                        </ul>


                        <div className="featured-tech">
                            <h4>Tech:</h4>

                            <p>
                                React • JavaScript • Vite • CSS •
                                REST APIs • Git • GitHub • Figma
                            </p>
                        </div>


                        <div className="featured-links">

                            <a
                                href="https://renexa.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Live ↗
                            </a>

                            <a
                                href="https://github.com/TheREBZ/ReNexa-Project.git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub ↗
                            </a>

                        </div>

                    </div>

                </div>



                {/* =========================
                    BATTLESHIP SPACE
                ========================= */}

                <div className="feature-head reveal reveal-up">

                    <h3>02/ FEATURED PROJECT</h3>

                    <h1>Battleship Space</h1>

                    <p>
                        Retro Arcade Shooter Game
                    </p>

                </div>


                <div className="featured-project battleship featured-effect">

                    <div className="featured-media battleship-media reveal reveal-left reveal-delay-2">
                        <div className="battleship-video-wrapper">                            
                            <video
                                className="battleship-video"
                                src={battleshipVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <div className="gameplay-label">
                                <span className="gameplay-dot"></span>
                                Gameplay
                            </div>
                        </div>
                    </div>


                    <div className="featured-content reveal reveal-right reveal-delay-3">

                        <h4>My Role:</h4>

                        <p>
                            Designed and built the game interface,
                            gameplay interactions, controls and core
                            game logic using JavaScript and React.
                        </p>


                        <h4>Key Features</h4>

                        <ul>
                            <li>Interactive arcade gameplay</li>
                            <li>Player and enemy combat system</li>
                            <li>Custom movement and attack controls</li>
                            <li>Game state and win/loss tracking</li>
                            <li>
                                Responsive mobile controls and desktop interface
                            </li>
                        </ul>


                        <div className="featured-tech">

                            <h4>Tech:</h4>

                            <p>
                                React • JavaScript • CSS •
                                Vite • Git • GitHub
                            </p>

                        </div>


                        <div className="featured-links">

                            <a
                                href="https://battle-ship-space.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Play Game ↗
                            </a>

                            <a
                                href="https://github.com/TheREBZ/BATTLE-SHIP-SPACE_GAME.git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub ↗
                            </a>

                        </div>

                    </div>

                </div>

            </div>


            <div className="other-projects">
                    <h2 className="other-projects-header">
                        Other Projects
                    </h2>
                    <div className="projects">
                        <div className="project-card extension-app reveal project-reveal-left">
                            <div className="project-card-image extension-app-image">
                                <img src={extensionApp}/>
                            </div>
                            <div className="project-card-content link-shortener-content">
                                <h4>Browser Extension App</h4>
                                <h4>Tech</h4>
                                <p>HTML • CSS • JavaScript • Git • GitHub</p>
                                <div className="project-card-links">
                                    <a
                                        href="https://browser-extension-app-orcin.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Live ↗
                                    </a>
                                    <a
                                        href="https://github.com/TheREBZ/browser-extension-app.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card link-shortener reveal project-reveal-left">
                            <div className="project-card-image link-shortener-image">
                                <img src={urlShortenerImage}/>
                            </div>
                            <div className="project-card-content link-shortener-content">
                                <h4>URL Link Shortener</h4>
                                <h4>Tech</h4>
                                <p>React • JavaScript • CSS • Vite • Git • GitHub</p>
                                <div className="project-card-links">
                                    <a
                                        href="https://github.com/TheREBZ/url-link-shortener-app.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card ecommerce reveal project-reveal-center project-delay-1">
                            <div className="project-card-image ecommerce-image">
                                <img src={ecommerceImage}/>
                            </div>
                            <div className="project-card-content ecommerce-content">
                                <h4>E-Commerce Store</h4>
                                <h4>Tech</h4>
                                <p>React • Tailwind CSS • JavaScript • Git • GitHub</p>
                                <div className="project-card-links">
                                    <a
                                        href="https://product-list-with-cart-mu-ten.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Live ↗
                                    </a>
                                    <a
                                        href="https://github.com/TheREBZ/e-commerce-store.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card advice-app reveal project-reveal-right project-delay-2">
                            <div className="project-card-image advice-app-image">
                                <img src={adviceAppImage}/>
                            </div>
                            <div className="project-card-content advice-app-content">
                                <h4>Advice Generator App</h4>
                                <h4>Tech</h4>
                                <p>HTML • CSS • JavaScript • REST API • Git • GitHub</p>
                                <div className="project-card-links">
                                    <a
                                        href="https://advice-generator-one-taupe.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Live ↗
                                    </a>
                                    <a
                                        href="https://github.com/TheREBZ/advice-generator.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="more-work reveal reveal-up">
                <p>
                    I’m usually always building something. You’ll find the rest here.
                </p>
                <a
                    href="https://github.com/TheREBZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-work-link"
                >
                    Visit My GitHub ↗
                </a>
            </div>

        </main>
    );
};

export default Projects;