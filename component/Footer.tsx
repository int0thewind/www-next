import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const ICON_SIZE = 32;

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-icon-container">
        <a href="mailto:yinhanzhi@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope size={ICON_SIZE} className="footer-icon" />
        </a>
        <a href="https://www.github.com/int0thewind" target="_blank" rel="noreferrer">
          <FaGithubSquare size={ICON_SIZE} className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/hanzhi-yin-5b30a2189" target="_blank" rel="noreferrer">
          <FaLinkedin size={ICON_SIZE} className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}
