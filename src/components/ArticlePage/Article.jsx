import React, { useState, useEffect } from "react";
import usePagination from "./Pagination";

import Footer from "../Footer/Footer";
import ArticleComp from "./ArticleComp";
import SuggestComp from "./SuggestComp";

import Pagination from "@mui/material/Pagination";
import GetAllNews from "../../core/services/api/get-all-news.api";

import loadingGif from "../../assets/images/svg/Loading.gif";

export default function Article() {
  const [select, setSelect] = useState("primitive");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [comps, setComps] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        setComps(await GetAllNews());
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchHandler();
  }, []);

  // const filteredComps = comps.filter(lesson => lesson.course_name.includes(query)) || comps.filter(lesson => lesson.teacher_name.includes(query));
  const filteredComps = comps.filter((lesson) => lesson.title.includes(query));

  select === "popular" &&
    filteredComps.sort((a, b) => (a.stras < b.stras ? 1 : -1));
  select === "cheap" &&
    filteredComps.sort((a, b) => (a.price > b.price ? 1 : -1));
  select === "expensive" &&
    filteredComps.sort((a, b) => (a.price < b.price ? 1 : -1));
  select === "time" &&
    filteredComps.sort((a, b) => (a.releaseDate < b.releaseDate ? 1 : -1));

  // const lessons = Object.keys(comps).map((key) => comps[key]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const DATA = usePagination(filteredComps, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-[100vh]">
          <img src={loadingGif} alt="loadingGif" />
        </div>
      ) : (
        <>
          <div className=" mx-auto w-10/12 lg:w-9/12 xl:max-w-7xl mt-14 xl:mt-24 ">
            <div className="mx-auto w-1/3 text-2xl font-normal items-center mb-12 sm:mb-4">
              <center className="bg-[#B3E9F3] py-5">اخبار و مقالات</center>
            </div>
            <div className="border-4 border-[#F2F2F2] w-1/6 h-16 relative mx-auto bottom-14 sm:right-20 md:right-32 -z-10 hidden sm:flex"></div>
            <div className="grid grid-cols-2 place-content-center gap-8 sm:gap-12 md:gap-20 mt-14 mb-14">
              <div className="flex items-center justify-end ">
                <input
                  dir="rtl"
                  type="search"
                  placeholder="جستجوی اخبار"
                  onChange={(e) => setQuery(e.target.value)}
                  className="border-2 border-[#050E40] opacity-80 outline-none px-2 py-1 w-2/3 md:w-auto"
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
              <div className="flex items-center rounded-none ">
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
                    value="time"
                  >
                    جدید ترین ها
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
            <div className="grid grid-cols-2 sm:gap-4 xl:grid-cols-3 w-full mx-auto">
              {filteredComps.length === 0 && (
                <div>{filteredComps.length} courses founded.</div>
              )}
              {DATA.currentData().map((number) => (
                <ArticleComp
                  key={number._id}
                  article_name={number.title}
                  subject={number.category}
                  releaseDate={"1401/08/11"}
                  star={4}
                  src={number.image}
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
              <center className="py-5">مقالات پیشنهادی</center>
            </div>
            <SuggestComp />
            <div className="mb-32"></div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
