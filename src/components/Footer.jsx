import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='flex mt-2 gap-2'>
        <FaTwitter className='cursor-pointer'style={{ color: 'gold'}} size={36} />
        <FaGithub className='cursor-pointer'style={{ color: 'gold'}} size={36} />
        <FaLinkedin className='cursor-pointer'style={{ color: 'gold'}} size={36} />
        <FaInstagram className='cursor-pointer'style={{ color: 'gold'}} size={36} />
    </div>
  )
}

export default Footer