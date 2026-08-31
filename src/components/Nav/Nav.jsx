import "../../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";



const Nav = () => {
  return (
      <nav className="nav-container">
          <h1 className="nav-home">OSAZUWA KELVIN <strong>[REBZ]</strong></h1>

          <div className="nav-content">
            <a href="#about" className="about">About</a>
            <a href="" className="projects">Projects</a>
            <a href="" className="contact">Contact</a>
          </div>

          <nav className="nav-icons">
            <a
              href="https://github.com/TheREBZ" className="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://x.com/Rebzisastar" className="twitter" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </nav>
      </nav>
  )
}

export default Nav