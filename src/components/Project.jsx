import React from 'react'
import weatherAppImage from '../assets/weather app.png'
import heckJumperImage from '../assets/heckjumper blog.png'
import saltFlatImage from '../assets/saltflat2.jpg'
import campingProcrastinatorImage from '../assets/camping procrastinator.png'
import logoGeneratorImage from '../assets/logo generator.png'
import noteTakerImage from '../assets/note taker.png'
import superOnlineStoreImage from '../assets/super online store.png'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div id='main' className='relative h-screen'>
      <img
          className='w-full h-screen object-cover' 
          src={saltFlatImage} 
          alt='/'
      />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-white/50'>
  <h1 className='text-4xl font-bold text-white'>Projects</h1>
  <p className='text-xl font-bold text-blue-800 pt-4'>
    Here are some of my Projects that I have worked on. Click on the links to view the projects.
  </p>

  <div className='flex flex-row justify-center space-x-4'>
    <Link to='https://u6028449.github.io/blog/' className='m-4 p-8 text-blue-800 text-bold hover:underline flex flex-col items-center'>
      <img src={heckJumperImage} className='w-[200px] h-[200px]' alt='HeckJumper'></img>
      <div>HeckJumper</div>
    </Link>

    <Link to='https://joel-fischer.github.io/CampingProcrastinator/' className='m-4 p-8 text-blue-800 hover:underline flex flex-col items-center'>
      <img src={campingProcrastinatorImage} className='w-[200px] h-[200px]' alt='Camping Procrastinator'></img>
      <div>Camping Procrastinator</div>
    </Link>

    <Link to='https://u6028449.github.io/weather-dashboard/' className='m-4 p-8 text-blue-800 hover:underline flex flex-col items-center'>
      <img src={weatherAppImage} className='w-[200px] h-[200px]' alt='Weather Dashboard'></img>
      <div>Weather Dashboard</div>
    </Link>
  </div>

  <div className='flex flex-row justify-center space-x-4 mt-0'>
    <Link to='/https://github.com/U6028449/Note-taker' className='m-4 p-8 text-blue-800 hover:underline flex flex-col items-center'>
      <img src={noteTakerImage} className='w-[200px] h-[200px]' alt='Note Taker'></img>
      <div>Note Taker</div>
    </Link>

    <Link to='/https://github.com/U6028449/Logo-generator' className='m-4 p-8 text-blue-800 hover:underline flex flex-col items-center'>
      <img src={logoGeneratorImage} className='w-[200px] h-[200px]' alt='Logo Generator'></img>
      <div>Logo-Generator</div>
    </Link>

    <Link to='/https://github.com/U6028449/super-online-store/tree/main' className='m-4 p-8 text-blue-800 hover:underline flex flex-col items-center'>
      <img src={superOnlineStoreImage} className='w-[200px] h-[200px]' alt='Super Online Store'></img>
      <div>Super Online Store</div>
    </Link>
  </div>
</div>
 </div>
        
      
  )
}

export default Project