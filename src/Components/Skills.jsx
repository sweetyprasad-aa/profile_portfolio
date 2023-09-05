import React from 'react';
import portfolio1 from '../assets/html.png';
import portfolio2 from '../assets/css.png';
import portfolio3 from '../assets/js.png';
import portfolio4 from '../assets/react.png';
import portfolio5 from '../assets/nodejs.jpg';
import portfolio6 from '../assets/mongodb.jpg';
import portfolio7 from '../assets/github.png';
import portfolio8 from '../assets/python.png';

import './Skills.css';

const Skills = () => {
  return (
  
    <>
      <section id='skills'>
          <h2 className='skillTitle'>Skills</h2>
          <span className='skillDesc'>I specialize in front-end development, bringing websites to life with HTML, CSS, and JavaScript. With a keen eye for design and a knack for creating seamless user experiences, I craft interactive and visually appealing interfaces. </span>
          <div className='skillImgs'>
            <img src={portfolio1} alt='' className='skillImg' />
            <img src={portfolio2} alt='' className='skillImg' />
            <img src={portfolio3} alt='' className='skillImg' />
            <img src={portfolio4} alt='' className='skillImg' />
            <img src={portfolio5} alt='' className='skillImg' />
            <img src={portfolio6} alt='' className='skillImg' />
            <img src={portfolio7} alt='' className='skillImg' />
            <img src={portfolio8} alt='' className='skillImg' />
          </div>
      </section>
    </>
  )
}

export default Skills;