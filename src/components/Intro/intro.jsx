import React from 'react'
import './intro.css'
import bosons from '../../assets/bosonslogo.png'
import ingbosons from '../../assets/inglogo.webp'

const Intro = () => {
  return (
    <intro>
        <body>
        <div class="container">
          <div class="card">
              <div class= "face face1">
                  <div class="content">
                      <img src={bosons}></img>
                      <h3>Bosons Ingenieria</h3>
                  </div>
              </div>
              <div class= "face face2">
                  <div class="content">
                          <p>Lorem ipsum dolor sitLorem ipsum dolor sit</p>
                          <a href='#'>Diseño Web</a>
                      </div>
              </div>
          </div>
        </div>
        <div class="container">
          <div class="card">
              <div class= "face face1">
                  <div class="content">
                      <img src={bosons}></img>
                      <h3>Bosons Ingenieria</h3>
                  </div>
              </div>
              <div class= "face face2">
                  <div class="content">
                          <p>Lorem ipsum dolor sitLorem ipsum dolor sit</p>
                          <a href='#'>Diseño Web</a>
                      </div>
              </div>
          </div>
          <div class="container">
          <div class="card">
              <div class= "face face1">
                  <div class="content">
                      <img src={bosons}></img>
                      <h3>Bosons Ingenieria</h3>
                  </div>
              </div>
              <div class= "face face2">
                  <div class="content">
                          <p>Lorem ipsum dolor sitLorem ipsum dolor sit</p>
                          <a href='#'>Diseño Web</a>
                      </div>
              </div>
          </div>
        </div>
        </div>
        </body>
        </intro>
        )
    }
    
    export default Intro