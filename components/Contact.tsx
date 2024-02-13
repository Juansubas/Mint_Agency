"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image';
import SimpleSnackbar from './SimpleSnackbar';

export const Contact = () => {
  const [snackIsOpen, setSnackIsOpen] = useState(false);
  const [snackContent, setSnackContent] = useState('');

  const [values, setValues] = useState({
    name: "",
    celular: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const resetForm = () => setValues({
    name: "",
    celular: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const { name, celular, email, asunto, mensaje } = values;

  // Para manejar el cambio en el campo 'name'
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  // Añadir una función de validación antes de enviar la solicitud
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación del formulario
    if (!name || !email || !celular || !asunto || !mensaje) {
      setSnackContent('Por favor, complete todos los campos del formulario.');
      setSnackIsOpen(true);
      return;
    }

    try {
      setSnackIsOpen(false);
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      

      if (response.ok) {
        setSnackContent('¡Email enviado exitosamente!');
        setSnackIsOpen(true);
        resetForm();
      } else {
        setSnackContent('Error al enviar el email. Por favor, inténtelo de nuevo.');
        setSnackIsOpen(true);
      }

    } catch (err) {
      console.error(err);
      setSnackContent('Error al enviar el email. Por favor, inténtelo de nuevo.');
      setSnackIsOpen(true);
    }
  };

  return (
    <section className='max-container px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-22 md:gap-28 lg:py-10 bg-[#f7f7f7]' id='contact'>
      <div className='text-center text-[18px] font-[700] uppercase tracking-[1rem] text-blue-500 pb-10'>
        Contacto
      </div>
      <div className='flex flex-col gap-10 md:gap-18 xl:flex-row'>
        <div className='flex-1 flex items-center justify-center flex-col m-auto pl-5'>
          <form className='bg-white px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
          <h3 className='text-[18px] lg:text-[20px] font-[600] my-4 capitalize flex items-center justify-center'>Formulario de Contacto</h3>
          <p className='text-[16px] font-[400] text-gray-30 mb-4'>Si estás listo para llevar tu negocio al siguiente nivel, completa el formulario a continuación. Nos emociona la oportunidad de colaborar contigo y explorar cómo nuestros servicios integrales de marketing y desarrollo de software pueden impulsar tu éxito.</p>
          <div className='mb-4'>
            <div className='grid grid-flow-row sm:grid-flow-col gap-3'>
              <div className='sm:col-span-4 justify-center'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Nombres y Apellidos</label>
                <input 
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline' 
                  id='name' 
                  name='name'
                  value={name}
                  onChange={handleChange} 
                  type="text" 
                  placeholder='John Doe' 
                  required 
                />
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <div className='sm:col-span-4 justify-center'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline' 
                id='email' 
                name='email' 
                value={email}
                onChange={handleChange}
                type="email" 
                placeholder='JohnDoe@gmail.com' 
                required 
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='sm:col-span-4 justify-center'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='celular'>Celular</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline' 
                id='celular' 
                name='celular'
                value={celular}
                onChange={handleChange} 
                type='tel' 
                placeholder='+57 3176213872' 
                required 
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='asunto'>Asunto</label>
            <input 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline' 
              id='asunto' 
              name='asunto'
              value={asunto}
              onChange={handleChange} 
              type="text" 
              placeholder='Asunto del Correo' 
              required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje"> Mensaje </label>
            <textarea
              className="resize-none w-full h-24 max-w-full max-h-40 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mensaje"
              name="mensaje"
              value = {mensaje}
              onChange={handleChange}
              rows={5}
              placeholder="El mensaje"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Enviar </button>
          </div>
        </form>
        {true && <SimpleSnackbar content={snackContent} bool={snackIsOpen} />}
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <Image src="/contact.jpg" alt="about" height={400} width={400} className="w-auto rounded-lg shadow-sm"/>
        </div>
      </div>
    </section>
  )
};
