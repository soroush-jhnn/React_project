import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Coursecomp(props) {
  const [isLiked, setIsLiked] = useState(props.isLikedByUser);
  const [isInShopList, setIsInShopList] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [count, setCount] = useState(0);

  const LikeHandler = (event) => {
    setIsLiked((isLiked) => !isLiked);
  };

  const picHandler = () => {
    let sh = localStorage.getItem("shoplist");
    let sh2 = JSON.parse(sh);
    if (sh2 === null) {
      localStorage.setItem("shoplist", JSON.stringify([]));
      sh = localStorage.getItem("shoplist");
      sh2 = JSON.parse(sh);
    }

    if (count === 0) {
      setIsInShopList(false);
      sh2.map((item) => item.id === props.id && setIsInShopList(true));
      setCount(1);
    }

    setShowDeleteModal(true);
  };

  const shoppingList = (event) => {
    // localStorage.clear();
    let shopList = localStorage.getItem("shoplist");
    let shopListAsObject = JSON.parse(shopList);
    if (shopListAsObject === null) {
      localStorage.setItem("shoplist", JSON.stringify([]));
      shopList = localStorage.getItem("shoplist");
      shopListAsObject = JSON.parse(shopList);
    }

    !isInShopList &&
      shopListAsObject.push({
        id: props.id,
        course_name: props.course_name,
        teacher_name: props.teacher_name,
        hours: props.hours,
        price: props.price,
        star: props.star,
        src: props.src,
        isLikedByUser: isLiked,
        isTaken: true,
        inShopList: !props.inShopList,
      });

    const shopListAsObject2 = !isInShopList
      ? shopListAsObject
      : shopListAsObject.filter(
          (shopListAsObject) => shopListAsObject.id !== props.id
        );

    setIsInShopList((isInShopList) => !isInShopList);
    localStorage.setItem("shoplist", JSON.stringify(shopListAsObject2));

    !isInShopList
      ? notify("درس با موفقیت اخذ شد", "success")
      : notify("درس با موفقیت حذف شد", "success");
    // console.log(shopListAsObject);
  };

  return (
    <React.Fragment>
      <div
        className={
          "pb-4 bg-[#F2F2F2] m-2 lg:m-3 " +
          (props.shadow === true ? "shadow-lg hover:shadow-xl" : "")
        }
      >
        <div className="w-full mx-auto" onClick={() => picHandler()}>
          <img
            className={
              "h-48 w-full duration-500 py-4 " +
              (props.shadow === true ? "hover:scale-110" : "")
            }
            src={props.src}
            alt={props.title}
          />
        </div>
        <div
          className="border-b border-[#41ABC5] w-full"
          onClick={() => picHandler()}
        ></div>
        <div className="grid grid-cols-2 gap-4 place-content-end p-3">
          <div className="">
            {isLiked ? (
              <div className="w-6 cursor-pointer px-1" onClick={LikeHandler}>
                <Favorite sx={{ color: pink[600] }} />
              </div>
            ) : (
              <div className="w-6 cursor-pointer px-1" onClick={LikeHandler}>
                <FavoriteBorder sx={{ color: pink[600] }} />
              </div>
            )}
          </div>
          <div dir="rtl" className=" text-base font-medium px-1">
            {props.course_name}
          </div>
          <div className="text-sm px-1">
            {/* <span className="flex">
                  {Array.from(Array(props.star).keys()).map(() => <Star key={uuid()} className="w-6 h-6" />)}
                  {Array.from(Array(5 - props.star).keys()).map(() => <EmptyStar key={uuid()} className="w-6 h-6" />)}
               </span> */}
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                defaultValue={props.star}
                precision={0.5}
                sx={{ fontSize: "22px" }}
              />
            </Stack>
          </div>
          <div dir="rtl" className=" text-sm px-1">
            {props.teacher_name}
          </div>
          <div className="text-sm px-1 flex flex-row">
            <div>تومان</div>
            <div className="font-medium">{props.price}</div>
          </div>
          <div dir="rtl" className="text-sm px-1">
            {props.hours}ساعت
          </div>
          <Link
            to={`/courses/${props.id}`}
            className="text-sm px-1 underline decoration-solid text-blue-600 cursor-pointer"
          >
            بیشتر
          </Link>
        </div>
      </div>

      {showDeleteModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  dir="rtl"
                  className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                >
                  <h3 dir="rtl" className="text-2xl font-medium ">
                    دوره {props.course_name}
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
                  <div className="flex justify-between gap-10 md:gap-16 lg:gap-28">
                    <img
                      className={"h-40 w-60 duration-500 hover:scale-110"}
                      src={props.src}
                      alt={props.title}
                    />
                    <div>
                      <div className="flex flex-col gap-4">
                        <div className="text-lg px-2 flex flex-row-reverse ">
                          <div className="text-base">نام دوره </div>
                          <div className="text-base">&nbsp;:&nbsp;</div>
                          <div className="text-base">{props.course_name}</div>
                        </div>
                        <div className="text-lg px-2 flex flex-row-reverse ">
                          <div className="text-base">نام استاد </div>
                          <div className="text-base">&nbsp;:&nbsp;</div>
                          <div className="text-base">{props.teacher_name}</div>
                        </div>
                        <div className="text-lg px-2 flex flex-row-reverse ">
                          <div className="text-base"> مدت دوره </div>
                          <div className="text-base">&nbsp;:&nbsp;</div>
                          <div className="text-base font-medium">
                            {props.hours}
                          </div>
                          <div className="text-base">ساعت</div>
                        </div>
                        <div className="text-lg px-2 flex flex-row-reverse ">
                          <div className="text-base"> قیمت </div>
                          <div className="text-base">&nbsp;:&nbsp;</div>
                          <div className="text-base">{props.price}</div>
                          <div className="text-base">تومان</div>
                        </div>
                        <div className="text-lg px-2 flex flex-row-reverse ">
                          <div className="text-base"> تاریخ شروع </div>
                          <div className="text-base">&nbsp;:&nbsp;</div>
                          <div className="text-base">
                            {props.startDate.slice(0, 10)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse mt-4 px-2">
                    درصد تکمیل دوره
                  </div>
                  <div className="flex flex-row-reverse mt-4 px-2">
                    {" "}
                    ظرفیت دوره
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center flex-row-reverse gap-2 justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  {!isInShopList ? (
                    <button
                      className="bg-[#41ABC5] text-white px-2 py-1"
                      type="button"
                      onClick={() => shoppingList() & setShowDeleteModal(false)}
                    >
                      اضافه به سبد خرید
                    </button>
                  ) : (
                    <button
                      className="bg-[#41ABC5] text-white px-2 py-1"
                      type="button"
                      onClick={() => shoppingList() & setShowDeleteModal(false)}
                    >
                      حذف از سبد خرید
                    </button>
                  )}
                  <Link
                    to={`/courses/${props.id}`}
                    className="px-2 py-1 border border-[#41ABC5] text-[#41ABC5]"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    بیشتر
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="absolute">
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}
