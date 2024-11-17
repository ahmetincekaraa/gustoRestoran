import { useFormik } from 'formik';
import Title from '../../../components/ui/Title';
import Input from '../../../components/form/Input';
import { registerSchema } from '../../../schema/register';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Register = () => {
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      if (res.status === 200) {
        toast.success('Kullanıcı başarıyla oluşturuldu.', { autoClose: 2000 });
        push('/login');
      }
    } catch (err) {
      toast.error(err.res.data.message, { autoClose: 2000 });
      console.log(err);
    }
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit,
    validationSchema: registerSchema,
  });

  const inputs = [
    
    {
      id: 1,
      name: 'fullName',
      type: 'text',
      placeholder: 'Adınız Soyadınız..',
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Emailiniz..',
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: 'password',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Şifreniz..',
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
      icon: (
        <span onClick={handleTogglePassword} className="cursor-pointer text-sm">
  {showPassword  ? (
    <i className="fa fa-eye"></i>
  ) : (
    <i className="fa fa-eye-slash"></i>
  )}
</span>
      ),
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: showConfirmPassword ? 'text' : 'password',
      placeholder: 'Şifre Tekrarı',
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
      icon: (
        <span onClick={handleToggleConfirmPassword} className="cursor-pointer text-md">
  {showConfirmPassword ? (
    <i className="fa fa-eye"></i>  // Şifre görünür, göz açık
  ) : (
    <i className="fa fa-eye-slash"></i>  // Şifre gizli, göz kapalı
  )}
</span>
      ),
    },
  ];

  
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-16 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Üye Formu</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className="flex flex-col w-full gap-y-2 mt-5">
            <button className="btn-primary hover:text-secondary" type="submit">
              ÜYE OL
            </button>

            <Link href="/login">
              <span className="text-sm underline cursor-pointer text-secondary">
                Hesabınız var mı?
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
