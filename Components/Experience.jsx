import './Experience.css';
import arrow from '../assets/arrow.png';
import checkmark from '../assets/checkmark.png';

const Experience = () => {
  return (
    <section id='experience'>
      <p className='section__text__p1'>Explore My</p>
      <h1 className='title'>Experience</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          <div className='details-container'>
            <h2 className='experience-sub-title'>Full Stack Developer</h2>
            <div className='article-container'>
              <article>
                <img src={checkmark} alt='checkmark' className='icon' />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt='checkmark' className='icon' />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt='checkmark' className='icon' />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className='details-container'>
            <h2 className='experience-sub-title'>Backend Developer</h2>
            <div className='article-container'>
              <article>
                <img src={checkmark} alt='checkmark' className='icon' />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt='checkmark' className='icon' />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt='checkmark' className='icon' />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt='Arrow'
        className='icon arrow'
        onClick={() => (window.location.href = '#contact')}
      />
    </section>
  );
};

export default Experience;
