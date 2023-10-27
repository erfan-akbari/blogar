import { Container } from 'react-bootstrap'
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getFetch } from '../../utils/apiFetch';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// import styles
import './Category-Section.css'

export default function CategorySection() {

  const [categoris, setCategoris] = useState([])

  useEffect(() => {
    getFetch('categoris', setCategoris)
  }, [])

  return (
    <div className='Category-Section'>
      <Container>
        <div className="Category-Section__wrapper">
          <h2 className='Category-Section__title __title'>دسته بندی ها</h2>
          <Link to={'#'}>مشاهده همه</Link>
        </div>
        <Swiper
          style={{ zIndex: '2' }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {categoris?.map(category => (
            <SwiperSlide>
              <div key={category.id} className="Category-Section__box">
                <div className="Category-Section__box-banner img-parent-hover">
                  <img
                    className='Category-Section__box__img image-hover'
                    src={category.img}
                    alt={category.title} />
                </div>
                <span className='Category-Section__box-title'>
                  {category.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  )
}
