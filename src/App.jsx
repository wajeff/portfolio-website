import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'normalize.css';

// import Sidebar from './components/Sidebar/Sidebar'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <>

      <Nav/>
      <Hero/>

    </>
  )
}

export default App
