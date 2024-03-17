import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import leftArrow from "../../assets/images/svg/icons8-left-arrow-48.svg";
import rightArrow from "../../assets/images/svg/icons8-right-arrow-48.svg";
import TeacherComp from "./TeacherComp";
import GetBestTeachers from "../../core/services/api/get-best-teachers.api";

export default function BestTeacher() {
  const [comps, setComps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        setComps(await GetBestTeachers());
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
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
          <Slider className="mt-12" {...settings}>
            {comps.map((number) => (
              <TeacherComp
                key={number._id}
                teacher_name={number.fullName}
                hours={45}
                star={3}
                src={number.profile}
                shadow={false}
                job={number.role}
              />
            ))}
          </Slider>
          <div
            className="border-4 border-[#B3E9F3] w-1/6 h-32 relative flex bottom-20 left-10  
         -z-10 float-right"
          ></div>
        </>
      )}
    </>
  );
}
