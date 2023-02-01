import React from 'react'
import './header.css'
import CTA from './CTA'
import SocialMenu from './SocialMenu'
import sucuslogo from '../../assets/logosucus.webp'
const Header = () => {
  return (
    <header>
        <div>
          <div className="container header__container">
          <div className="logo">
            <img src={sucuslogo} alt='Acepta Btc En tu Negocio'/>
            <h1 className='h1'>Mis Suculentas</h1>
            <h5 >Crásulas </h5>
            <h5 >Cáctus y Kalanchoes</h5>
          </div>
          
          <CTA/>
          <SocialMenu />
          
        </div>
      </div>
          
    </header>
  )
}

export default Header