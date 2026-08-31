import { useEffect, useRef } from "react";
import "../../styles/About.css"

const About = () => {
    const techStackRef = useRef(null);

    useEffect(() => {
    const techStack = techStackRef.current;

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            const bars = techStack.querySelectorAll(".skill-progress");

            bars.forEach((bar) => {
            bar.classList.add("animate");
            });

            observer.unobserve(techStack);
        }
        },
        {
        threshold: 0.3,
        }
    );

    if (techStack) {
        observer.observe(techStack);
    }

    return () => {
        if (techStack) {
        observer.unobserve(techStack);
        }
    };
    }, []);
  return (
    <main className="about-container" id="about">
        <h2 className="about-header ">
            About Me
        </h2>
        <section className="about-content">
            <div>
                <p>
                I'm Kelvin, a Frontend Developer who likes to turn ideas and designs into responsive, interactive web experiences that feel good to use. <br />
                I care about the little details from how an interface looks and responds, to keeping the code behind it clean and organized. I'm always learning, building, and finding better ways to create refined products for the web.<br />
                I also bring years of experience from the <strong>Web3 space</strong>, which has given me a strong understanding of digital communities, products, and how people interact with technology.
                </p>
            </div>
            <div className="tech-stack" ref={techStackRef}>
            <h2>Tech Stack</h2>

            <div className="tech-row">
                <h3>Frontend</h3>

                <div className="tech-items">
                <div className="skill">
                    <span>HTML</span>
                    <div className="skill-bar">
                    <div className="skill-progress html"></div>
                    </div>
                </div>

                <div className="skill">
                    <span>CSS</span>
                    <div className="skill-bar">
                    <div className="skill-progress css"></div>
                    </div>
                </div>

                <div className="skill">
                    <span>JavaScript</span>
                    <div className="skill-bar">
                    <div className="skill-progress javascript"></div>
                    </div>
                </div>

                <div className="skill">
                    <span>TypeScript</span>
                    <div className="skill-bar">
                    <div className="skill-progress typescript"></div>
                    </div>
                </div>

                <div className="skill">
                    <span>React</span>
                    <div className="skill-bar">
                    <div className="skill-progress react"></div>
                    </div>
                </div>
                </div>
            </div>

            <div className="tech-row">
                <h3>Tools</h3>

                <div className="tech-items">
                <div className="skill">
                    <span>Vite</span>
                    <div className="skill-bar">
                    <div className="skill-progress vite"></div>
                    </div>
                </div>

                <div className="skill">
                    <span>Git / GitHub</span>
                    <div className="skill-bar">
                    <div className="skill-progress git"></div>
                    </div>
                </div>

                <div className="skill">
                    <span>Figma</span>
                    <div className="skill-bar">
                    <div className="skill-progress figma"></div>
                    </div>
                </div>
                </div>
            </div>

            <div className="tech-row">
                <h3>Integration</h3>

                <div className="tech-items">
                <div className="skill">
                    <span>REST APIs</span>
                    <div className="skill-bar">
                    <div className="skill-progress api"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </main>
  )
}

export default About