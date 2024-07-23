import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Resume from './components/Resume'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
      <div >
        <SideNav />
        <Outlet />
        <Footer />
        {/* <Main />
        <AboutMe />
        <Project />
        <Resume /> */}

     </div> 
  )
}

export default App
