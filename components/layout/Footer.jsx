import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";
import Logo from "../ui/Logo";

const Footer = () => {

  const [footer, setFooter] = useState([])
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err)
      }
    }
    getFooter();
  }, [])


  return (
    <div className="bg-[#01281f] text-iwhite ">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-7">
        <div className="md:flex-1">
        <Title addClass="text-[28px] text-primary hover:text-ired">Bize Ulaşın</Title>
          <div className="flex flex-col gap-y-2 mt-3 ">
            <a href={footer?.location} target="_blank" className="text-primary hover:text-ired">
              <i className="fa fa-map-marker"></i>
              <span className="inline-block ml-2">Konum</span>
            </a>
          
          <a href={`tel:${footer?.phoneNumber}`} className="text-primary hover:text-ired">
            <i className="fa fa-phone"></i>
            <span className="inline-block ml-2">{footer?.phoneNumber}</span>
          </a>
          <a href={`mailto:${footer?.email}`} className="text-primary hover:text-ired">
            <i className="fa fa-envelope"></i>
            <span className="inline-block ml-2">{footer?.email}</span>
          </a>
          </div>
        </div>
        <div className="md:flex-1">
        <Logo/>
          <p className="mt-3 text-primary hover:text-ired">
          {footer?.desc}
          </p>
          <div className="flex items-center justify-center mt-5 gap-x-2 ">
              {footer?.socialMedia?.map((item) => (
                <a href={item?.link} className="w-7 h-7 grid place-content-center bg-ired text-[#01281f] rounded-full hover:text-secondary hover:bg-primary" key={item._id} target="_blank">
                <i className={item?.icon} ></i>
              </a>
              ))}
              
            </div>
        </div>
        <div className="md:flex-1">
        <Title addClass="text-[28px] text-primary hover:text-ired">Hizmet Zamanı</Title>
          <div className="flex flex-col gap-y-2 mt-3">
            <div>
              
              <span className="inline-block ml-2 text-primary hover:text-ired">{footer?.openingHours?.day}</span>
            </div>
          
          <div>
           
            <span className="inline-block ml-2 text-primary hover:text-ired">{footer?.openingHours?.hour}</span>
          </div>
          
          </div>
        </div>
        </div>
        
          <p className="text-center mt-10 text-iwhite font-semibold ">
          © 2024 Tüm Hakları Saklıdır | Lezzetin Adresi
          </p>
       
      </div>
    </div>
  );
};

export default Footer;
