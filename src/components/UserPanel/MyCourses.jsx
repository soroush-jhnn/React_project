import React, { useState, useEffect } from "react";
// pagination
import usePagination from "./Pagination";
import Pagination from "@mui/material/Pagination";
// logo pic
import logo from "../../assets/images/landingPage/logo/download.jpg";
// material ui
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { red } from "@mui/material/colors";
// import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// api
import GetMyCourses from "../../core/services/api/get-my-courses.api";
import removeStudentFromCourse from "../../core/services/api/delete-student-to-course.api";
// lading gif
import loadingGif from "../../assets/images/svg/Loading.gif";

const MyCourses = () => {
  const [select, setSelect] = useState("primitive");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  let [comps, setComps] = useState([]);
  let user = localStorage.getItem("user");
  let userAsObject = JSON.parse(user);
  const [info] = useState(userAsObject);

  useEffect(() => {
    const fetchHandler = async () => {
      setLoading(true);
      try {
        setComps(await GetMyCourses(info._id));
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchHandler();
  }, [info._id]);

  const filteredComps = comps.filter((lesson) => lesson.title.includes(query));
  // const filteredComps = comps;

  select === "popular" &&
    filteredComps.sort((a, b) => (a.like < b.like ? 1 : -1));
  select === "cheap" &&
    filteredComps.sort((a, b) => (a.cost > b.cost ? 1 : -1));
  select === "expensive" &&
    filteredComps.sort((a, b) => (a.cost < b.cost ? 1 : -1));
  select === "time" &&
    filteredComps.sort((a, b) => (a.hours < b.hours ? 1 : -1));

  // const lessons = Object.keys(comps).map((key) => comps[key]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;
  const DATA = usePagination(filteredComps, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontFamily: "IRANSans",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontFamily: "IRANSans",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idPicker, setIdPicker] = useState();

  const deleteRow = async (id) => {
    const response = await removeStudentFromCourse(info._id, id);
    if (response) {
      comps = comps.filter((comps) => comps._id !== id);
      setComps(comps);
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className="flex justify-center h-[80vh]">
          <img src={loadingGif} alt="loadingGif" />
        </div>
      ) : (
        <>
          <div className="w-full mx-auto lg:float-right z-10 relative ">
            <div className="mt-8">
              <div className="flex flex-row-reverse justify-center items-center">
                <img
                  className="w-8 h-8 rounded-full relative "
                  src={logo}
                  alt="logo pic"
                />
                <div className="relative bottom-1 right-1"> دوره های من</div>
              </div>
            </div>
            <div className="grid grid-cols-2 place-content-center gap-8 sm:gap-12 md:gap-20 mt-14 mb-14">
              <div className="flex items-center justify-end ">
                <input
                  dir="rtl"
                  type="search"
                  placeholder="جستجوی دوره"
                  onChange={(e) => setQuery(e.target.value)}
                  className="border-2 border-[#050E40] opacity-80 outline-none px-2 py-1 w-2/3 md:w-auto"
                />
                <div className="border-2 border-[#050E40] opacity-80 pl-1 pr-2 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center rounded-none ">
                <select
                  dir="rtl"
                  className="border-2 border-[#050E40] opacity-80 px-2 py-1 h-9 focus:rounded-none"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option
                    className="rounded-none focus:rounded-none"
                    value="primitive"
                  >
                    بدون فیلتر
                  </option>
                  <option
                    className="rounded-none focus:rounded-none"
                    value="popular"
                  >
                    محبوب ترین ها
                  </option>
                  <option
                    className="rounded-none focus:rounded-none"
                    value="cheap"
                  >
                    ارزان ترین ها
                  </option>
                  <option
                    className="rounded-none focus:rounded-none"
                    value="expensive"
                  >
                    گران ترین ها
                  </option>
                  <option
                    className="rounded-none focus:rounded-none"
                    value="time"
                  >
                    طولانی ترین ها
                  </option>
                </select>
                <div className="border-2 border-[#050E40] opacity-80 pl-1 pr-2 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                  </svg>
                </div>
              </div>
            </div>

            {showDeleteModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div
                        dir="rtl"
                        className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                      >
                        <h3 dir="rtl" className="text-3xl font-semibold ">
                          لغو ثبت نام در دوره
                        </h3>
                        <button
                          dir="rtl"
                          className="p-1 mr-auto bg-transparent border-0 text-black opacity-70 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowDeleteModal(false)}
                        >
                          <span className=" bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 ml-20 text-slate-500 text-lg leading-relaxed">
                          آیا از حذف این درس اطمینان دارید؟
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center flex-row-reverse justify-end py-4 px-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowDeleteModal(false)}
                        >
                          خیر
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() =>
                            deleteRow(idPicker) & setShowDeleteModal(false)
                          }
                        >
                          بله
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <div className="w-11/12 lg:w-5/6 mx-auto">
              <TableContainer component={Paper} dir="rtl">
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right"></StyledTableCell>
                      <StyledTableCell align="center">نام دوره</StyledTableCell>
                      <StyledTableCell align="center">مدرس</StyledTableCell>
                      <StyledTableCell align="center">
                        تاریخ شروع
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        تاریخ پایان
                      </StyledTableCell>
                      <StyledTableCell align="center">قیمت</StyledTableCell>
                      <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {DATA.currentData().map((row) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell className="w-20" align="right">
                          <img
                            className="w-12 h-8"
                            src={row.lesson.image}
                            alt="course pic"
                          />
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.title}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.teacher.fullName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.startDate.slice(0, 10)}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.endDate.slice(0, 10)}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.cost}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <DeleteOutlineIcon
                            sx={{ color: red[600] }}
                            className="cursor-pointer"
                            onClick={() =>
                              setShowDeleteModal(true) & setIdPicker(row._id)
                            }
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Pagination
              className="mt-16 flex justify-center"
              page={page}
              count={Math.ceil(filteredComps.length / PER_PAGE)}
              onChange={handleChange}
            />
          </div>
          <ToastContainer />
        </>
      )}
    </React.Fragment>
  );
};

export default MyCourses;
