import React, { useState } from "react";
import { Link } from "react-router-dom";
// footer
import Footer from "../Footer/Footer";
// pic
import pic from "../../assets/images/log in/login-page.svg";
import logo from "../../assets/images/landingPage/logo/download.jpg";
// storage
import { getItem } from "../../core/services/storage/storage";
// toast
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// api
import loginUser from "../../core/services/api/login-student.api";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// validation
import { loginValidation } from "../../core/validation/login-validation";
// import { AUTH_LOGIN_USER, useAuth, useLoggined, } from "../../context/auth/auth.context";

const Login = () => {
  const loggedIn = getItem("token");
  const [user, setUser] = useState(loggedIn ? true : false);

  const onLoginUser = async (object) => {
    const user = await loginUser(object);
    user && setUser(true);
    user && notify("ورود با موفقیت انجام شد", "success");
    user &&
      setTimeout(() => {
        window.location.pathname = "/";
      }, 1500);
  };
  // const [state, dipatch] = useAuth();
  // const loggedIn = useLoggined();
  // console.log(loggedIn);
  // const onLoginUser = async (object) => {
  //   const user = await loginUser(object);
  //   dipatch({
  //     type: AUTH_LOGIN_USER,
  //     payload: user,
  //   });
  //   user && notify("ورود با موفقیت انجام شد", "success");
  // };

  const [data] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (values, actions) => {
    user ? notify("شما در اکانت حضور دارید!", "danger") : onLoginUser(values);
  };

  return (
    <>
      <div className="mt-24 mb-28 w-9/12 max-w-7xl mx-auto">
        <div className="sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto md:float-right z-10">
          <div className="border-4 border-[#B3E9F3] bg-[#B3E9F3] w-full relative lg:right-16">
            <div className="mt-8">
              <div className="flex flex-row-reverse justify-center items-center relative left-6">
                <img
                  className="w-8 h-8 rounded-full relative right-3 top-1"
                  src={logo}
                  alt="logo pic"
                />
                <div className="relative right-5 mt-1">
                  ورود به سیستم مدیریت آکادمی بحر
                </div>
              </div>
            </div>

            <Formik
              initialValues={data}
              onSubmit={onSubmit}
              validationSchema={loginValidation}
            >
              {(errors, touched) => {
                return (
                  <Form>
                    <div className="mt-16">
                      <Field
                        dir="rtl"
                        className="block w-[60%] lg:w-[50%] xl:w-[45%] mx-auto h-10 text-lg md:text-base mt-2 px-2 outline-none"
                        type="email"
                        name="email"
                        placeholder="ایمیل"
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <span
                            dir="rtl"
                            className="block font-light -mb-6 w-[60%] lg:w-[50%] xl:w-[45%] mx-auto text-red-600"
                          >
                            {msg}
                          </span>
                        )}
                      />
                    </div>
                    <div className="mt-8">
                      <Field
                        dir="rtl"
                        className="block w-[60%] lg:w-[50%] xl:w-[45%] mx-auto h-10 text-lg md:text-base mt-2 px-2 outline-none"
                        type="password"
                        name="password"
                        placeholder="رمز عبور"
                      />
                      <ErrorMessage
                        name="password"
                        render={(msg) => (
                          <span
                            dir="rtl"
                            className="block font-light -mb-6 w-[60%] lg:w-[50%] xl:w-[45%] mx-auto text-red-600"
                          >
                            {msg}
                          </span>
                        )}
                      />
                    </div>
                    <div
                      dir="rtl"
                      className="w-[60%] lg:w-[50%] xl:w-[45%] mx-auto mt-12"
                    >
                      <Field
                        className="border-2 border-b-gray-900"
                        type="checkbox"
                        name="isAccepted"
                      />
                      <label className="px-1">مرا به خاطر بسپار</label>
                    </div>
                    <div className="flex flex-row-reverse justify-center gap-6 md:gap-8 lg:gap-8 xl:gap-12 2xl:gap-10 mt-10 mb-6">
                      <div>
                        <button
                          type="submit"
                          className="flex justify-center bg-[#3DD9C9] py-1 px-12 rounded-full font-light"
                        >
                          ورود
                        </button>
                      </div>
                      <Link
                        to="/signup"
                        className="flex justify-center text-base hover:underline decoration-solid text-blue-600 
                      cursor-pointer py-1 px-12 duration-500 ease-in-out"
                      >
                        ایجاد حساب
                      </Link>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>

        <div className="hidden md:block border-4 border-[#F2F2F2] md:w-5/12 lg:w-3/5 float-none pt-16 pb-4 relative top-24 -z-10">
          <img
            className="opacity-0 sm:opacity-100 w-4/5 lg:w-3/5 ml-10 relative md:right-12 lg:right-4 2xl:pb-4"
            src={pic}
            alt="devops pic"
          />
        </div>
      </div>
      <div className="opacity-0 mb-4 sm:mb-2 md:mb-32 lg:mb-16 xl:mb-12 2xl:mb-20">
        .
      </div>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
