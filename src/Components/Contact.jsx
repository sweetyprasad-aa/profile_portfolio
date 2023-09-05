import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <h2 className='contactTitle'>Contact</h2>
        <span className='contactDesc'>Plz reach out to me using these contact</span>
        <form className='contactForm'>
          <input type='text' name='name' placeholder='Enter your name' className='inputField'/>
          <input type='text' name='email' placeholder='Enter your email' className='inputField'/>
          <textarea type='text' name='message' cols='30' rows='5' placeholder='your message'/>
          <button className='btn' value='send' type='submit'>Submit</button>
        </form>
      </section>
    </>
    // <section id="contact">
    //   <h2>Contact Me</h2>
    //   <p>
    //     Feel free to reach out to me at{' '}
    //     <a href="mailto:youremail@example.com">youremail@example.com</a>.
    //   </p>
    //   <div className="social-links">
    //     <a href="#" target="_blank" rel="noopener noreferrer">
    //       LinkedIn
    //     </a>
    //     <a href="#" target="_blank" rel="noopener noreferrer">
    //       Twitter
    //     </a>
    //     {/* Add more social links */}
    //   </div>
    // </section>
  );
};

export default Contact;
