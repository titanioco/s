import React from 'react'
import './parallax.css'
import bosonsweb from '../../assets/bosonsweb.svg'
import {HiOutlineBadgeCheck} from 'react-icons/hi'
import {FaUserAstronaut} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
// import { Link } from "react-router-dom";


const parallax = () => {
  return (
    <section id='Parallax'>
    <h5>Equipo de Ingenieros con experiencia en</h5>
    <h2>Ingeniería & Automatización</h2>

    <div className="container about__container">
      <div className="about__us">
          <div className="about__img"><img src={bosonsweb} alt='About'/>
             </div>
          </div>
        <div className="about__content">
          <div className='about__card'><article className='about__cardsq'>
                <HiOutlineBadgeCheck className='about__icon'/>
                <h5>Experiencia</h5>
                <small>7+ Años Desarrollando Proyectos.</small>

              </article>
              <article className='about__cardsq'>
                <FaUserAstronaut className='about__icon'/>
                <h5>Clientes</h5>
                <small>100+ En Bogotá & Colombia</small>

              </article><article className='about__cardsq'>
                <AiOutlineFundProjectionScreen className='about__icon'/>
                <h5>Proyectos</h5>
                <small>200+ Proyectos Culminados </small>
              </article>
            </div>
            <p className='about__cardft'>
              Nuestro equipo de profesionales en Tecnologías de la Información y Seguridad Industrial con experiencia en mantenimiento de infraestructura física y digital están comprometidos con la calidad y el cumplimiento.
            </p>
            <a href='#contact'className='btn'>Deja un Mensaje</a>
        </div>
      </div>
  </section>
  )
}

export default parallax