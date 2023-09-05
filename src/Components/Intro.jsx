import React from 'react';
import './Intro.css';
import bg from '../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../assets/hireme.png';

const Intro = () => {
  return (
    <>
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introtext'>I'm <span className='introName'>Sweety Prasad</span><br/>Front End Developer</span>
                <p className='introPara'>I am web developer, and I am able to create user friendly websites using my technical skills.</p>
                <Link><button className='btn'><img src={btnImg} alt="btn-img" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt='profile' className='bg'/>
            
        </section><br/>
      
    </>
  )
}

export default Intro;
