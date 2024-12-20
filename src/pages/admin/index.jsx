
import { useFormik } from "formik";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { adminSchema } from "../../../schema/admin";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";


const Login = () => {
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios?.post(
        `${process?.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      if (res?.status === 200) {
        actions.resetForm();
        push("/admin/profile");
        toast?.success("Admin Girişi Başarılı!", { autoClose: 2000 });
        
        console.log(res.status)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Kullanıcı Adınız..",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: showPassword ? 'text' : 'password',
      placeholder: "Şifreniz..",
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
  ];
  return (
    <div className="container mx-auto py-[50px]">
      <form
        className="flex flex-col items-center my-16 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Admin Giriş</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className="flex flex-col w-full gap-y-2 mt-5">
            <button className="btn-primary hover:text-secondary">GİRİŞ</button>

            <Link href="/">
              <span className="text-sm underline cursor-pointer text-secondary">
                Anasayfa
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie?.token === process?.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/profile",
        permanent: false,
      },
    };
  }
  console.log("ADMIN_TOKEN:", process.env.ADMIN_TOKEN);
  console.log("MyCookie Token:", myCookie.token);
  return {
    props: {},
  };
};

export default Login;
