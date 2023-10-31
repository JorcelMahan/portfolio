import './Contact.css';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';

const Contact = () => {
  return (
    <section id='contact'>
      <p className='section__text__p1'>Get it Touch</p>
      <h1 className='title'>Contact Me</h1>
      <div className='contact-info-upper-container'>
        <div className='contact-info-container'>
          <img
            src={email}
            alt='email'
            className='icon contact-icon email-icon'
          />
          <p>
            <a href='mailto:johanmfc11@gmail.com'>johanmfc11@gmail.com</a>
          </p>
        </div>
        <div className='contact-info-container'>
          <img src={linkedin} alt='linkedin' className='icon contact-icon' />
          <p>
            <a
              href='https://www.linkedin.com/in/johanfernandez1995'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
