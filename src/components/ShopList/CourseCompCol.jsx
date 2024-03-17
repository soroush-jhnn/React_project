import React, { useState } from "react";
import Star from "../../UI/SVG/Star";
import EmptyStar from "../../UI/SVG/EmptyStar";
import { Link } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { green } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { red } from "@mui/material/colors";

import { v4 as uuid } from "uuid";
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseCompCol = (props) => {
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isTaken, setIsTaken] = useState(props.isTaken);

  const addRow = () => {
    setIsTaken(true);
    notify("درس با موفقیت اخذ شد", "success");
    const shopList = localStorage.getItem("shoplist");
    const shopListAsObject = JSON.parse(shopList);
    shopListAsObject.push({
      id: props.id,
      course_name: props.course_name,
      teacher_name: props.teacher_name,
      hours: props.hours,
      price: props.price,
      star: props.star,
      src: props.src,
      isLikedByUser: props.isLikedByUser,
      isTaken: true,
      inShopList: props.inShopList,
    });
    localStorage.setItem("shoplist", JSON.stringify(shopListAsObject));
  };

  const deleteRow = () => {
    setIsTaken(false);
    notify("درس با موفقیت حذف شد", "success");
    const shopList = localStorage.getItem("shoplist");
    const shopListAsObject = JSON.parse(shopList);
    const shopListAsObject2 = shopListAsObject.filter(
      (shopListAsObject) => shopListAsObject.id !== props.id
    );
    localStorage.setItem("shoplist", JSON.stringify(shopListAsObject2));
  };

  return (
    <React.Fragment>
      <div
        className={
          "py-4 bg-[#F2F2F2] m-2 lg:m-3 " +
          (props.shadow === true ? "shadow-lg hover:shadow-xl" : "")
        }
      >
        <div className="flex flex-row-reverse justify-start px-4 sm:px-1 md:px-4">
          <img
            className={
              "w-1/4 h-40 duration-500 " +
              (props.shadow === true ? "hover:scale-110" : "")
            }
            src={props.src}
            alt={props.title}
          />
          <div className="border-l border-[#41ABC5] mx-4"></div>
          <div dir="rtl" className="grid grid-cols-12 w-full items-center">
            <div className="text-sm px-2 flex flex-row col-span-11 sm:col-span-11 xl:col-span-4">
              <div>نام دوره :</div>
              <div>{props.course_name}</div>
            </div>
            <div className="text-sm px-2 hidden xl:flex flex-row col-span-5 sm:col-span-6 xl:col-span-4">
              <div className="hidden sm:flex"> استاد :</div>
              <div className="font-medium">{props.teacher_name}</div>
            </div>

            <div dir="ltr" className="xl:col-span-4">
              {isTaken ? (
                <DeleteOutlineIcon
                  sx={{ color: red[600] }}
                  className="cursor-pointer"
                  onClick={() => setShowDeleteModal(true)}
                />
              ) : (
                <AddCircleOutlineOutlinedIcon
                  sx={{ color: green[600] }}
                  className="cursor-pointer"
                  onClick={() => setShowAddModal(true)}
                />
              )}
            </div>
            <div className="text-sm px-2 col-span-11 sm:col-span-5 xl:col-span-4">
              <span className="flex">
                {Array.from(Array(props.star).keys()).map(() => (
                  <Star key={uuid()} className="w-6 h-6" />
                ))}
                {Array.from(Array(5 - props.star).keys()).map(() => (
                  <EmptyStar key={uuid()} className="w-6 h-6" />
                ))}
              </span>
            </div>
            <div className="text-sm px-2 hidden lg:flex flex-row col-span-5 sm:col-span-6 xl:col-span-4">
              <div className="">قیمت :</div>
              <div>{props.price}تومان</div>
            </div>
            <div className="hidden xl:flex col-span-3"></div>
            <Link
              dir="ltr"
              to={{ pathname: `/courses/${props.id}`, data: "" }}
              className="text-sm px-2 underline decoration-solid text-blue-600 cursor-pointer sm:col-span-7 lg:col-span-1"
            >
              بیشتر
            </Link>
          </div>
        </div>
      </div>

      {showAddModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  dir="rtl"
                  className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                >
                  <h3 dir="rtl" className="text-3xl font-semibold ">
                    ثبت نام در دوره
                  </h3>
                  <button
                    dir="rtl"
                    className="p-1 mr-auto bg-transparent border-0 text-black opacity-70 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowAddModal(false)}
                  >
                    <span className=" bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 ml-20 text-slate-500 text-lg leading-relaxed">
                    آیا از اخذ این درس اطمینان دارید؟
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center flex-row-reverse justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAddModal(false)}
                  >
                    خیر
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => addRow() & setShowAddModal(false)}
                  >
                    بله
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showDeleteModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  dir="rtl"
                  className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                >
                  <h3 dir="rtl" className="text-3xl font-semibold ">
                    لغو ثبت نام در دوره
                  </h3>
                  <button
                    dir="rtl"
                    className="p-1 mr-auto bg-transparent border-0 text-black opacity-70 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    <span className=" bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 ml-20 text-slate-500 text-lg leading-relaxed">
                    آیا از حذف این درس اطمینان دارید؟
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center flex-row-reverse justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    خیر
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => deleteRow() & setShowDeleteModal(false)}
                  >
                    بله
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <ToastContainer />
    </React.Fragment>
  );
};

export default CourseCompCol;
