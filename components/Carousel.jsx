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
    <div className="h-screen w-full ">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            alt=""
            src="/images/hero-bg.jpg"
            layout="fill"
           className="object-[8%] lg:object-cover"
            objectFit="cover"
          />
        </div>
      </div>

      <section className="main-slider">
        <Swiper
          className="swiper-container thm-swiper__slider"
          loop={true}
          autoplay={{
            delay: 1500, 
            disableOnInteraction: false, 
          }}
          speed={1750}

          //Slider altındaki noktalar
          // pagination={{
          //   clickable: false, 
          // }}

          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        >
          <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
            <div className="">
              
                <div className=" text-iwhite top-20 flex flex-col items-start gap-y-10 container mx-auto">
                  <Title addClass="text-5xl text-primary">İtalyan Konsept Restoran</Title>
                  <p className="text-sm sm:w-2/5 w-full font-semibold text-[#8ed2c2]">
                  İtalyan konseptli restoranımızın menü çeşitliliği size avantaj sağlar. Keyifli ambiyansımız ve birbirinden lezzetli yiyeceklerimizin birleşimiyle restoranımız size hizmet vermektedir.
                  </p>                  
                </div>
              </div>
          
          </SwiperSlide>

          <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
            <div className="">
             
                <div className=" text-iwhite top-20 flex flex-col items-start gap-y-10 container mx-auto">
                  <Title addClass="text-5xl text-primary">Salata Çeşitliliği</Title>
                  <p className="text-sm sm:w-2/5 w-full font-semibold text-[#8ed2c2]">
                  Her damak tadına uygun lezzetler sunan salata menümüz, taptaze malzemelerle hazırlanan zengin seçenekleriyle sağlıklı ve doyurucu bir deneyim sunuyor. Bize özel tarifleri denemeyi unutmayın.
                  </p>
                  
                </div>
            
            </div>
          </SwiperSlide>
        </Swiper>
        
      </section>
      
    </div>
  );
};
export default Carousel;
