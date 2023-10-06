import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav id='desktop-nav'>
        <div className='logo'>Johan Fernandez</div>
        <div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div className='logo'>Johan Fernandez</div>
        <div className='hamburger-menu'>
          <div
            className={`hamburger-icon ${isActive ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`menu-links ${isActive ? 'open' : ''}`}>
            <li>
              <a href='#about' onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href='#experience' onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
