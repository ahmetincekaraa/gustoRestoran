import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from 'formik';
import { resolve } from "styled-jsx/css";
import { rezervationSchema } from "../schema/rezervation";

const Rezervation = () => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit,
    validationSchema: rezervationSchema,
  });
  

  const inputs = [
    {
      id:1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id:2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id:3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id:4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id:5,
      name: "date",
      type: "date",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap-reverse items-center gap-10">
        <form onSubmit={handleSubmit} className="lg:flex-1 w-full px-2">
          <Title addClass="text-[40px] mb-10">Book A Table</Title>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <button className="btn-primary mt-4" type="submit">Book Now</button>
        </form>

        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4323.724621989161!2d32.8304914859428!3d39.97861835885403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1729431695360!5m2!1str!2str"
            height="455"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Rezervation;
