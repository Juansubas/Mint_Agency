"use client"
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'

const About = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7]' id='about'>
      <div className='text-center text-[18px] font-[700] uppercase tracking-[1rem] text-blue-500 pb-20'>
        ¿Quienes somos?
      </div>
      <div className='flex flex-col gap-20 md:gap-28 xl:flex-row'>
        <div className='flex-1 flex items-center justify-center flex-col m-auto'>
          <p className='mb-4 pl-5'>
            <span className='font-extrabold'>MINT</span> es una empresa vanguardista dedicada al desarrollo de software y servicios integrales de marketing, comprometida con la transformación digital de las empresas. 
          </p>
          <p className={`mb-8 pl-5 transition-max-height duration-[4000ms] ease-in-out overflow-hidden ${visible ? "max-h-[1000px]" : "max-h-0"}`}>
            <span className='font-extrabold'>EN MINT</span> Nuestro equipo está conformado por profesionales altamente capacitados y apasionados por la innovación, cuya misión es potenciar el crecimiento y la presencia online de nuestros clientes.
          </p>
          <Button
                type="button"
                title="Leer mas"
                icon="/more.svg"
                variant="border-green-90 bg-green-90 px-6 py-3 text-white transition-all hover:bg-black"
                onButtonClick={toggleVisibility}
              />
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <Image src="/about.jpg" alt="about" height={400} width={400} className="w-auto rounded-lg shadow-sm"/>
        </div>
      </div>
    </section>
  )
}

export default About