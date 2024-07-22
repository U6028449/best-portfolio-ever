import React, { useState }from 'react';
import { AiOutlineMenu, 
  AiOutlineHome, 
  AiOutlineProject, 
  AiOutlineMail,
 } from 'react-icons/ai';
 import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

export const SideNav = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    console.log('state changed')
  }

  return (
    <div>
      <AiOutlineMenu 
         onClick={handleNav} 
         className='absolute top-4 right-4 z-[99] md:hidden' 
        />
      
        {nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
               <a 
                 href="#main" 
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover":scale-110 cursor-pointer hover:scale-110 ease-in duration-200'
               >
                <AiOutlineHome size={20} />
                <span className='pl-4'>Home</span>
               </a>
            
               <a
               href='#About Me'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover":scale-110 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                <GrProjects size={20} />
                <span className='pl-4'>About Me</span>
                </a>

               <a
               href='#Project'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover":scale-110 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                <AiOutlineProject size={20} />
                <span className='pl-4'>Projects</span>
                </a>

                
               <a
               href='#resume'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover":scale-110 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                <BsPerson size={20} />
                <span className='pl-4'>Resume</span>
                </a>

                <a
               href='#contact'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover":scale-110 cursor-pointer hover:scale-110 ease-in duration-200'
                >
                <AiOutlineMail size={20} />
                <span className='pl-4'>mail</span>
                </a>

                
            </div>
        ) : (
          ''
        )}
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href='#main' className='rounded-full shadow-lg bg-blue-500 shadow-grey-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome style={{ color: 'gold' }} size={20} />
            </a>
            <a href='#About Me' className='rounded-full shadow-lg bg-red-500 shadow-grey-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <GrProjects style={{ color: 'gold' }} size={20} />
            </a>
            <a href='#Project' className='rounded-full shadow-lg bg-green-500 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineProject style={{ color: 'gold' }} size={20} />
            </a>
            <a href='#resume' className='rounded-full shadow-lg bg-purple-500 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsPerson style={{ color: 'gold' }} size={20} />
            </a>
            <a href='#contact' className='rounded-full shadow-lg bg-pink-500 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail style={{ color: 'gold' }} size={20} />
            </a>
          </div>
        </div>
        </div>
  );
}
       
export default SideNav;