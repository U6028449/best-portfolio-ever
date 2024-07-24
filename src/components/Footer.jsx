import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='flex mt-2 gap-2'>
        <FaTwitter className='cursor-pointer' style={{ color: 'gold'}} size={36} />
        <a href="https://github.com/U6028449" target="_blank" rel="noopener noreferrer">
          <FaGithub className='cursor-pointer' style={{ color: 'gold'}} size={36} />
        </a>
        <FaLinkedin className='cursor-pointer' style={{ color: 'gold'}} size={36} />
        <FaInstagram className='cursor-pointer' style={{ color: 'gold'}} size={36} />
    </div>
  )
}

export default Footer