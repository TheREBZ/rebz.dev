import RebzLogo from "../RebzLogo/RebzLogo";

import "../../styles/Nav.css";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-container">

      <a
        className="nav-home"
        href="#hero"
        onClick={closeMenu}
      >
        OSAZUWA KELVIN <RebzLogo />
      </a>

      {/* DESKTOP NAV */}
      <div className="nav-content">
        <a href="#about" className="nav-link">
          About
        </a>

        <a href="#projects" className="nav-link">
          Projects
        </a>

        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>

      <div className="nav-icons">
        <a
          href="https://github.com/TheREBZ"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://x.com/Rebzisastar"
          className="twitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* MOBILE MENU BACKDROP */}
      <div
        className={
          menuOpen
            ? "mobile-overlay overlay-open"
            : "mobile-overlay"
        }
        onClick={closeMenu}
      ></div>

      {/* MOBILE SIDE MENU */}
      <div
        className={
          menuOpen
            ? "mobile-menu mobile-menu-open"
            : "mobile-menu"
        }
      >
        <button
          className="menu-close"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="mobile-menu-links">
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="mobile-social-links">
          <a
            href="https://github.com/TheREBZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </a>

          <a
            href="https://x.com/Rebzisastar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
            <span>X</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;