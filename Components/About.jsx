import './About.css';
import profilePicture from '../assets/JohanMFC.jpeg';
import experience from '../assets/experience.png';
import education from '../assets/education.png';
import arrow from '../assets/arrow.png';

const About = () => {
  return (
    <section id='about'>
      <p className='section__text__p1'>Get to Know More</p>
      <h1 className='title'>About Me</h1>
      <div className='section-container'>
        <div className='section__pic-container'>
          <img
            src={profilePicture}
            alt='Profile Picture'
            className='about-pic'
          />
        </div>
        <div className='about-details-container'>
          <div className='about-containers'>
            <div className='details-container'>
              <img src={experience} alt='Experience' className='icon' />
              <h3>Experience</h3>
              <p>
                3 + years <br />
                Full Stack Developer
              </p>
            </div>
            <div className='details-container'>
              <img src={education} alt='Education' className='icon' />
              <h3>Education</h3>
              <p>
                3 + years <br />
                Full Stack Developer
              </p>
            </div>
          </div>
          <div className='text-container'>
            <p>
              I am a Full Stack Developer with 3 years of experience in
              developing web applications using React, Node, Express, and
              MongoDB. I have a Bachelor&rsquo;s degree in Computer Science
              Engineering and a Master&rsquo;s degree in Computer Science. I
              have a passion for learning and I am always looking for new
              challenges and opportunities to grow as a developer.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt='Arrow'
        className='icon arrow'
        onClick={() => (window.location.href = '#experience')}
      />
    </section>
  );
};

export default About;
