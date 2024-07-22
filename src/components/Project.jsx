import React from 'react'
import weatherAppImage from '../assets/weather app.png'
import heckJumperImage from '../assets/heckjumper blog.png'
import campingProcrastinatorImage from '../assets/camping procrastinator.png'
const Project = () => {
  return (
    <div id='Project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold'>Projects</h1>
        <p className='text-Lg pt-4'>
            Here are some of my Projects that I have worked on. Click on the links to view the projects.
            </p>
            <div className='flex flex-col'>
        <a href='https://u6028449.github.io/blog/' className='text-blue-500 hover:underline'>HeckJumper
           <img src={heckJumperImage}></img>
        </a>
        <a href='https://joel-fischer.github.io/CampingProcrastinator/' className='text-blue-500 hover:underline'>Camping Procrastinator
           <img src={campingProcrastinatorImage}></img>
        </a>
        <a href='https://u6028449.github.io/weather-dashboard/' className='text-blue-500 hover:underline'>Weather Dashboard
           <img src={weatherAppImage}></img>
        </a>
        </div>
    </div>
  )
}

export default Project