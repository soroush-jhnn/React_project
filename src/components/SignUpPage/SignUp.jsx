import React, { useState } from "react";
// pics
import pic from "../../assets/images/register/register.svg";
import logo from "../../assets/images/landingPage/logo/download.jpg";
// react-router-dom
import { Link } from "react-router-dom";
// footer
import Footer from "../Footer/Footer";
// api
import RegisterUser from "../../core/services/api/signup-student.api";
// toast
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// validation
import { validation } from "../../core/validation/sign-up-validation";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SignUp() {
  const [data] = useState({
    fullName: "",
    phoneNumber: "",
    nationalId: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const onRegisterUser = async (object) => {
    const user = await RegisterUser(object);
    user
      ? notify("ثبت نام موفقیت آمیز بود", "success")
      : notify("ثبت نام ناموفق بود", "danger");
  };

  const onSubmit = (values, actions) => {
    onRegisterUser({
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      birthDate: values.birthDate,
      nationalId: values.nationalId,
    });
  };

  return (
    <>
      <div>
        <Formik
          initialValues={data}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          {(errors, touched) => {
            return (
              <Form>
                <div className="mt-16 lg:mt-20 mb-28 w-9/12 mx-auto">
                  <div className="sm:w-full lg:w-3/5 mx-auto lg:float-right z-10 relative">
                    <div className="border-4 border-[#B3E9F3] bg-[#B3E9F3] w-full relative">
                      <div className="mt-8">
                        <div className="flex flex-row-reverse justify-center items-center relative left-6">
                          <img
                            className="w-8 h-8 rounded-full relative right-3 top-1"
                            src={logo}
                            alt="logo pic"
                          />
                          <div className="relative right-5 mt-1">
                            ثبت نام کاربر
                          </div>
                        </div>
                      </div>
                      <div
                        dir="rtl"
                        className="mt-16 grid grid-cols-2 gap-4 mr-16 mx-10"
                      >
                        <div
                          dir="rtl"
                          className="flex flex-col justify-center gap-2"
                        >
                          <label className="w-full align-middle">نام</label>
                          <Field
                            dir="rtl"
                            className="w-5/6 h-10 text-lg md:text-base px-2 outline-none"
                            type="text"
                            name="fullName"
                          />
                          <ErrorMessage
                            name="fullName"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-8 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                        <div
                          dir="rtl"
                          className="flex flex-col justify-center gap-2"
                        >
                          <label className="w-full align-middle">
                            شماره تماس
                          </label>
                          <Field
                            dir="rtl"
                            className="w-5/6 h-10 text-lg md:text-base px-2 outline-none"
                            type="text"
                            name="phoneNumber"
                          />
                          <ErrorMessage
                            name="phoneNumber"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-8 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                        <div
                          dir="rtl"
                          className="mt-6 flex flex-col justify-center gap-2"
                        >
                          <label className="w-full align-middle ">
                            شماره ملی
                          </label>
                          <Field
                            dir="rtl"
                            className="w-5/6 h-10 text-lg md:text-base px-2 outline-none"
                            type="text"
                            name="nationalId"
                          />
                          <ErrorMessage
                            name="nationalId"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-8 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                        <div
                          dir="rtl"
                          className="mt-6 flex flex-col justify-center gap-2"
                        >
                          <label className="w-full align-middle ">
                            تاریخ تولد
                          </label>
                          <Field
                            dir="rtl"
                            className="w-5/6 h-10 text-lg md:text-base px-2 outline-none"
                            type="text"
                            name="birthDate"
                          />
                          <ErrorMessage
                            name="birthDate"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-8 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                        <div
                          dir="rtl"
                          className="mt-6 flex flex-col justify-center gap-2 col-span-2"
                        >
                          <label className="w-full align-middle">ایمیل</label>
                          <Field
                            dir="rtl"
                            className="w-11/12 h-10 text-lg md:text-base px-2 outline-none"
                            type="email"
                            name="email"
                          />
                          <ErrorMessage
                            name="email"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-8 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                        <div
                          dir="rtl"
                          className="mt-6 flex flex-col justify-center gap-2 "
                        >
                          <label className="w-full align-middle">
                            رمز ورود
                          </label>
                          <Field
                            dir="rtl"
                            className="w-5/6 h-10 text-lg md:text-base px-2 outline-none"
                            type="password"
                            name="password"
                          />
                          <ErrorMessage
                            name="password"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-8 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                        <div
                          dir="rtl"
                          className="mt-6 flex flex-col justify-center gap-2"
                        >
                          <label className="w-full align-middle">
                            تکرار رمز
                          </label>
                          <Field
                            dir="rtl"
                            className="w-5/6 h-10 text-lg md:text-base px-2 outline-none"
                            type="password"
                            name="confirmPassword"
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-8 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                        <div
                          dir="rtl"
                          className="w-full mt-10 flex flex-col col-span-2"
                        >
                          <div className="flex flex-row">
                            <Field
                              dir="rtl"
                              className="outline-none"
                              type="checkbox"
                              name="isAccepted"
                            />
                            <label className="px-1">با شرایط سایت موافقم</label>
                          </div>
                          <ErrorMessage
                            name="isAccepted"
                            render={(msg) => (
                              <span
                                dir="rtl"
                                className="block font-light -mb-6 w-5/6 text-red-600"
                              >
                                {msg}
                              </span>
                            )}
                          />
                        </div>
                      </div>

                      <div className="flex flex-row-reverse justify-center gap-6 md:gap-10 lg:gap-10 xl:gap-16 mt-16 mb-6">
                        <div>
                          <button
                            type="submit"
                            className="flex justify-center bg-[#3DD9C9] py-1 px-12 rounded-full font-light"
                          >
                            ثبت نام
                          </button>
                        </div>
                        <Link
                          to="/login"
                          className="flex justify-center text-base px-12 underline decoration-solid text-blue-600 cursor-pointer py-1"
                        >
                          ورود
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block border-4 border-[#F2F2F2] md:w-3/5 lg:w-8/12 relative top-48 right-10 -z-10 pt-96">
                    <img
                      className="hidden lg:inline w-4/5 lg:w-6/12 ml-10 relative left-5 lg:pb-20 xl:pb-0"
                      src={pic}
                      alt="devops pic"
                    />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>

        <div className="opacity-0 mb-0 md:mb-0 lg:mb-48 xl:mb-40 2xl:mb-48">
          .
        </div>

        <ToastContainer />
      </div>

      <Footer />
    </>
  );
}
