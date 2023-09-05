import React from 'react';
import ContactImg from '../assets/contact.png' 
import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = ()=> {
  return (
    <>
        <nav className='navbar'>
            <h3>Sweety Prasad</h3>
            {/* <img src ={Logo} alt="logo" className="navbar_logo"/> */}
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">contact</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src= {ContactImg} alt='contact-img' className='desktopMenuImg' />Contact Me
            </button>
        </nav>
        
      
    </>
  )
}
export default Navbar
