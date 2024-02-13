"use client"
import { PORTFOLIO } from '@/constants'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from './Button'

const Portfolio = () => {

  return (
    <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20' id='portfolio'>
      <div className='text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20'>
        Portafolio
      </div>
      <ul className='mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto'>
        {
          PORTFOLIO.map((portfolio) => (
            <PortfolioItem
              key={portfolio.title}
              imgUrl={portfolio.ImgURL}
              title={portfolio.title}
              description={portfolio.description}
              url={portfolio.URL}
              additionalInfo={portfolio.additionalInfo}
            />
          ))
        }
      </ul>
    </section>
  )
}

type PortfolioItem = {
  title : string;
  imgUrl: string;
  description: string;
  additionalInfo: string;
  url: string;
}

const PortfolioItem = ({title, imgUrl, description, url, additionalInfo} : PortfolioItem) => {
  
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  return(
    <li className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group'>
      <div className='group-hover:scale-110 transition-all duration-1000'>
          <Image src={imgUrl} alt='map' width={444} height={444}/>
      </div>
      <div className='px-6 py-4'>
        <h3 className='bold-18 lg:bold-20 my-4 capitalize'>{title}</h3>
        <p className='regular-16 text-gray-30 mb-2'>{description}</p>

        {/* Párrafo adicional */}
        <p className={`regular-16 text-gray-30 mb-4 transition-max-height duration-[4000ms] ease-in-out overflow-hidden ${visible ? "max-h-[1000px]" : "max-h-0"}`}>
          {additionalInfo}
        </p>

        <div className='flex gap-1'>
          <Button
              type="button"
              title="Expandir"
              icon="/more.svg"
              variant="btn_dark_rounded"
              onButtonClick={toggleVisibility}
          />
          <a href={url} target='_blank'>
            <Button
              type="button"
              title="Abrir Web"
              icon="/web.svg"
              variant="btn_dark_rounded"
            />
          </a>
        </div>
      </div>
    </li>
  )
}

export default Portfolio