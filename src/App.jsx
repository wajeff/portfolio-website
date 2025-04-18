import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import 'normalize.css';

// import Sidebar from './components/Sidebar/Sidebar'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import MobileNav from './components/MobileNav/MobileNav';
import Work from './components/Work/Work';


function App() {

  return (
    
    <>
      <MobileNav/>
      <Nav/>
      <Hero/>
      <Work/>
    </>
  )
}

export default App
