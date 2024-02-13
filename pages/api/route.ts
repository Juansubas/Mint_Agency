import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const { name, celular, email, asunto, mensaje } = request.body;

      const transporter = nodemailer.createTransport({
        // service: 'gmail',
        // host: 'smtp.gmail.com',
        // port: 465,
        //service: 'gmail',
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          // user: 'un.de.bate.mas@gmail.com',
          // pass: 'soaq qgwp zavv gior',
          user: 'comercial@mintagencia.co',
          pass: 'Cesar.0121*',
        },
      });

      const mailOptions = {
        //from: 'un.de.bate.mas@gmail.com',
        from: 'comercial@mintagencia.co',
        to: 'un.de.bate.mas@gmail.com',
        subject: 'Potencial Cliente - Emprendimiento Mint',
        html: `
          <h3>Hola soy ${name}</h3>
          <li> Asunto: ${asunto}</li>
          <li> Email: ${email}</li>
          <li> Celular: ${celular}</li>
          <li> Mensaje: ${mensaje}</li>
        `,
      };

      const info = await transporter.sendMail(mailOptions);

      response.status(200).json({ message: 'Email Sent Successfully' });
    } else {
      response.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Failed to Send Email' });
  }
}
