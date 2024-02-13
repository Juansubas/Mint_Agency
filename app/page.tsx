import About from '@/components/About'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import { Contact } from '@/components/Contact'
import Whatsapp from '@/components/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <main>
      <>
        <Hero/>
        <Whatsapp/>
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </>
    </main>
  )
}

export default page