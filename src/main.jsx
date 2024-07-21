import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { createBrowserRouter } from 'react-router-dom'

//  const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <App />,
// //     children: [
// //       {
// //         index: true,
// //         element: <LandingPage />
// //   }
//  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)