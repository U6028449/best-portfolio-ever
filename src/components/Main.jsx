import React from 'react'
import raceTrackerImage from '../assets/racetracker_1755512_464290.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
      <div id='main' className='relative h-screen'>
    <img
        className='w-full h-screen object-cover' 
        src={raceTrackerImage} 
        alt='/'
    />
    <div className='w-full h-screen absolute top-0 left-0 bg-black/50' />
    <div className='absolute top-0 left-0 max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
    <h1 className='sm:text-5xl text-4 font-bold'style={{ color: 'gold'}}>I'm Patrick Granger</h1>
    <h2 style={{ color: 'gold'}}>I'm a
        <TypeAnimation
            sequence={[
                'Full Stack Web Developer',
                3000, // Delay in milliseconds   
            ]}
            wrapper="div"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '5px' }}
            repeat={Infinity}
        />
    </h2>
    <div className='flex'>
        <FaTwitter className='cursor-pointer'style={{ color: 'gold'}} size={20} />
        <FaGithub className='cursor-pointer'style={{ color: 'gold'}} size={20} />
        <FaLinkedin className='cursor-pointer'style={{ color: 'gold'}} size={20} />
        <FaInstagram className='cursor-pointer'style={{ color: 'gold'}} size={20} />
    </div>
</div>
</div>
  )
}

export default Main