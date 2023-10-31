import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <div className='nav-links-container'>
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
              <a href='#contact'>Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>&copy; {year} Johan Fernandez</p>
    </footer>
  );
};

export default Footer;
