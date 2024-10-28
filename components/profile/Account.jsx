import React from 'react'
import Title from '../ui/Title';
import Input from '../form/Input';
import { useFormik } from 'formik';
import { profileSchema } from '../../schema/profile';

const Account = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };
    
      const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
          fullName: "",
          phoneNumber: "",
          email: "",
          address: "",
          job: "",
          bio: "",
        },
        onSubmit,
        validationSchema: profileSchema,
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
          name: "address",
          type: "text",
          placeholder: "Your Address",
          value: values.address,
          errorMessage: errors.address,
          touched: touched.address,
        },
        {
          id:5,
          name: "job",
          type: "text",
          placeholder: "Your Job",
          value: values.job,
          errorMessage: errors.job,
          touched: touched.job,
        },
        {
          id:6,
          name: "bio",
          type: "text",
          placeholder: "Your Bio",
          value: values.bio,
          errorMessage: errors.bio,
          touched: touched.bio,
        },
      ];

  return (
    <form className='p-8 flex-1' onSubmit={handleSubmit}>
          <Title addClass="text-[40px] text-center">Account Settings</Title>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
            {inputs.map((input)=> (
            <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange}/>
            ))}
            
          </div>
          <button className="btn-primary hover:text-secondary mt-6 items-center" type='submit'>UPDATE</button>
        </form>
  )
}

export default Account