import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <div name='footer' className='w-full h-[15vh]  bg-gradient-to-r from-yellow-400 to-orange-600 flex justify-center items-center'>
        <ul className='flex gap-4 justify-center items-center p-4'>
        
          <li >
            <a
              className=' text-white hover:text-black'
              href='https://www.linkedin.com/in/damandeep--singh/' target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              className=' text-white hover:text-black'
              href='https://github.com/Damandeep27/' target="_blank"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              className=' text-white hover:text-black'
              href='mailto:damandeepdhillon27@gmail.com'
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          
        </ul>

        
    </div>
  )
}

export default Footer