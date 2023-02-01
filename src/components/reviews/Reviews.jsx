import React from 'react'
import './reviews.css'
import inglogo from '../../assets/inglogo.webp'

// import Swiper core and required modules
import {Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    cx: inglogo,
    name: 'Maria Antonieta',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque tenetur beatae cum suscipit nesciunt sit perspiciatis'
  },
  {
    cx: inglogo,
    name: 'Maria Camila ',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque tenetur beatae cum suscipit nesciunt sit perspiciatis'
  },
  {
    cx: inglogo,
    name: 'Maria Luisa',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque tenetur beatae cum suscipit nesciunt sit perspiciatis'
  },
]

const Reviews = () => {
  return (
    <section id='reviews'>
        <h5>Reviews</h5>
        <h2>Comentarios de Nuestros Clientes</h2>

        <Swiper className='container rvw__container'       
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>          
          {
            data.map(({cx, name, review}, index) => {
              return(
                <SwiperSlide key={index} className='commnt'>
                <div className="cx__pic">
                  <img src={cx} alt='cliente1'/>
                </div>
                <h5 className='cx__name'>{name}</h5>
                <small className='cx__rvw'>{review}</small>
              </SwiperSlide>
              )
            })
          }

        </Swiper>
    </section>
  )
}

export default Reviews