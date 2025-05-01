import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import 'normalize.css';

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import MobileNav from './components/MobileNav/MobileNav';
import Work from './components/Work/Work';
import Values from './components/Values/Values';
import Landing from './components/Landing/Landing'
import Contact from './components/Contact/Contact'

import './styles/variables.css';

function App() {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  
    const timer = setTimeout(() => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }, 2700);
  
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Landing />
      <MobileNav />
      <Nav />
      <Hero />
      <Work />
      <Values />
      <Contact />
    </>
  );
}

export default App;
