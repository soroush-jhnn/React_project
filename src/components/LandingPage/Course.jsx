import React from "react";
import Star from "../../UI/SVG/Star";
import EmptyStar from "../../UI/SVG/EmptyStar";

import { v4 as uuid } from "uuid";

export default function Course(props) {
  return (
    <div
      className={
        "pb-4 bg-[#F2F2F2] m-2 lg:m-3 duration-500 " +
        (props.shadow === true
          ? "shadow-lg hover:shadow-xl hover:scale-110"
          : "")
      }
    >
      <div className="w-full mx-auto">
        <img className="h-40 w-full mb-4 pt-4" src={props.src} alt={props.title} />
      </div>
      <div className="border-b border-[#41ABC5] w-full"></div>
      <div className="grid grid-cols-2 gap-4 place-content-end mx-2">
        <div className=""></div>
        <div dir="rtl" className="mt-1 text-base font-light">
          {props.course_name}
        </div>
        <div className="mt-1 text-sm px-2">
          <span className="flex">
            {Array.from(Array(props.star).keys()).map(() => (
              <Star key={uuid()} className="w-6 h-6" />
            ))}
            {Array.from(Array(5 - props.star).keys()).map(() => (
              <EmptyStar key={uuid()} className="w-6 h-6" />
            ))}
          </span>
        </div>
        <div dir="rtl" className="mt-1 text-sm px-2">
          {props.teacher_name}
        </div>
        <div className="text-sm px-2 flex flex-row">
          <div>تومان</div>
          <div>{props.price}</div>
        </div>
        <div dir="rtl" className="text-sm px-2">
          {props.hours}ساعت
        </div>
      </div>
    </div>
  );
}
