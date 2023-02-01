import React from 'react'
import './nav.css'
import {SiHomeassistant} from 'react-icons/si'
import {GiEgyptianProfile} from 'react-icons/gi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {MdOutlineContactSupport} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [actNav, setActNav] = useState('/#')
  return ( 
    <nav>
      <a href="/#" onClick={() => setActNav('#')} className={actNav === '#' ? 'active': ''}><SiHomeassistant/></a>  
      {/*<a href="#about" onClick={() => setActNav('#about')} className={actNav === '#about' ? 'active': ''}><GiEgyptianProfile/></a>
      <a href="#services" onClick={() => setActNav('#services')} className={actNav === '#services' ? 'active': ''}><RiCustomerService2Fill/></a>*/}
      <a href="#portfolio" onClick={() => setActNav('#portfolio')} className={actNav === '#portfolio' ? 'active': ''}><MdOutlineProductionQuantityLimits/></a>
      <a href="#contact" onClick={() => setActNav('#contact')} className={actNav === '#contact' ? 'active': ''}><MdOutlineContactSupport/></a>
    </nav>
  )
}

export default Nav