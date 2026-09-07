import RebzLogo from "../RebzLogo/RebzLogo";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <a href="#hero" className="footer-logo">
          <RebzLogo />
        </a>

        <p className="footer-credit">
          Designed & built by Kelvin
        </p>

        <p className="footer-copy">
          © 2026
        </p>

      </div>
    </footer>
  );
};

export default Footer;