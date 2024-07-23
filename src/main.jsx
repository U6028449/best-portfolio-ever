import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './components/LandingPage.jsx'
import AboutMe from './components/AboutMe.jsx'
import Project from './components/Project.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { RouterProvider } from 'react-router'


import { createBrowserRouter } from 'react-router-dom'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'about-me',
        element: <AboutMe />
      },
      {
        path: 'project',
        element: <Project />
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      { path: 'footer',
        element: <Footer />
      }
    ]
  }
 ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
