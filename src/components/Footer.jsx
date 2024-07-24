import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='flex mt-2 gap-2'>
        <FaTwitter className='cursor-pointer' style={{ color: 'gold'}} size={36} />
        <a href="https://github.com/U6028449" target="_blank" rel="noopener noreferrer">
          <FaGithub className='cursor-pointer' style={{ color: 'gold'}} size={36} />
        </a>
        <a href="https://www.linkedin.com/in/patrick-granger-9264807/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='cursor-pointer'style={{ color: 'gold'}} size={36} />
        </a>
        <FaInstagram className='cursor-pointer' style={{ color: 'gold'}} size={36} />
    </div>
  )
}

export default Footer