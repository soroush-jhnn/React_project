import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";


export default function Coursecomp2(props) {

   const [isLiked, setIsLiked] = useState(props.isLikedByUser);
   const LikeHandler = (event) => {
      setIsLiked((isLiked) => !isLiked);
   };

  return (
    <React.Fragment>
      <div
        className={
          "py-4 bg-[#F2F2F2] m-2 lg:m-3 " +
          (props.shadow === true ? "shadow-lg hover:shadow-xl" : "")
        }
      >
        <div
          className="w-full mx-auto"
          
        >
          <img
            className={
              "h-40 w-full duration-500 " +
              (props.shadow === true ? "hover:scale-110" : "")
            }
            src={props.src}
            alt={props.title}
          />
        </div>
        <div
          className="border-b border-[#41ABC5] w-full"
         
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
            to={{ pathname: `/courses/${props.id}`, data: "" }}
            className="text-sm px-1 underline decoration-solid text-blue-600 cursor-pointer"
          >
            بیشتر
          </Link>
        </div>
      </div>

      
      
    </React.Fragment>
  );
}
