import React from 'react'
import Title from '../ui/Title';
import Input from '../form/Input';
import { useFormik } from 'formik';
import { newPasswordSchema } from '../../schema/newPassword';
import axios from 'axios';

const Password = ({user}) => {

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
      actions.resetForm();
    } catch (err) {
      console.log(err)
    }
    
  };
    
      const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        enableReinitialize: true,
        initialValues: {
          password: "",
          confirmPassword: "",
        },
        onSubmit,
        validationSchema: newPasswordSchema,
      });
      const inputs = [
        {
          id:1,
          name: "password",
          type: "password",
          placeholder: "New Password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        },
        {
          id:2,
          name: "confirmPassword",
          type: "password",
          placeholder: "New Password Again",
          value: values.confirmPassword,
          errorMessage: errors.confirmPassword,
          touched: touched.confirmPassword,
        },
      ];

  return (
    <form className='p-8 flex-1' onSubmit={handleSubmit}>
          <Title addClass="text-[40px] text-center">Password Settings</Title>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
            {inputs.map((input)=> (
            <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange}/>
            ))}
            
          </div>
          <button className="btn-primary hover:text-secondary mt-6 items-center" type='submit'>UPDATE</button>
        </form>
  )
}

export default Password