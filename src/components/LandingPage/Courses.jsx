import React, { useState, useEffect } from "react";
// slider package
import Slider from "react-slick";
// arrow svg
import leftArrow from "../../assets/images/svg/icons8-left-arrow-48.svg";
import rightArrow from "../../assets/images/svg/icons8-right-arrow-48.svg";
// api
import GetPageCourses from "../../core/services/api/get-course-by-pagination.api";

import Course from "./Course";

export default function Courses() {
  const [comps, setComps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        setComps(await GetPageCourses());
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
          top: "106%",
          left: "52%",
          width: "3%",
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
          top: "106%",
          left: "48%",
          width: "3%",
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
    //  appendDots: dots => <ul>{dots}</ul>,
    //   customPaging: i => (
    //     <div className='w-[6px] h-[6px] bg-[#3DD9C9] mt-4' >
    //       <div className='slick-active slick-dots bg-black' ></div>
    //     </div>
    //   ),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading ? null : (
        <>
          <div className="mt-96 opacity-0 hidden lg:flex">.</div>

          <div className="container mx-auto w-9/12 lg:max-w-7xl lg:mt-32 mb-20">
            <div className="mx-auto mb-40 text-2xl font-semibold items-center relative top-40 w-1/2">
              <center>دوره ها</center>
            </div>

            <Slider className="relative top-16" {...settings}>
              {comps.map((number) => (
                <Course
                  key={number._id}
                  title={number.lesson.lessonName}
                  teacher_name={number.teacher.fullName.substring(
                    0,
                    number.teacher.fullName.indexOf(" ")
                  )}
                  hours={23}
                  price={number.cost}
                  star={4}
                  course_name={number.lesson.lessonName}
                  src={number.lesson.image}
                  shadow={false}
                />
              ))}
            </Slider>
            <div
              className="border-4 border-[#B3E9F3] w-1/6 h-32 relative flex bottom-8 left-10  
                -z-10 float-right"
            ></div>
            <div
              className="border-4 border-[#F2D98D] w-1/6 h-32 relative flex bottom-72 right-10  
                -z-10 float-left"
            ></div>
          </div>
        </>
      )}
    </>
  );
}
