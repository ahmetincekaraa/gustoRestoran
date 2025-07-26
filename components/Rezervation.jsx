import React, { useEffect, useState } from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from 'formik';
import { resolve } from "styled-jsx/css";
import { rezervationSchema } from "../schema/rezervation";

const Rezervation = () => {


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
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap-reverse items-center gap-10">
        <div className="md:flex-1">
      <Title addClass="text-[28px] text-primary hover:text-ired">Bize Ulaşın</Title>
      <div className="flex flex-col gap-y-2 mt-3">
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
      </div>
    </div>
  );
};

export default Rezervation;
