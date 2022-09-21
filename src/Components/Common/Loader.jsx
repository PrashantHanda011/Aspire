import React from "react";
import "../../Assets/Common/loader.css";
import cap from "../../Assets/Images/logo/cap.svg";
import aspire from "../../Assets/Images/logo/aspire.svg";
import logo from "../../Assets/Images/logo1.svg";

function Loader() {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center loader">
        {/* <div>
          <img src={logo} height="50" className="mb-5 " alt="hi" />
        </div> */}
        <div>
          <img src={logo} height="90" alt="" />
        </div>
      </div>
    </>
  );
}

export default Loader;
