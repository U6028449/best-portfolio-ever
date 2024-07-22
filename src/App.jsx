import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Resume from './components/Resume'
import { Outlet } from 'react-router-dom'

function App() {
  return (
      <div >
        <SideNav />
        <Outlet />
        {/* <Main />
        <AboutMe />
        <Project />
        <Resume /> */}

     </div> 
  )
}

export default App
