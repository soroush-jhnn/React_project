import * as React from "react";
import { useState } from "react";
// toast
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseCompCol from "./CourseCompCol";
// pagination
import Pagin from "./pagination";
import Pagination from "@mui/material/Pagination";
// api
import AddStudentToCourses from "../../core/services/api/add-student-to-course.api";

const ShoppingList = () => {
  let shopList = localStorage.getItem("shoplist");
  let shopListAsObject = JSON.parse(shopList);
  if (shopListAsObject === null) {
    localStorage.setItem("shoplist", JSON.stringify([]));
    shopList = localStorage.getItem("shoplist");
    shopListAsObject = JSON.parse(shopList);
  }
  let [comps, setComps] = useState(shopListAsObject);

  let totalPayment = 0;
  const priceToPay = () => {
    comps.map((lesson) => {
      return (totalPayment += Number(lesson.price));
    });
  };
  priceToPay();

  let [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };
  const [PER_PAGE] = useState(4);
  const DATA = Pagin(comps, PER_PAGE);

  const [showModal, setShowModal] = useState(false);
  let user = localStorage.getItem("user");
  let userAsObject = JSON.parse(user);
  const [studentInfo] = useState(userAsObject);

  const addRow = () => {
    comps = comps.filter((comps) => comps.id === -1);
    setComps(comps);
    notify("دروس با موفقیت اخذ شدند", "success");
    localStorage.removeItem("shoplist");
    localStorage.setItem("shoplist", JSON.stringify([]));
  };

  const handleBuyCourses = async () => {
    try {
      let response = await AddStudentToCourses(studentInfo._id, comps[0].id);
      response
        ? notify("درس با موفقیت اخذ شد", "success")
        : notify("موفقیت آمیز نبود", "error");
      response && localStorage.removeItem("shoplist");
      response && setComps([]);

      response = await AddStudentToCourses(studentInfo._id, comps[1].id);
      response
        ? notify("درس با موفقیت اخذ شد", "success")
        : notify("موفقیت آمیز نبود", "error");
      response && localStorage.removeItem("shoplist");
      response && setComps([]);

      response = await AddStudentToCourses(studentInfo._id, comps[2].id);
      response
        ? notify("درس با موفقیت اخذ شد", "success")
        : notify("موفقیت آمیز نبود", "error");
      response && localStorage.removeItem("shoplist");
      response && setComps([]);
    } catch (error) {}
  };

  return (
    <>
      <div className=" mx-auto w-10/12 lg:w-9/12 xl:max-w-7xl mt-14 xl:mt-24 mb-10">
        <div className="mx-auto w-1/4 text-2xl font-normal items-center mb-12 sm:mb-4">
          <center className="bg-[#B3E9F3] py-5"> سبد خرید</center>
        </div>
        <div className="border-4 border-[#F2F2F2] w-1/6 h-16 relative mx-auto bottom-14 sm:right-20 md:right-24 -z-10 hidden sm:flex"></div>
        {showModal ? (
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
                      ثبت نام در دوره
                    </h3>
                    <button
                      dir="rtl"
                      className="p-1 mr-auto bg-transparent border-0 text-black opacity-70 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 ml-20 text-slate-500 text-lg leading-relaxed">
                      آیا از اخذ این دروس اطمینان دارید؟
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center flex-row-reverse justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      خیر
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => addRow() & setShowModal(false)}
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
        <div className="grid grid-cols-12">
          <div className="col-span-8 grid sm:gap-4 w-full mx-auto grid-col">
            {comps.length === 0 && <div>{comps.length} courses founded.</div>}
            {DATA.currentData().map((number) => (
              <CourseCompCol
                key={number.id}
                id={number.id}
                title={number.course_name}
                teacher_name={number.teacher_name}
                hours={number.hours}
                price={number.price}
                star={number.star}
                course_name={number.course_name}
                src={number.src}
                shadow={true}
                isTaken={number.isTaken}
                isLikedByUser={number.isLikedByUser}
              />
            ))}
          </div>
          <div className="col-span-4 mx-2 mt-3">
            <div className="flex flex-col items-center">
              <h3 className="font-medium text-lg">صورت حساب</h3>
              <div className="border-b border-[#000] w-5/6 opacity-60"></div>
              <div dir="rtl" className="grid grid-cols-4 w-4/6 mt-6 py-2">
                <div className="col-span-3 px-2">تعداد دوره ها</div>
                <div className="col-span-1 flex justify-center">
                  {comps.length}
                </div>
              </div>
              <div className="border-b border-[#000] w-4/6 opacity-40"></div>
              <div dir="rtl" className="grid grid-cols-4 w-4/6 mt-6 py-2">
                <div className="col-span-3 px-2">-</div>
                <div className="col-span-1 flex justify-center">-</div>
              </div>
              <div className="border-b border-[#000] w-4/6 opacity-40"></div>
              <div dir="rtl" className="grid grid-cols-4 w-4/6 mt-6 py-2">
                <div className="col-span-3 px-2">قیمت کل</div>
                <div className="col-span-1 flex justify-center">
                  {totalPayment}
                </div>
              </div>
              <div className="border-b border-[#000] w-4/6 opacity-40"></div>
              <button
                className="mt-6 flex justify-center bg-[#3DD9C9] py-1 px-12 rounded-full"
                onClick={() => handleBuyCourses()}
              >
                خرید
              </button>
            </div>
          </div>
        </div>
        <Pagination
          className="mt-16 flex justify-center"
          page={page}
          count={Math.ceil(comps.length / PER_PAGE)}
          onChange={handleChange}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default ShoppingList;
