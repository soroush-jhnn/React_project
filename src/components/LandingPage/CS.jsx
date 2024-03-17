import React, { useState } from "react";
import pic from "../../assets/images/landingPage/comment.PNG";
// validation
import { validation } from "../../core/validation/contact-us-validation";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// api
import contactUs from "../../core/services/api/contact-us.pi";
// toast
import { notify } from "../UserPanel/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CS() {
  let user = localStorage.getItem("user");
  let userAsObject = JSON.parse(user);
  const [info] = useState(userAsObject);

  const [data] = useState({
    email: "",
    text: "",
  });

  const onSubmit = (values, actions) => {
    if (user) {
      contactUs({
        email: values.email,
        text: values.text,
        name: info.fullName,
      });
      notify("نظر شما با موفقیت ثبت شد", "success");
    } else {
      notify("برای نظر دادن باید وارد اکانت خود شوید", "danger");
    }
  };

  return (
    <div className="container mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:max-w-7xl mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
        <div className="mx-auto text-2xl font-semibold items-center w-1/2 mt-36 mb-12 sm:mb-4 relative left-10 top-8">
          <center>انتقادات و پیشنهادات</center>
        </div>
        <div className="hidden lg:flex"></div>
      </div>
      <Formik
        initialValues={data}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        {(errors, touched) => {
          return (
            <Form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-5/6 md:w-full mx-auto">
                <div className="w-10/12 xl:w-2/3 2xl:w-3/4 mx-auto bg-[#F2F2F2] h-full lg:h-[80%] xl:h-2/3 2xl:h-2/3 mt-20 shadow-lg">
                  <div dir="rtl" className="w-3/4 mx-auto mt-6">
                    ایمیل
                  </div>
                  <Field
                    className="block w-3/4 mx-auto h-12 text-lg md:text-base mt-2 px-2 outline-none"
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
                  <div dir="rtl" className="w-3/4 mx-auto mt-6">
                    متن
                  </div>
                  <Field
                    component="textarea"
                    rows="4"
                    dir="rtl"
                    name="text"
                    className="block w-3/4 mx-auto h-1/3 text-lg md:text-base mt-2 p-2 outline-none resize-none"
                  />
                  <ErrorMessage
                    name="text"
                    render={(msg) => (
                      <span
                        dir="rtl"
                        className="block font-light -mb-8 w-5/6 text-red-600"
                      >
                        {msg}
                      </span>
                    )}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#3DD9C9] to-[#41ABC5] hover:bg-gradient-to-bl font-base text-white
                      text-sm text-center cursor-pointer z-10 w-1/4 mt-8 mx-auto flex justify-center py-1 px-20 rounded-full relative
                      top-14 sm:top-12 lg:top-0 xl:top-0 2xl:top-6"
                  >
                    ارسال
                  </button>
                  <div className="opacity-0 mb-14 lg:mb-4 xl:mb-0">.</div>
                </div>
                <div className="hidden lg:flex justify-center mx-auto h-[90%]">
                  <img
                    className="flex items-center justify-center bg-contain bg-center mb-10 mt-20"
                    src={pic}
                    alt="hero-svg-pic"
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <div className="opacity-0 mt-48 sm:mt-44 md:mt-56 sm:flex lg:hidden">
        .
      </div>
      <div className="opacity-0 hidden mt-20 lg:flex lg:mt-40 xl:mt-32 2xl:mt-0">
        .
      </div>
      <ToastContainer />
    </div>
  );
}
