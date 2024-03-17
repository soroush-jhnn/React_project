import * as React from "react";
import { useState, useEffect } from "react";
import Coursecomp from "./Coursecomp";
import CourseCompCol from "./CourseCompCol";
import SuggestCourse from "./suggestCourse";
// footer
import Footer from "../Footer/Footer";
// material ui
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
// pagination
import Pagination from "@mui/material/Pagination";
import Pagin from "./Pagination";
// api
import GetAllCourses from "../../core/services/api/get-all-courses.api";
// lading gif
import loadingGif from "../../assets/images/svg/Loading.gif";

export default function Course() {
  const [select, setSelect] = useState("primitive");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [comps, setComps] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        setComps(await GetAllCourses());
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchHandler();
  }, []);

  const filteredComps = comps.filter((lesson) => lesson.title.includes(query));

  select === "popular" &&
    filteredComps.sort((a, b) => (a.like < b.like ? 1 : -1));
  select === "cheap" &&
    filteredComps.sort((a, b) => (a.cost > b.cost ? 1 : -1));
  select === "expensive" &&
    filteredComps.sort((a, b) => (a.cost < b.cost ? 1 : -1));
  select === "time" &&
    filteredComps.sort((a, b) => (a.hours < b.hours ? 1 : -1));

  // const lessons = Object.keys(comps).map((key) => comps[key]);

  let [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };
  const [PER_PAGE, setPER_PAGE] = useState(8);
  PER_PAGE === "4" && setPER_PAGE(4);
  PER_PAGE === "8" && setPER_PAGE(8);
  PER_PAGE === "12" && setPER_PAGE(12);
  PER_PAGE === "16" && setPER_PAGE(16);
  const DATA = Pagin(filteredComps, PER_PAGE);

  const [layout, setLayout] = useState("row");
  const layoutHandlerRow = () => {
    setLayout("row");
  };
  const layoutHandlerCol = () => {
    setLayout("col");
  };

  let shopList = localStorage.getItem("shoplist");
  let shopListAsObject = JSON.parse(shopList);
  if (shopListAsObject === null) {
    localStorage.setItem("shoplist", JSON.stringify([]));
    shopList = localStorage.getItem("shoplist");
    shopListAsObject = JSON.parse(shopList);
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-[100vh]">
          <img src={loadingGif} alt="loadingGif" />
        </div>
      ) : (
        <>
          <div className=" mx-auto w-10/12 lg:w-9/12 xl:max-w-7xl mt-14 xl:mt-24 ">
            <div className="mx-auto w-1/4 text-2xl font-normal items-center mb-12 sm:mb-4">
              <center className="bg-[#B3E9F3] py-5">دوره ها</center>
            </div>
            <div className="border-4 border-[#F2F2F2] w-1/6 h-16 relative mx-auto bottom-14 sm:right-20 md:right-24 -z-10 hidden sm:flex"></div>
            <div className="flex flex-row justify-between mt-14 mb-14 px-2">
              <div className="flex items-center">
                <select
                  dir="ltr"
                  className="border-2 border-[#050E40] opacity-80 px-2 py-1 h-9 focus:rounded-none "
                  value={PER_PAGE}
                  onChange={(e) =>
                    setPER_PAGE(e.target.value) & setPage(1) & DATA.jump(1)
                  }
                >
                  <option className="rounded-none focus:rounded-none" value="4">
                    4
                  </option>
                  <option className="rounded-none focus:rounded-none" value="8">
                    8
                  </option>
                  <option
                    className="rounded-none focus:rounded-none"
                    value="12"
                  >
                    12
                  </option>
                  <option
                    className="rounded-none focus:rounded-none"
                    value="16"
                  >
                    16
                  </option>
                </select>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex items-center justify-center sm:justify-end ">
                  <input
                    dir="rtl"
                    type="search"
                    placeholder="جستجوی دوره"
                    onChange={(e) => setQuery(e.target.value)}
                    className="border-2 border-[#050E40] opacity-80 outline-none px-2 py-1 w-2/3 sm:w-auto "
                  />
                  <div className="border-2 border-[#050E40] opacity-80 pl-1 pr-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center rounded-none z-10 ">
                  <select
                    dir="rtl"
                    className="border-2 border-[#050E40] opacity-80 px-2 py-1 h-9 focus:rounded-none"
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                  >
                    <option
                      className="rounded-none focus:rounded-none"
                      value="primitive"
                    >
                      بدون فیلتر
                    </option>
                    <option
                      className="rounded-none focus:rounded-none"
                      value="popular"
                    >
                      محبوب ترین ها
                    </option>
                    <option
                      className="rounded-none focus:rounded-none"
                      value="cheap"
                    >
                      ارزان ترین ها
                    </option>
                    <option
                      className="rounded-none focus:rounded-none"
                      value="expensive"
                    >
                      گران ترین ها
                    </option>
                    <option
                      className="rounded-none focus:rounded-none"
                      value="time"
                    >
                      طولانی ترین ها
                    </option>
                  </select>
                  <div className="border-2 border-[#050E40] opacity-80 pl-1 pr-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className={
                    "border-2 border-[#050E40] opacity-70 p-1 cursor-pointer " +
                    (layout === "col" ? "bg-[#e1e1e1] " : "") +
                    (layout === "row" ? "hover:bg-[#f1f1f1]" : "")
                  }
                >
                  <ViewListIcon onClick={layoutHandlerCol} />
                </div>
                <div
                  className={
                    "border-2 border-[#050E40] opacity-70 p-1 cursor-pointer " +
                    (layout === "row" ? "bg-[#e1e1e1] " : "") +
                    (layout === "col" ? "hover:bg-[#f1f1f1]" : "")
                  }
                >
                  <ViewModuleIcon onClick={layoutHandlerRow} />
                </div>
              </div>
            </div>
            <div
              className={
                "grid sm:gap-4 w-full mx-auto " +
                (layout === "row"
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid-col")
              }
            >
              {filteredComps.length === 0 && (
                <div>{filteredComps.length} courses founded.</div>
              )}
              {layout === "row" &&
                DATA.currentData().map((number) => (
                  <Coursecomp
                    key={number._id}
                    id={number._id}
                    title={number.title}
                    teacher_name={number.teacher.fullName}
                    hours={44}
                    price={number.cost}
                    star={4}
                    course_name={number.title}
                    src={number.lesson.image}
                    startDate={number.startDate}
                    shadow={true}
                  />
                ))}
              {layout === "col" &&
                DATA.currentData().map((number) => (
                  <CourseCompCol
                    key={number._id}
                    id={number._id}
                    title={number.title}
                    teacher_name={number.teacher.fullName}
                    hours={44}
                    price={number.cost}
                    star={4}
                    course_name={number.title}
                    src={number.lesson.image}
                    startDate={number.startDate}
                    shadow={true}
                  />
                ))}
            </div>
            <Pagination
              className="mt-16 flex justify-center"
              page={page}
              count={Math.ceil(filteredComps.length / PER_PAGE)}
              onChange={handleChange}
            />

            <div className="border-b-2 border-[#41ABC5] w-full mt-20 mb-16"></div>
            <div className="mx-auto text-xl font-normal items-center mb-12 sm:mb-4">
              <center className="py-5">کورس های پیشنهادی</center>
            </div>
            <SuggestCourse />
            <div className="mb-48"></div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
