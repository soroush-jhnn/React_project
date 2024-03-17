import React, { useState } from "react";
// google map package
// import GoogleMapReact from "google-map-react";
// footer
import Footer from "../Footer/Footer";
// toast
import { notify } from "../LoginPage/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// api
import contactUs from "../../core/services/api/contact-us.pi";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// validation
import { validation } from "../../core/validation/contact-us-validation";

export default function ContactUs() {
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

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };

  return (
    <React.Fragment>
      <div className="mt-24 mb-28 w-9/12 max-w-7xl mx-auto">
        <div className="sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto md:float-right z-10">
          <div className="border-4 border-[#B3E9F3] bg-[#B3E9F3] w-full relative lg:right-16">
            <Formik
              initialValues={data}
              onSubmit={onSubmit}
              validationSchema={validation}
            >
              {(errors, touched) => {
                return (
                  <Form>
                    <div className="flex flex-col items-center gap-6 bg-[#B3E9F3] pt-8 pb-6">
                      <div
                        dir="rtl"
                        className="flex flex-col justify-center gap-2 w-[50%]"
                      >
                        <label className="w-full align-middle cursor-pointer">
                          ایمیل
                        </label>
                        <Field
                          dir="rtl"
                          className="w-full h-12 text-lg md:text-base px-2 outline-none cursor-pointer"
                          type="email"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <span
                              dir="ltr"
                              className="font-light -mb-8 w-full text-red-600"
                            >
                              {msg}
                            </span>
                          )}
                        />
                      </div>
                      <div
                        dir="rtl"
                        className="flex flex-col justify-center gap-2 w-[50%]"
                      >
                        <label className="w-full align-middle cursor-pointer">
                          متن
                        </label>
                        <Field
                          component="textarea"
                          rows="6"
                          dir="rtl"
                          name="text"
                          className="w-full text-lg md:text-base p-2 outline-none cursor-pointer resize-none"
                          type="text"
                        />
                        <ErrorMessage
                          name="text"
                          render={(msg) => (
                            <span
                              dir="ltr"
                              className="font-light -mb-8 w-full text-red-600"
                            >
                              {msg}
                            </span>
                          )}
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[#3DD9C9] to-[#41ABC5] hover:bg-gradient-to-bl font-base text-white
                      text-sm text-center cursor-pointer z-10 w-1/4 mt-4 mx-auto flex justify-center py-1 px-20 rounded-full"
                      >
                        ارسال
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>

        <div className="hidden md:block border-4 border-[#F2F2F2] md:w-5/12 lg:w-3/5 float-none pt-16 pb-4 relative top-24 -z-10">
          {/* <img
            className="opacity-0 sm:opacity-100 w-4/5 lg:w-3/5 ml-10 relative md:right-12 lg:right-4 2xl:pb-4"
            src={pic}
            alt="devops pic"
          /> */}
          <div className="opacity-0 sm:opacity-100 w-4/5 lg:w-3/5 ml-10 relative md:right-12 lg:right-4 2xl:pb-4 h-80">
            {/* <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact> */}
          </div>
        </div>
      </div>
      <div className="opacity-0 mb-4 sm:mb-2 md:mb-32 lg:mb-16 xl:mb-12 2xl:mb-20">
        .
      </div>

      <ToastContainer />
      <Footer />
    </React.Fragment>
  );
}

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
