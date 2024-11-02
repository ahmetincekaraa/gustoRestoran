import { useFormik } from "formik";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { loginSchema } from "../../../schema/login";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  const { data: session } = useSession();
  const push = useRouter();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    actions.resetForm();
  };

  useEffect(() => {
  if (session) {
    push("/profile")
  }
  }, [session, push])
  

  console.log(session);

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-16 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Login</Title>
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
            <button className="btn-primary hover:text-secondary" type="submit">
              LOGİN
            </button>
            <button
              className="!bg-secondary btn-primary hover:text-primary"
              type="button"
              onClick={() => signIn("github")}
            >
              <i className="fa fa-github mr-2"></i>
              GITHUB
            </button>
            <Link href="/register">
              <span className="text-sm underline cursor-pointer text-secondary">
                Do you no have a account?
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
