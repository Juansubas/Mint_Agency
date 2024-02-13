"use client"
import { FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import { Link } from 'react-scroll'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-container padding-container bg-green-90 bg-pattern bg-cover bg-center
    bg-no-repeat px-6 pt-24 pb-8 text-white'>
      <div className='flex flexBetweeen flex-col gap-14 md:flex-row items-center pb-16'>
        <ul>
        {
            FOOTER_LINKS.map((link)=>(
              <Link 
                activeClass="active" 
                to= {link.href} 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                key={link.key} className='p-4 text-[15px] font-[500] hover:text-blue-500'
              >
                {link.label}
              </Link>
            ))
          }  
        </ul>
        <ul className='regular-14 flex gap-4 text-gray-30'>
            {
              SOCIALS.map((social)=>(
                <Link 
                  activeClass="active" 
                  to= {social.href} 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500} 
                  key={social.key} className='h-10 w-10 border-[0.01rem]
                  border-gray-20 flexCenter rounded-full hover:bg-blue-500 hover:border-blue-500
                  transition-all'
                >
                  <Image src={social.imgURL} alt={social.key} width={20} height={20} className='invert-[100]'/>
                </Link>
              ))
            }
        </ul>
      </div>
      <hr  className='border-none outline-none h-[0.01rem] bg-gray-20 my-8'/>
      <div className="text-center">This website is made By Juansubas</div>
    </footer>
  )
}

export default Footer