import React, { useState, useEffect } from "react";
import pic from "../../assets/images/svg/anon.png";
// import back from "../../assets/images/svg/return-svgrepo-com.svg";
import UserInfo from "./UserInfo";
import EditInfo from "./EditInfo";
import MyCourses from "./MyCourses";
import AllCourses from "./AllCourses";
// material ui
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
// localStorage
import { clearStorage } from "../../core/services/storage/storage";
// import {
//   AUTH_LOGOUT_USER,
//   useAuth,
//   useLoggined,
// } from "../../context/auth/auth.context";
// import { removeItem, getItem } from "../../core/services/storage/storage";

const UserPanel = () => {
  const [choosePanel, setChoosePanel] = useState("info");
  let user = localStorage.getItem("user");
  let userAsObject = JSON.parse(user);
  const [comps] = useState(userAsObject);

  const InfoHandler = () => {
    setChoosePanel("info");
  };
  const EditHandler = () => {
    setChoosePanel("edit");
  };
  const MyCourseHandler = () => {
    setChoosePanel("mycourses");
  };
  const AllCourseHandler = () => {
    setChoosePanel("allcourses");
  };

  const [size, setSize] = useState(true);
  const sizeHandler = () => {
    windowSize.innerWidth > 1024 && setSize((size) => !size);
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  // const [state, dispatch] = useAuth();
  // const isLoggedIn = useLoggined();
  // const onLogoutUser = async (object) => {
  //   dispatch({
  //     type: AUTH_LOGOUT_USER,
  //   });
  //   console.log("xxxx");
  //   removeItem("user");
  //   removeItem("token");
  //   // state.user && notify("خروج با موفقیت انجام شد", "success");
  // };
  const LogOut = () => {
    clearStorage();
    window.location.pathname = "/login";
  };

  return (
    <>
      <div className="grid grid-cols-12 bg-[#FAFAFA]">
        <div
          className={
            "mx-4 my-2 md:mx-6 " +
            (size === true ? "col-span-9 " : "col-span-11 ") +
            (windowSize.innerWidth < 1024 ? "col-span-10" : "")
          }
        >
          {choosePanel === "info" && <UserInfo />}
          {choosePanel === "edit" && <EditInfo />}
          {choosePanel === "mycourses" && <MyCourses />}
          {choosePanel === "allcourses" && <AllCourses />}
        </div>
        <div
          className={
            " bg-[#B3E9F3] shadow-lg m-2 mt-3 mr-4 " +
            (size === true && windowSize.innerWidth > 1024
              ? "col-span-3 "
              : "") +
            (size === false && windowSize.innerHeight > 1024
              ? "col-span-1 "
              : "") +
            (windowSize.innerWidth < 1024 ? "col-span-2" : "")
          }
        >
          <div className="flex justify-between">
            <div
              className="ml-4 mt-4 bg-white inline-block cursor-pointer rounded-full p-1 invisible lg:visible"
              onClick={sizeHandler}
            >
              {size === false ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
            </div>
            <div className="mr-4 mt-4 invisible lg:visible">
              <div className="flex justify-end gap-2">
                {/* <Link><img className="w-5 h-5 cursor-pointer" src={back} alt="back-svg" /></Link> */}
                <Link to="/">
                  <HomeIcon className="cursor-pointer m-1" />
                </Link>
              </div>
            </div>
          </div>
          {comps.profile === "image.png" || comps.profile === "" ? (
            <img
              src={pic}
              alt="profile-pic"
              className={
                "w-6/12 m-auto rounded-full shadow-xl " +
                (size === true ? "mt-4" : "mt-16")
              }
            />
          ) : (
            <img
              src={comps.profile}
              alt="profile-pic"
              className={
                "w-6/12 m-auto rounded-full shadow-xl " +
                (size === true ? "mt-4" : "mt-16")
              }
            />
          )}
          <figcaption
            className={
              "flex justify-center mt-2 " +
              (size === true ? "text-lg" : "text-sm")
            }
          >
            {comps.fullName.substring(0, comps.fullName.indexOf(" "))}
          </figcaption>
          <div className="mt-12 flex flex-col items-center">
            <div className="border-b border-[#fff] w-5/6 opacity-60"></div>
            <div
              className={
                "flex justify-center rounded-full hover:bg-[#c2edf5] px-2 " +
                (choosePanel === "info"
                  ? "bg-[#d0eef3] hover:bg-[#d0eef3]"
                  : "")
              }
            >
              {size && (
                <div
                  className="hidden lg:block p-3 cursor-pointer "
                  onClick={InfoHandler}
                >
                  اطلاعات کاربر
                </div>
              )}
              <div className="py-3 cursor-pointer">
                <InfoOutlinedIcon onClick={InfoHandler} />
              </div>
              {/* <CourseIcon className="w-6 h-6" /> */}
            </div>
            <div className="border-b border-[#fff] w-5/6 opacity-60"></div>
            <div
              className={
                " flex justify-center rounded-full hover:bg-[#c2edf5] px-2 " +
                (choosePanel === "edit"
                  ? "bg-[#d0eef3] hover:bg-[#d0eef3]"
                  : "")
              }
            >
              {size && (
                <div
                  className="hidden lg:block p-3 cursor-pointer"
                  onClick={EditHandler}
                >
                  ادیت اطلاعات
                </div>
              )}
              <div className="py-3 cursor-pointer">
                <EditOutlinedIcon onClick={EditHandler} />
              </div>
              {/* <UserIcon className="w-6 h-6 ml-1"/> */}
            </div>
            <div className="border-b border-[#fff] w-5/6 opacity-60"></div>
            <div
              className={
                " flex justify-center rounded-full hover:bg-[#c2edf5] px-2 " +
                (choosePanel === "mycourses"
                  ? "bg-[#d0eef3] hover:bg-[#d0eef3]"
                  : "")
              }
            >
              {size && (
                <div
                  className="hidden lg:block p-3 cursor-pointer"
                  onClick={MyCourseHandler}
                >
                  دوره های من
                </div>
              )}
              <div className="py-3 cursor-pointer">
                <ListAltIcon onClick={MyCourseHandler} />
              </div>
              {/* <UserIcon className="w-6 h-6 ml-1"/> */}
            </div>
            <div className="border-b border-[#fff] w-5/6 opacity-60"></div>
            <div
              className={
                " flex justify-center rounded-full hover:bg-[#c2edf5] px-2 " +
                (choosePanel === "allcourses"
                  ? "bg-[#d0eef3] hover:bg-[#d0eef3]"
                  : "")
              }
            >
              {size && (
                <div
                  className="hidden lg:block p-3 cursor-pointer"
                  onClick={AllCourseHandler}
                >
                  لیست دوره ها
                </div>
              )}
              <div className="py-3 cursor-pointer">
                <FormatListBulletedOutlinedIcon onClick={AllCourseHandler} />
              </div>
              {/* <UserIcon className="w-6 h-6 ml-1"/> */}
            </div>
            <div className="border-b border-[#fff] w-5/6 opacity-60"></div>
            <div className=" flex justify-center rounded-full hover:bg-[#c2edf5] px-2 ">
              {size && (
                <p
                  onClick={LogOut}
                  // onClick={onLogoutUser}
                  className="hidden lg:block p-3 cursor-pointer"
                >
                  خروج
                </p>
              )}
              <div className="py-3 cursor-pointer">
                <ExitToAppOutlinedIcon />
              </div>
              {/* <UserIcon className="w-6 h-6 ml-1"/> */}
            </div>
            <div
              className={
                "border-b border-[#fff] w-5/6 opacity-60 " +
                (size === true ? "mb-20" : "mb-44")
              }
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
