import React from 'react'
import './footer.css'
import Parallax from '../parallax/Parallax'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Footer = () => {
  return (
  <Router>
    <footer>
        <a href='#' className='ft__logo'>Bosons SAS</a>
        
        <ul className='permalinks' >
            <li><a href='#'>Home</a></li>
            <li><a href='#about' >About</a></li>
            <li><a href='#experience' >Experiencia</a></li>
            <li><a href='#services' >Servicios</a></li>
            <li><a href='#portfolio' >Portafolio</a></li>
            {/* <li><a href='../parallax/Parallax.jsx' target="_blank" rel="noopener noreferrer">Parallax</a></li> */}
            <li><Link to = {Parallax} >Parallax</Link></li> 
            {/*<li><a href='#reviews' >Reviews</a></li> */}
            <li><a href='#conctact' >Contacto</a></li>
        </ul>
        <Routes>
          <Route exact path='/Parallax' component ={() =>< Parallax />}></Route>
        </Routes>
                <div className='ft__social'>
          <a href='https://facebook.com/BosonsBTC' target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a>
          <a href='https://www.linkedin.com/company/bosons/' target="_blank" rel="noopener noreferrer" ><AiOutlineLinkedin /></a>
        </div>

        <div className='ft__cpyr'>
          <small>&copy; Bosons SAS. 2022 All rights reserved </small>

        </div>

    </footer>
  </Router>
  )
}

export default Footer