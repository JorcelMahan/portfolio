import profilePicture from '../assets/JohanMFC.jpeg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id='profile'>
      <div className='section__pic-container'>
        <img src={profilePicture} alt='Johan Fernandez' />
      </div>
      <div className='section__text'>
        <p className='section__text__p1'>Hello, I&rsquo;m</p>

        <h1 className='title'>Johan Fernandez</h1>
        <p className='section__text__p2'>Full Stack Developer</p>
        <div className='btn-container'>
          <button
            className='btn btn-color-2'
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1b6pQ5h6w1P9L9dQKkxwQZ5E4h2gj5l7G/view?usp=sharing',
                '_blank'
              )
            }
          >
            Download CV
          </button>
          <button
            className='btn btn-color-1'
            onClick={() => (window.location.href = '#contact')}
          >
            Contact Info
          </button>
        </div>
        <div id='socials-container'>
          <img
            src={linkedin}
            alt='linkedin'
            className='icon'
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/johan-fernandez-contreras/',
                '_blank'
              )
            }
          />
          <img src={github} alt='github' className='icon' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
