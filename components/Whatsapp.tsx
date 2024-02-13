import Image from 'next/image'
import React from 'react'

const Whatsapp = () => {
    return (
        <div className='flex flex-col  fixed w-55 h-55 line-h-55 bottom-8 right-6 lg:bottom-8 lg:right-16 z-50 bg-transparent'>
            <a href="https://api.whatsapp.com/send?phone=573187952957&text=¡Hola!%20Me%20gustaría%20obtener%20más%20información%20sobre%20sus%20productos%20y%20servicios.%20Gracias.
" target='_blanket' rel='noopener noreferrer'>
                <Image src="/whatsapp.svg" alt='button whatsapp' width={100} height={30} className=' hover:saturate-50 shadow-2xl border border-gray-20 rounded-3xl' />
            </a>
        </div>
    )
}

export default Whatsapp