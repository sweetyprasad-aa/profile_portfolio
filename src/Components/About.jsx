import React from 'react';
import './About.css';
import uiDesign from '../assets/ui-design.png';
import webDesign from '../assets/website-design.png';
// import  appDesign from '../assets/app-design.png';

const About = () => {
  

  return (
    <>
        <section id='about'>
          <span className='aboutTitle'><h2>What I do</h2>
          </span>
          <span className='aboutDesc'> I specialize in front-end development, bringing websites to life with HTML, CSS, and JavaScript. With a keen eye for design and a knack for creating seamless user experiences, I craft interactive and visually appealing interfaces. My portfolio showcases a collection of projects that highlight my abouts in building responsive and engaging web applications that leave a lasting impression.</span>
          <div className='aboutBars'>
            <div className='aboutbar'>
              <img src={uiDesign} alt='ui' className='aboutBarimg'/>
              <div className='aboutBarText'>
                <h2>UI/UX Design</h2>
                <p>This Is create UI part of web development</p>
              </div>
            </div>
            <div className='aboutbar'>
              <img src={webDesign} alt='web' className='aboutBarimg'/>
              <div className='aboutBarText'>
                <h2>Website Design</h2>
                <p>I can design website using my skills.</p>
              </div>
            </div>
          </div><br/>
        </section>
    </>
  );
};

export default About;
