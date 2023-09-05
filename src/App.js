import React from 'react';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
export default App;