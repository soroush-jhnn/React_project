import React, { useState } from "react";
import logo from "../../assets/images/landingPage/logo/download.jpg";

const UserInfo = () => {
  let user = localStorage.getItem("user");
  let userAsObject = JSON.parse(user);
  const [comps] = useState(userAsObject);

  const [data] = useState({
    name: comps.fullName,
    phone: comps.phoneNumber,
    id_code: comps.nationalId,
    birthday: comps.birthDate,
    email: comps.email,
  });

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
              <div className="relative bottom-1 right-1">مشخصات کاربر</div>
            </div>
          </div>
          <div dir="rtl" className="mt-16 grid grid-cols-2 gap-4 mr-16 mx-10">
            <div dir="rtl" className="flex flex-col justify-center gap-2">
              <label className="w-full align-middle cursor-pointer">نام</label>
              <input
                dir="rtl"
                className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                type="text"
                name="name"
                value={data.name}
                readOnly={true}
              />
            </div>
            <div dir="rtl" className="flex flex-col justify-center gap-2">
              <label className="w-full align-middle cursor-pointer">
                شماره تماس
              </label>
              <input
                dir="ltr"
                className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                type="text"
                name="phone"
                value={data.phone}
                readOnly={true}
              />
            </div>
            <div dir="rtl" className="mt-6 flex flex-col justify-center gap-2">
              <label className="w-full align-middle cursor-pointer">
                شماره ملی
              </label>
              <input
                dir="ltr"
                className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                type="text"
                name="id_code"
                value={data.id_code}
                readOnly={true}
              />
            </div>
            <div dir="rtl" className="mt-6 flex flex-col justify-center gap-2">
              <label className="w-full align-middle cursor-pointer">
                تاریخ تولد
              </label>
              <input
                dir="ltr"
                className="w-5/6 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                type="text"
                name="birthday"
                value={data.birthday}
                readOnly={true}
              />
            </div>
            <div
              dir="rtl"
              className="mt-6 flex flex-col justify-center gap-2 col-span-2"
            >
              <label className="w-full align-middle cursor-pointer">
                ایمیل
              </label>
              <input
                dir="ltr"
                className="w-11/12 h-10 text-lg md:text-base px-2 outline-none cursor-pointer shadow-md"
                type="email"
                name="email"
                value={data.email}
                readOnly={true}
              />
            </div>
          </div>

          {/* <div className='flex flex-row-reverse justify-center gap-6 md:gap-10 lg:gap-10 xl:gap-16 mt-16 mb-6'>
            <div>
                <button className='flex justify-center bg-[#3DD9C9] py-1 px-12 rounded-full font-light' type="submit">ثبت نام</button>
            </div>
            <Link to='/login' className='flex justify-center text-base px-12 underline decoration-solid text-blue-600 cursor-pointer py-1'>ورود</Link>  
        </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
