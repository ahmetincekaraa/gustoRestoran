import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";

const Customers = () => {
  function NextBtn ({ onClick}) {
    return (
      <button className='' onClick={onClick}>Next</button>
    )
  }
  
  return (
    <div className='container mx-auto mt-10 mb-20'>
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
        
        <section className="main-slider flex">  
        <Swiper
          className="swiper-container thm-swiper__slider"
          loop={true}
          dots={false}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          
          
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}>
            <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
            <CustomerItem imgSrc="/images/client1.jpg"/>
              </SwiperSlide>
              <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
              <CustomerItem imgSrc="/images/client2.jpg"/>
              </SwiperSlide>
              </Swiper> 
        </section>

    </div>
  )
}

export default Customers