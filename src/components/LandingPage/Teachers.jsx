import React, { useState, useEffect } from "react";
import Star from "../../UI/SVG/Star";
import EmptyStar from "../../UI/SVG/EmptyStar";
// uuid
import { v4 as uuid } from "uuid";
// api
import GetPageTeachers from "../../core/services/api/get-teacher-by-pagination.api";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        setTeachers(await GetPageTeachers());
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchHandler();
  }, []);

  return (
    <>
      {loading ? null : (
        <div className="container mx-auto w-11/12 md:w-10/12 xl:max-w-7xl mt-20 lg:mt-44">
          <div className="mx-auto mb-40 text-2xl font-semibold items-center relative top-24 w-1/6">
            <center>اساتید</center>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-10/12 mx-auto">
            <div
              className={
                "pb-4 bg-[#F2F2F2] m-2 xl:m-3 duration-500 shadow-lg  hover:shadow-xl hover:scale-110 "
              }
            >
              <div className="w-full mx-auto">
                <img
                  className="h-48 w-full p-1"
                  src={teachers[0].profile}
                  alt={teachers[0].role}
                />
              </div>
              <div className="grid grid-cols-1 gap-2 mx-2">
                <div className="mt-2 text-sm px-2 flex justify-center">
                  {teachers[0].fullName}
                </div>
                <div className="mt-3 text-sm px-2 flex justify-center">
                  استاد
                </div>
                <div
                  dir="rtl"
                  className="text-sm px-2 flex justify-center mb-4"
                >
                  {43}ساعت تدریس
                </div>
                <div className="text-sm px-2 flex justify-center">
                  <span className="flex">
                    {Array.from(Array(4).keys()).map(() => (
                      <Star key={uuid()} className="w-6 h-6" />
                    ))}
                    {Array.from(Array(1).keys()).map(() => (
                      <EmptyStar key={uuid()} className="w-6 h-6" />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={
                "pb-4 bg-[#F2F2F2] m-2 xl:m-3 duration-500 shadow-lg  hover:shadow-xl hover:scale-110"
              }
            >
              <div className="w-full mx-auto">
                <img
                  className="h-48 w-full p-1"
                  src={teachers[1].profile}
                  alt={teachers[1].role}
                />
              </div>
              <div className="grid grid-cols-1 gap-2 mx-2">
                <div className="mt-2 text-sm px-2 flex justify-center">
                  {teachers[1].fullName}
                </div>
                <div className="mt-3 text-sm px-2 flex justify-center">
                  استاد
                </div>
                <div
                  dir="rtl"
                  className="text-sm px-2 flex justify-center mb-4"
                >
                  {34}ساعت تدریس
                </div>
                <div className="text-sm px-2 flex justify-center">
                  <span className="flex">
                    {Array.from(Array(3).keys()).map(() => (
                      <Star key={uuid()} className="w-6 h-6" />
                    ))}
                    {Array.from(Array(2).keys()).map(() => (
                      <EmptyStar key={uuid()} className="w-6 h-6" />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={
                "pb-4 bg-[#F2F2F2] m-2 xl:m-3 duration-500 shadow-lg  hover:shadow-xl hover:scale-110"
              }
            >
              <div className="w-full mx-auto">
                <img
                  className="h-48 w-full p-1"
                  src={teachers[2].profile}
                  alt={teachers[2].role}
                />
              </div>
              <div className="grid grid-cols-1 gap-2 mx-2">
                <div className="mt-2 text-sm px-2 flex justify-center">
                  {teachers[2].fullName}
                </div>
                <div className="mt-3 text-sm px-2 flex justify-center">
                  استاد
                </div>
                <div
                  dir="rtl"
                  className="text-sm px-2 flex justify-center mb-4"
                >
                  {49}ساعت تدریس
                </div>
                <div className="text-sm px-2 flex justify-center">
                  <span className="flex">
                    {Array.from(Array(2).keys()).map(() => (
                      <Star key={uuid()} className="w-6 h-6" />
                    ))}
                    {Array.from(Array(3).keys()).map(() => (
                      <EmptyStar key={uuid()} className="w-6 h-6" />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={
                "pb-4 bg-[#F2F2F2] m-2 xl:m-3 duration-500 block lg:hidden xl:block shadow-lg  hover:shadow-xl hover:scale-110"
              }
            >
              <div className="w-full mx-auto">
                <img
                  className="h-48 w-full p-1"
                  src={teachers[3].profile}
                  alt={teachers[3].role}
                />
              </div>
              <div className="grid grid-cols-1 gap-2 mx-2">
                <div className="mt-2 text-sm px-2 flex justify-center">
                  {teachers[3].fullName}
                </div>
                <div className="mt-3 text-sm px-2 flex justify-center">
                  استاد
                </div>
                <div
                  dir="rtl"
                  className="text-sm px-2 flex justify-center mb-4"
                >
                  {27}ساعت تدریس
                </div>
                <div className="text-sm px-2 flex justify-center">
                  <span className="flex">
                    {Array.from(Array(4).keys()).map(() => (
                      <Star key={uuid()} className="w-6 h-6" />
                    ))}
                    {Array.from(Array(1).keys()).map(() => (
                      <EmptyStar key={uuid()} className="w-6 h-6" />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="border-4 border-[#B3E9F3] w-1/6 h-32 relative hidden sm:flex bottom-24 right-6 xl:right-14 
         -z-10 float-right"
          ></div>
          <div
            className="border-4 border-[#3DD9C9] w-1/6 h-32 relative hidden lg:flex bottom-96 left-10  
         -z-10 float-left"
          ></div>
        </div>
      )}
    </>
  );
}
