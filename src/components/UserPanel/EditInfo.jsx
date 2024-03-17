import React, { useState } from "react";
import logo from "../../assets/images/landingPage/logo/download.jpg";
// toast
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// validaton
import { validation } from "../../core/validation/edit-student-validation";
import EditStudentInfo from "../../core/services/api/edit-student-info.api";
// storage
import { removeItem, setItem } from "../../core/services/storage/storage";

const EditInfo = () => {
  let user = localStorage.getItem("user");
  let userAsObject = JSON.parse(user);
  const [comps] = useState(userAsObject);

  const [data] = useState({
    fullName: comps.fullName,
    phoneNumber: comps.phoneNumber,
    nationalId: comps.nationalId,
    birthDate: comps.birthDate,
    email: comps.email,
    password: "",
    confirmPassword: "",
  });

  const onEditUser = async (object) => {
    const response = await EditStudentInfo(comps._id, object);
    response && removeItem('user');
    response && setItem('user', JSON.stringify(response));
    response && notify('اطلاعات با موفقیت تغییر کرد', 'success');
  };

  const onSubmit = (values, actions) => {
    onEditUser({
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      birthDate: values.birthDate,
      nationalId: values.nationalId,
      profile: comps.profile,
    });

    // notify("information changed successfully!", "success");
  };

  return (
    <React.Fragment>
      <div className="w-full mx-auto lg:float-right z-10 relative ">
        <div className="w-full relative">
          <div className="mt-8">
            <div className="flex flex-row-reverse justify-center items-center">
              <img
                className="w-8 h-8 rounded-full relative "
                src={logo}
                alt="logo pic"
              />
              <div className="relative bottom-1 right-1">تغییر مشخصات</div>
            </div>
          </div>
          <Formik
            initialValues={data}
            onSubmit={onSubmit}
            validationSchema={validation}
          >
            {(errors, touched) => {
              return (
                <Form>
                  <div
                    dir="rtl"
                    className="mt-16 grid grid-cols-2 gap-4 mr-16 mx-10"
                  >
                    <div
                      dir="rtl"
                      className="flex flex-col justify-center gap-2"
                    >
                      <label className="w-full align-middle cursor-pointer">
                        نام
                      </label>
                      <Field
                        dir="rtl"
                        className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                        type="text"
                        name="fullName"
                      />
                      <ErrorMessage
                        name="fullName"
                        render={(msg) => (
                          <span
                            dir="ltr"
                            className="font-light -mb-8 w-5/6 text-red-600"
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
                      <label className="w-full align-middle cursor-pointer">
                        شماره تماس
                      </label>
                      <Field
                        dir="ltr"
                        className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                        type="text"
                        name="phoneNumber"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        render={(msg) => (
                          <span
                            dir="ltr"
                            className="font-light -mb-8 w-5/6 text-red-600"
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
                      <label className="w-full align-middle cursor-pointer">
                        شماره ملی
                      </label>
                      <Field
                        dir="ltr"
                        className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                        type="text"
                        name="nationalId"
                      />
                      <ErrorMessage
                        name="nationalId"
                        render={(msg) => (
                          <span
                            dir="ltr"
                            className="font-light -mb-8 w-5/6 text-red-600"
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
                      <label className="w-full align-middle cursor-pointer">
                        تاریخ تولد
                      </label>
                      <Field
                        dir="ltr"
                        className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                        type="text"
                        name="birthDate"
                      />
                      <ErrorMessage
                        name="birthDate"
                        render={(msg) => (
                          <span
                            dir="ltr"
                            className="font-light -mb-8 w-5/6 text-red-600"
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
                      <label className="w-full align-middle cursor-pointer">
                        ایمیل
                      </label>
                      <Field
                        dir="ltr"
                        className="w-11/12 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                        type="email"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <span
                            dir="ltr"
                            className="font-light -mb-8 w-11/12 text-red-600"
                          >
                            {msg}
                          </span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="ml-16 mr-2 mt-48 flex justify-between">
                    <div className="flex gap-8">
                      <button
                        type="submit"
                        className="flex justify-center bg-[#3DD9C9] text-[#FFF] py-1 px-12 rounded-full "
                      >
                        ثبت
                      </button>
                      <button
                        type="reset"
                        className="flex justify-center bg-[#ff2f48] text-[#FFF] py-1 px-12 rounded-full "
                      >
                        لغو
                      </button>
                    </div>
                    <div className="flex gap-8">
                      <button
                        // type="submit"
                        className="flex justify-center text-[#A066F2] bg-[#fff] border border-[#A066F2] py-1 px-8 rounded-full "
                      >
                        تغییر رمز
                      </button>
                      <button
                        // type="submit"
                        className="flex justify-center text-[#A066F2] bg-[#fff] border border-[#A066F2] py-1 px-8 rounded-full "
                      >
                        ادیت عکس
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default EditInfo;
