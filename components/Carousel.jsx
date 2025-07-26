import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube
} from "swiper/modules";
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
            src="/images/hero-bg-c.jpg"
            layout="fill"
            className="object-center"
            objectFit="cover"
          />
        </div>
      </div>

      <section className="main-slider h-screen w-[48%] items-center hidden md:block lg:block">
        <Swiper
        effect={'cube'}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
          className="mt-12 swiper-container thm-swiper__slider sm:w-auto"
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

          modules={[Navigation,EffectCube, Pagination, Scrollbar, A11y, Autoplay]}
        >
          <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
            <div className=" text-iwhite top-20 flex flex-col items-center gap-y-10 container mx-auto ">
              <Title addClass="text-5xl text-primary">Birikimlerinizi</Title>
              <Title addClass="text-5xl text-primary ">Güvenle</Title>
              <Title addClass="text-5xl text-primary" className="">
                Büyütün
              </Title>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxHeight: "920px" }} className="swiper-slide">
            <div className=" text-iwhite top-20 flex flex-col items-center gap-y-10 container mx-auto">
              <Title addClass="text-5xl text-primary ">Paranızı Doğru</Title>
              <Title addClass="text-5xl text-primary ">Yönetmek,</Title>
              <Title addClass="text-5xl text-primary" className="">
                Hayatınızı 
              </Title><Title addClass="text-5xl text-primary" className="">
                 Doğru
              </Title>
              <Title addClass="text-5xl text-primary" className="">
                Yönlendirmektir.
              </Title>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};
export default Carousel;
