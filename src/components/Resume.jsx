import React from 'react'
import resumePDF from '../assets/GrangerJST.pdf'
const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Resume</h1>
      <p className="mt-4">My resume is currently under construction. For more details about my professional experience, please reach out to me directly or visit my LinkedIn profile.</p>
      <div className="mt-6">
        <a href="mailto:patrick.granger@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </a>
        {/* PDF Download Button */}
        <a href={resumePDF} download className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume