import React from 'react'
import './contact.css'
import {BsMailbox2} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c14w7gu', 'template_72qg2ro', form.current, 'bfscPi8q0JH6FJCXQ')

    e.target.reset()
    
  };

  return (
    <section id='contact' className='container__parallax'>
      {/*<h5>Get in Touch</h5>
      <h2> Contactanos</h2>*/}

      <div className="container cntct__cntnr">
        <div className="cntct__op">
          <article className='cntct__artc'>
            <BsMailbox2 className='cntct__artc-icon'/>
            <h4>Email</h4>
            <h5>contacto@bosons.com.co</h5>
            <a href='mailto:goanetapp@gmail.com'target='_blank' rel='noopener noreferrer'>Envia un Mensaje</a>
          </article>
          <article className='cntct__artc'>
            <BsMessenger className='cntct__artc-icon'/>
            <h4>Messenger</h4>
            <h5>Bosons SAS</h5>
            <a href='https://m.me/BosonsBTC' target='_blank' rel='noopener noreferrer'>Envia un Mensaje</a>
          </article>
          <article className='cntct__artc'>
            <BsWhatsapp className='cntct__artc-icon'/>
            <h4>WhatsApp</h4>
            <h5>(Co)+57 316 484 7047</h5>
            <a href='https://api.whatsapp.com/send?phone=+573164847047' target='_blank' rel='noopener noreferrer'>Envia un Mensaje</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Tu Nombre Completo' required/>
          <input type='email' name='email' placeholder='E-mail' required/>
          <textarea name='message' rows='7' placeholder='Escribe tu Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div> 
    </section>
  )
}

export default Contact