import "../../styles/Hero.css"

const Hero = () => {
  return (
    <section className="hero-main-container">
      <div className="hero-image-container">
      </div>
      <div className="hero-text-container">
        <h1 className="hero-title"><span>Building interfaces, <br /> people enjoy using.</span></h1>
        <p>I'm a Frontend Developer who enjoys turning ideas into responsive, intuitive and enjoyable web experiences using React and modern JavaScript.</p>
        <div className="hero-buttons-container">
          <button>View Projects</button>
          <button>Preview CV</button>
        </div>
      </div>
    </section>
  )
}

export default Hero