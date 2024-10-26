import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div className="h-screen w-full container mx-auto">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            alt=""
            src="/images/hero-bg.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <section className="main-slider">
        <Swiper
          className="swiper-container thm-swiper__slider"
          loop={true}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        >
          <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
            <div className="container">
              
                <div className="relative text-white top-20 flex flex-col items-start gap-y-10">
                  <Title addClass="text-5xl">Fast Food Restaurant</Title>
                  <p className="text-sm sm:w-2/5 w-full">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                    saepe in, iure voluptate molestiae id ut corporis. Culpa quia quas
                    animi, porro quidem quaerat laudantium reprehenderit sunt. Est,
                    mollitia incidunt!
                  </p>
                  <button className="btn-primary">Order Now</button>
                </div>
              </div>
          
          </SwiperSlide>

          <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
            <div className="container">
              <div className="main-slider__content">
                <div className="relative text-white top-20 flex flex-col items-start gap-y-10">
                  <Title addClass="text-5xl">Fast Food Restaurant</Title>
                  <p className="text-sm sm:w-2/5 w-full">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                    saepe in, iure voluptate molestiae id ut corporis. Culpa quia quas
                    animi, porro quidem quaerat laudantium reprehenderit sunt. Est,
                    mollitia incidunt!
                  </p>
                  <button className="btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div id="main-slider-pagination" className="swiper-pagination mt-1"/>
      </section>
    </div>
  );
};
export default Carousel;
