import React from 'react'
import weatherAppImage from '../assets/weather app.png'
import heckJumperImage from '../assets/heckjumper blog.png'
import campingProcrastinatorImage from '../assets/camping procrastinator.png'
const Project = () => {
  return (
    <div id='Project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-yellow-500'>
    <h1 className='text-4xl font-bold'>Projects</h1>
    <p className='text-Lg pt-4'>
        Here are some of my Projects that I have worked on. Click on the links to view the projects.
    </p>
    <div className='flex flex-row justify-between'>
        <a href='https://u6028449.github.io/blog/' className='p-4 text-blue-800 hover:underline'>HeckJumper
            <img src={heckJumperImage} className='w-[200px] h-[150px]'></img>
        </a>
        <a href='https://joel-fischer.github.io/CampingProcrastinator/' className='p-4 text-blue-800 hover:underline'>Camping Procrastinator
            <img src={campingProcrastinatorImage} className='w-[200px] h-[150px]'></img>
        </a>
        <a href='https://u6028449.github.io/weather-dashboard/' className='p-4 text-blue-800 hover:underline'>Weather Dashboard
            <img src={weatherAppImage} className='w-[200px] h-[150px]'></img>
        </a>
    </div>
</div>
  )
}

export default Project