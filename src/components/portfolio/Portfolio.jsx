import React from 'react'
import './portfolio.css'
import garden from '../../assets/garden.webp'
import greenwall from '../../assets/greenwall.webp'
import Artdeco from '../../assets/artdeco.webp'
//import bosons from '../../assets/bosonslogo.png'



const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio__cont'>
      {/*<h2>Catálogo 2023</h2>*/}
      <div className="container portfolio__container">
        <article className='portfolio__itm'>
        <div class="card">
              <div class= "face face1 f1">
                  <div class="content">
                      <h3 class="portfolioh3">Green Walls muros verdes</h3>
                      <img src={greenwall}></img>
                  </div>
              </div>
              <div class= "face face2">
                  <div class="content">                      
                          <p>Huertos & muros vervicales, Aislamiento sonoro</p>
                          <a href='#'>greenwall</a>
                      </div>
              </div>
          </div>
        </article>
        <article className='portfolio__itm'>
        <div class="card">
              <div class= "face face1 f2">
                  <div class="content">
                      <h3 class="portfolioh3">Invernaderos y Terrarios</h3>
                      <img src={garden}></img>
                  </div>
              </div>
              <div class= "face face2">
                  <div class="content">
                          <p>Huertos & muros vervicales, Aislamiento sonoro</p>
                          <a href='#'>Invernaderos</a>
                      </div>
              </div>
          </div>
        
          {/*<div className="portfolio__itm-img">
            <img src={garden} alt='alternative'/>
          </div>
          <h3>Invernaderos y Terrarios</h3>
          <div className="portfolio__item-img">
            <a href='https://ing.bosons.com.co' className='btn' target='_blank' rel="noreferrer noopener">Catálogo 2022 </a>
            <a href='https://ing.bosons.com.co' className='btn btn-primary' target='_blank' rel="noreferrer noopener">Redes Contra Incendios</a>
          </div>*/}
        </article>
        <article className='portfolio__itm'>
        <div class="card">
              <div class= "face face1 f3">
                  <div class="content">
                      <div class="portfolioh3"><h3>Art/Deco & Colaborations</h3></div>
                      <img src={Artdeco}></img>
                  </div>
              </div>
              <div class= "face face2">
                  <div class="content">
                         <p>Huertos & muros vervicales, Aislamiento sonoro</p>
                         <a href='#'>Art/Deco</a>
                      </div>
              </div>
          </div>

          {/*<div className="portfolio__itm-img">
            <img src={Artdeco} alt='alternative'/>
          </div>
          <h3>Art/Deco & Colaborations</h3>
          <div className="portfolio__item-img">
            <a href='https://web.bosons.com.co' className='btn' target='_blank' rel="noreferrer noopener">Mis Suculentas </a>
            <a href='https://web.bosons.com.co' className='btn btn-primary' target='_blank' rel="noreferrer noopener">Muros Verticales</a>
          </div>*/}
        </article>
      </div>
    </section>
  )
}

export default Portfolio