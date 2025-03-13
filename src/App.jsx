import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'normalize.css';

// import Sidebar from './components/Sidebar/Sidebar'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import MobileNav from './components/MobileNav/MobileNav';


function App() {

  return (
    
    <>
      <MobileNav/>
      <Nav/>
      <Hero/>

    </>
  )
}

export default App
