import "../../styles/Hero.css";

const Hero = () => {
    return (
        <section className="hero-main-container" id="hero">

          <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">
                Building interfaces,
            </span>

            <span className="hero-line hero-line-2">
                people "REALLY" enjoy using.
            </span>
          </h1>
          <p>
              I enjoy turning ideas into responsive, intuitive and enjoyable
              web experiences that are easy on the eyes and genuinely simple to use.
          </p>

          <div className="hero-buttons-container">
              <button>Preview CV</button>
          </div>

          </div>

        </section>
    );
};

export default Hero;