//JSX Catalogo de Servicios

import React from 'react'
import './services.css'
import {BsCheck2Square} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Servicios Activos</h5>
      <h2>Catálogo 2022</h2>

      <div className="container services__container">

        <article className='service'>
          <div className="srvc__hd">
            <h3>UX/UI & Web Desing</h3>
          </div>

          <ul className='srvc__lst'>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Aplicaciones ligeras y flexibles en cualquier pantalla.</p>
            </li>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Carrusel de pagos & Inventarios Facturación Digital, Web3.0</p>
            </li>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Streaming de Audio & Video, Aulas Virtuales y Metaverso</p>
            </li>
          </ul>
        </article>
        {/*End of UX/UI card*/}
        <article className='service'>
          <div className="srvc__hd">
            <h3>Automatización & Seguridad Industrial</h3>
          </div>

          <ul className='srvc__lst'>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Reparación & mantenimiento activo de líneas de conducción de fluídos.</p>
            </li>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Suministro, montaje y revisión de Normas Tecnicas requeridas.</p>
            </li>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Seguridar Informática y Protección de Datos para empresas no IT.</p>
            </li>
          </ul>
        </article>
        {/*End of WEB Desing card*/}
        <article className='service'>
          <div className="srvc__hd">
            <h3>Content Creation</h3>
          </div>

          <ul className='srvc__lst'>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Marketing y Optimización de Procesos</p>
            </li>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Realizamos Consultoría previamente y Estudios de Factibilidad </p>
            </li>
            <li>
              <BsCheck2Square className='srvc__lst-icon'/>
              <p>Optimización de Aplicaciones Virtuales </p>
            </li>
          </ul>
        </article>
        {/*End Content Creatin card*/}
      </div>
    </section>
  )
}

export default Services