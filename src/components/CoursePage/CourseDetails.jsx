import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CourseDetails = () => {
  const params = useParams();
  const courseId = params.id;

  const [details] = useState({
    course_name: "نام دوره",
    teacher: "teacher",
    startDate: "8/26/2022",
    duration: "3 weeks",
    capacity: 30,
    price: 30000,
  });
  const [loading, setLoading] = useState(false);

  const fetchHandler = async () => {
    setLoading(true);
    try {
      //fetch api
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, [courseId]);

  return (
    <>
      {loading ? null : (
        <>
          <div className=" mx-auto w-10/12 lg:w-9/12 xl:max-w-7xl mt-14 xl:mt-24 ">
            <div className="mx-auto w-1/4 text-2xl font-normal items-center mb-12 sm:mb-4">
              <center className="bg-[#B3E9F3] py-5">
                {" "}
                {details.course_name}
              </center>
            </div>
            <div className="border-4 border-[#F2F2F2] w-1/6 h-16 relative mx-auto bottom-14 sm:right-20 md:right-24 -z-10 hidden sm:flex"></div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseDetails;
