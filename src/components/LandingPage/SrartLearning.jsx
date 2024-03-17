import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaceBook from "../../assets/images/svg/FaceBook.svg";
import Insta from "../../assets/images/svg/Insta.svg";
import Telegram from "../../assets/images/svg/Telegram.svg";
import Address from "../../assets/images/svg/Address.svg";

import pic from "../../assets/images/landingPage/devops.png";
// import SignUp from '../SignUpPage/SignUp'

export default function SrartLearning() {
  const loggedIn = localStorage.getItem("token");
  const [isLoggedIn] = useState(loggedIn ? true : false);

  return (
    <>
      <div className="md:mt-24 mb-28 w-11/12 xl:max-w-7xl mx-auto">
        <div className="flex-col float-right relative right-4 top-36">
          <img
            src={FaceBook}
            alt="#"
            className="scale-x-[60%] scale-y-[60%] cursor-pointer hover:scale-x-[70%] hover:scale-y-[70%] ease-in-out duration-300"
          />
          <img
            src={Insta}
            alt="#"
            className="scale-x-[60%] scale-y-[60%] cursor-pointer hover:scale-x-[70%] hover:scale-y-[70%] ease-in-out duration-300"
          />
          <img
            src={Telegram}
            alt="#"
            className="scale-x-[60%] scale-y-[60%] cursor-pointer hover:scale-x-[70%] hover:scale-y-[70%] ease-in-out duration-300"
          />
        </div>
        <div className="w-[80%] md:w-[55%] xl:w-[58%] 2xl:w-[60%] h-96 float-right relative z-10 right-4">
          <div className="border-4 border-[#B3E9F3] bg-[#B3E9F3] h-4/5 w-full">
            <div
              dir="rtl"
              className=" mx-auto w-4/5 h-2/3 relative top-14 text-ellipsis overflow-hidden leading-7"
            >
              <h2 className="font-semibold text-xl">
                آموزش برنامه نویسی، خودآموزی، ورود به بازار کار
              </h2>
              <div className="pt-4 font-normal text-lg">
                حرفه ای شدن رو از امروز شروع کن
              </div>
              <div className="pt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <img
              src={Address}
              alt="#"
              className=" scale-x-[60%] scale-y-[60%] "
            />
            <div
              dir="rtl"
              className=" text-sm xl:text-base relative left-2 top-3 text-[#A066F2] w-3/4 md:w-1/2"
            >
              مازندران، ساری، خیابان 18 دی، ساختمان سپهر
            </div>
          </div>
        </div>

        <div className="hidden md:block border-4 border-[#F2F2F2] w-[70%] md:w-1/2 h-80 float-none relative left-10 sm:left-20 top-16 md:top-14">
          <img
            className="hidden md:flex w-3/5 lg:w-1/2 h-full relative bottom-10 right-14 md:right-10 lg:left-10"
            src={pic}
            alt="devops pic"
          />
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#3DD9C9] to-[#41ABC5] hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-8 py-2 text-center float-right relative bottom-28 md:bottom-12 right-8 md:left-14 lg:left-16 cursor-pointer z-10"
          >
            {isLoggedIn ? (
              <Link to="/courses">شروع یادگیری</Link>
            ) : (
              <Link to="/signup">شروع یادگیری</Link>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
