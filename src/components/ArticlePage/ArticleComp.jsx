import React from "react";
import Star from "../../UI/SVG/Star";
import EmptyStar from "../../UI/SVG/EmptyStar";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function ArticleComp(props) {
  return (
    <div
      className={
        "py-4 bg-[#F2F2F2] m-2 lg:m-3 duration-500 " +
        (props.shadow === true ? "shadow-lg hover:shadow-xl " : "")
      }
    >
      <div className="w-full mx-auto">
        <img
          className={
            "h-48 w-full duration-500 " +
            (props.shadow === true ? "hover:scale-105" : "")
          }
          src={props.src}
          alt={props.title}
        />
      </div>
      <div className="border-b border-[#41ABC5] w-full"></div>
      <div className="grid grid-cols-2 gap-4 place-content-end mx-2">
        <div className=""></div>
        <div dir="rtl" className="mt-1 text-sm">
          {props.article_name}
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
          {props.subject === "news" ? <div>خبر</div> : <div>مقاله</div>}
        </div>
        <div className="text-sm px-2 flex flex-row">
          <Link
            to={`/news/${props.id}`}
            className="text-sm px-1 underline decoration-solid text-blue-600 cursor-pointer"
          >
            بیشتر
          </Link>
        </div>
        <div dir="rtl" className="text-sm px-2">
          {props.releaseDate}
        </div>
      </div>
    </div>
  );
}
