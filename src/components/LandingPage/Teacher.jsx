import React from "react";
import Star from "../../UI/SVG/Star";
import EmptyStar from "../../UI/SVG/EmptyStar";

import { v4 as uuid } from "uuid";

export default function Teacher(props) {
  return (
    <div
      className={
        "pb-4 bg-[#F2F2F2] m-2 xl:m-3 duration-500 " +
        (props.shadow === true
          ? "shadow-lg  hover:shadow-xl hover:scale-110"
          : "")
      }
    >
      <div className="w-full mx-auto">
        <img className="h-48 w-full p-1" src={props.src} alt={props.title} />
      </div>
      {/* <div className='border-b border-[#41ABC5] w-full'></div> */}
      <div className="grid grid-cols-1 gap-2 mx-2">
        <div className="mt-2 text-sm px-2 flex justify-center">
          {props.teacher_name}
        </div>
        <div className="mt-3 text-sm px-2 flex justify-center">{props.job}</div>
        <div dir="rtl" className="text-sm px-2 flex justify-center mb-4">
          {props.hours}ساعت تدریس
        </div>
        <div className="text-sm px-2 flex justify-center">
          <span className="flex">
            {Array.from(Array(props.star).keys()).map(() => (
              <Star key={uuid()} className="w-6 h-6" />
            ))}
            {Array.from(Array(5 - props.star).keys()).map(() => (
              <EmptyStar key={uuid()} className="w-6 h-6" />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
