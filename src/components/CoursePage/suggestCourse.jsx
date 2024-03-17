import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Coursecomp from "./Coursecomp2";
// slider packge
import Slider from "react-slick";
// svg
import leftArrow from "../../assets/images/svg/icons8-left-arrow-48.svg";
import rightArrow from "../../assets/images/svg/icons8-right-arrow-48.svg";
// api
import GetTopCourses from "../../core/services/api/get-best-courses.api";

export default function SuggestCourse() {
  const [loading, setLoading] = useState(false);
  const [comps, setComps] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        setComps(await GetTopCourses());
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchHandler();
  }, []);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "106%",
          left: "52.5%",
          width: "35px",
        }}
        onClick={onClick}
      >
        <img src={rightArrow} alt="arrow_right" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "106%",
          left: "47.5%",
          width: "35px",
        }}
        onClick={onClick}
      >
        <img src={leftArrow} alt="arrow_left" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1384,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 605,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading ? null : <>
        <Slider className="mt-12" {...settings}>
        {comps.map((number) => (
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
            shadow={false}
          />
        ))}
      </Slider>
      <div
        className="border-4 border-[#B3E9F3] w-1/6 h-32 relative flex bottom-20 left-10  
         -z-10 float-right"
      ></div></>}
    </>
  );
}
