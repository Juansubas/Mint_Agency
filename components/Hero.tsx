"use client"
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32
    md:gap-28 lg:py-20 lg:flex-row' id='home'>
      <span className='max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400
      rounded-full shadow-lg blur-[7rem] -z-10'></span>
      {/*left */}
      <article className='relative z-20 flex flex-1 flex-col pt-16 pb-0'>
        <h4 className='bold-20'>Bienvenido,</h4>
        <h1 className='bold-48 lg:bold-64 relative'>Somos Mint</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize'>
          te ayudamos con <br />
          <span>
            <Typewriter
              words={['Desarrollo Web', 'Marketing', 'Desarrollo Movil', 'Publicidad']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className='regular-16 max-w-[555px] my-4'>
          Nos dedicamos a impulsar tu negocio y ayudarte a alcanzar tus deseadas metas desde la automatizacion digital.
        </p>
        {/* <div className='my-5  flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {
              Array(5).fill(1).map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt='star'
                  height={24}
                  width={24}
                />
              ))
            }
          </div>
          <p className='bold-18 lg:bold-20'>1100 + <span className='regular-16 lg:regular-20'> Excellent Reviews</span></p>
        </div> */}
        <div className='flexStart flex-col lg:flexStart lg:flex-row gap-1 pt-6 text-white'>
            <Button
              type="button"
              title="Contactanos"
              icon="/contact.svg"
              variant="btn_dark_rounded"
              sectionId="contact"
            />
            <a href="https://www.un.org/waterforlifedecade/pdf/waterforlifebklt-s.pdf" target='_blanket'>
              <Button
                type="button"
                title="Descargar Brochure"
                icon="/download.svg"
                variant="btn_dark_rounded"
              />
            </a>
        </div>
      </article>

      <div className='flex xl:flex-1 xl:flexEnd justify-center '>
        <Image
          src="/developer.png"
          alt='developer'
          width={488}
          height={488}
          className='w-[85%]'
        />
      </div>
    </section>
  )
}

export default Hero