import { SERVICES } from '@/constants'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-32 md:gap-28
    lg:py-20 xl:flex-row' id='servicios'>
      {/* title */}
      <div className='text-center text-[18px] font-[700] uppercase tracking-[1rem] text-blue-500 pb-20'>
        Services
      </div>
      <ul className='mt=10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
        {
          SERVICES.map((skill) => (
            <ServiceItem
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default Services

type ServiceItem = {
  title: string;
  icon: string;
  description: string;
}

const ServiceItem = ( { title, icon, description} : ServiceItem) => {
  return (
    <li className='relative flex w-full flex-1 flex-col items-center text-center shadow-[0_35px_40px_-15px_rgba(0,0,0,0.2)]
    rounded-2xl p-10 hover:bg-blue-500 group duration-[1200ms] transition'>
      <div className='rounded-full p-5 bg-blue-500 absolute -top-8 group-hover:bg-black'>
        <Image
          src={icon}
          alt="map"
          width={28}
          height={28}
        />
      </div>
      <h3 className='text-[20px] font-[600] lg:text-[22px] font-[600]; mt-6 capitalize group-hover:text-white'>{title}</h3>
      <p className='text-[16px] font-[400] text-gray-30 mt-4 group-hover:text-white '>{description}</p>
    </li>
  )
}