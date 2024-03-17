import React from "react";
import errorPic from "../../assets/images/svg/error_boundary.png";

const Error = () => {
  const handelRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="flex items-center">
      <img className="w-48 " src={errorPic} alt="error_boundary" />

      <p className="">!!!یه مشکلی پیش اومده دوباره امتحانش کن</p>

      <button type="button" className="border border-[#000] p-4" onClick={handelRefresh}>
        تلاش مجدد
      </button>
    </div>
  );
};

export default Error;
