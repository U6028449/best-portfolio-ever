import React from 'react'
import resumePDF from '../assets/GrangerJST.pdf'
import saltFlatsImage from '../assets/salt flats.jpg'

const Resume = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center h-screen"
      style={{ backgroundImage: `url(${saltFlatsImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      
      <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-2xl font-bold text-white">Resume</h1>
        <p className="mt-4 text-white">My resume is currently under construction. Please feel free to download my Joint Service Transcript.</p>
        <div className="mt-6">
           {/* <a href="mailto:patrick.granger@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  */}
            {/* Contact Me */}
          {/* </a>  */}
          {/* PDF Download Button */}
          <a href={resumePDF} download className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Download Joint Service Transcript
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume