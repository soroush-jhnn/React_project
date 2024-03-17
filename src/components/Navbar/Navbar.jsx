import React, { useState } from "react";
// react-router-dom
import { Link, useLocation } from "react-router-dom";
// pics
import logo from "../../assets/images/landingPage/logo/download.jpg";
// mui components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
// localStorage
import { clearStorage, getItem } from "../../core/services/storage/storage";

export default function Navbar() {
  const loggedIn = getItem("token");
  const [isLoggedIn] = useState(loggedIn ? true : false);

  let user = localStorage.getItem("user");
  let userAsObject = JSON.parse(user);
  const [comps] = useState(userAsObject);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const nav1 = [
    { id: 0, value: "خانه", linkto: "/" },
    { id: 1, value: "دوره ها", linkto: "/courses" },
    { id: 2, value: "اساتید", linkto: "/teachers" },
    { id: 3, value: "اخبار و مقالات", linkto: "/articles" },
    { id: 4, value: "تماس با ما", linkto: "/contactus" },
  ];

  const nav2 = [
    ...nav1,
    { id: 5, value: "ورود", linkto: "/login" },
    { id: 6, value: "ثبت نام", linkto: "/signup" },
  ];

  const nav3 = [
    ...nav1,
    { id: 6, value: "سبد خرید", linkto: "/shoplist" },
    { id: 5, value: "داشبورد", linkto: "/dashboard" },
  ];

  const nav4 = [
    { id: 0, value: "داشبورد", linkto: "/dashboard" },
    { id: 1, value: "سبد خرید", linkto: "/shoplist" },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);
  let location = useLocation();

  const LogOut = () => {
    clearStorage();
    window.location.pathname = "/login";
  };

  return (
    <React.Fragment>
      <nav className="relative flex flex-wrap justify-between lg:justify-center px-12 py-3 pb-4 shadow-lg w-full mx-auto ">
        {isLoggedIn ? (
          <Box sx={{ flexGrow: 0 }} className="hidden lg:flex w-1/4 flex-row">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                className="ml-2"
                alt={comps.fullName}
                src={comps.profile}
              />
            </IconButton>

            <Menu
              dir="rtl"
              className="hidden lg:flex"
              sx={{
                mt: "35px",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {nav4.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <Link to={setting.linkto} className="px-6 border-0">
                    {setting.value}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseUserMenu}>
                <p className=" border-0 px-6" onClick={LogOut}>
                  خروج
                </p>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <div className="hidden lg:flex flex-row gap-4 w-1/4">
            <Link
              className="relative no-underline text-[#000] px-8 pt-1 text-center
            bg-[#3DD9C9] hover:bg-opacity-70 hover:rounded transition duration-200 ease-out hover:ease-in"
              to="/signup"
            >
              ثبت نام
            </Link>
            <Link
              className="relative no-underline text-[#000] px-8 pt-1 text-center
            bg-[#3DD9C9] hover:bg-opacity-70 hover:rounded transition duration-200 ease-out hover:ease-in"
              to="/login"
            >
              ورود
            </Link>
          </div>
        )}

        <button
          className=" cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none border-[#A066F2] px-3"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {!navbarOpen ? <div>-</div> : <div>x</div>}
        </button>

        <div className="hidden sm:hidden lg:flex flex-grow items-center justify-center">
          <ul className="flex flex-col lg:flex-row-reverse gap-8 justify-center list-none">
            {location.pathname !== "/dashboard"
              ? nav1.map((number) => (
                  <li className="nav-item" key={number.id}>
                    <Link
                      className={
                        "relative no-underline px-0 py-2 leading-snug text-lg font-normal hover:text-[#A066F2] transition duration-200 ease-out hover:ease-in " +
                        (location.pathname === number.linkto
                          ? "text-[#A066F2]"
                          : "")
                      }
                      to={number.linkto}
                    >
                      {number.value}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>

        <div className="relative flex flex-row-reverse w-[70%] sm:w-[90%] lg:w-1/4">
          <div className="flex flex-row-reverse justify-center items-center">
            <img className="w-8 h-8 rounded-full" src={logo} alt="logo pic" />
            <div className="relative right-2 mt-1 font-semibold">
              آکادمی بحر
            </div>
          </div>
        </div>

        <div
          className={
            "lg:hidden flex-grow items-center w-1/3 float-right" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row-reverse gap-8 list-none mt-6 w-full ">
            {isLoggedIn
              ? nav3.map((number) => (
                  <li className="nav-item" key={number.id}>
                    <Link
                      className={
                        "relative no-underline px-0 py-1 flex justify-center text-base font-normal     hover:text-[#A066F2]  transition duration-200 ease-out hover:ease-in w-full"
                      }
                      to={number.linkto}
                    >
                      {number.value}
                    </Link>
                  </li>
                ))
              : nav2.map((number) => (
                  <li className="nav-item" key={number.id}>
                    <Link
                      className={
                        "relative no-underline px-0 py-1 justify-between text-base font-normal     hover:text-[#A066F2] float-right transition duration-200 ease-out hover:ease-in"
                      }
                      to={number.linkto}
                    >
                      {number.value}
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
