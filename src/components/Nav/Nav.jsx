import "../../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";



const Nav = () => {
  return (
      <nav className="nav-container">
          <h1>OSAZUWA KELVIN <strong>[REBZ]</strong></h1>

          <div className="nav-content">
            <p className="about">About</p>
            <p className="projects">Projects</p>
            <p className="contact">Contact</p>
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