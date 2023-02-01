import React from 'react'
import './experience.css'
import {BsHeartFill} from 'react-icons/bs'
import {BsHeartHalf} from 'react-icons/bs'
import {RiHeartPulseLine} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <h5>Experiencia & Lenguajes Utilizados</h5>
      <h2>Reactive Aplications</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__dtls'>
            <BsHeartFill className='experience__dtls-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <BsHeartFill  className='experience__dtls-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <BsHeartHalf className='experience__dtls-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <BsHeartHalf className='experience__dtls-icon'/>
              <div>
                <h4>Adobe Suite</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <RiHeartPulseLine className='experience__dtls-icon'/>
              <div>            
                <h4>C#, C++</h4>
                <small className='text-light'>Basic</small>                                
              </div>
            </article>

            <article className='experience__dtls'>
            <RiHeartPulseLine className='experience__dtls-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
{/* =========== END OF FRONTEND EXPERIENTE =========*/}


        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__dtls'>
            <BsHeartFill className='experience__dtls-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <BsHeartFill className='experience__dtls-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <BsHeartHalf className='experience__dtls-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <BsHeartHalf className='experience__dtls-icon'/>
              <div>
                <h4>Solidity</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <RiHeartPulseLine className='experience__dtls-icon'/>
              <div>
                <h4>Go-lang</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__dtls'>
            <RiHeartPulseLine className='experience__dtls-icon'/>
              <div>
                <h4>R & SAS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
    
  )
}

export default Experience