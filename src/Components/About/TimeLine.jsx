import React from "react";
import "./TimeLine.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";

function TimeLine() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline">
              <div class="timeline">
                <div class="timeline-content">
                  <span class="timeline-year">1</span>
                  <div class="timeline-icon">
                    <IoMdCheckmarkCircleOutline />
                  </div>
                  <h3 class="title" style={{ color: "white" }}>
                    Verified Projects{" "}
                  </h3>
                  <p
                    class="description"
                    style={{
                      backgroundColor: "#13184F",
                      textDecoration: "none",
                    }}
                  >
                    Discover verified and handpicked projects that are the
                    most-desirable ones in town
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-content">
                  <span class="timeline-year">2</span>
                  <div class="timeline-icon">
                    <AiOutlineHome />
                  </div>
                  <h3 class="title" style={{ color: "white" }}>
                    {" "}
                    Assisted Site Visits
                  </h3>
                  <p class="description" style={{ backgroundColor: "#F47E20" }}>
                    Personalized home buying assistance from our team of experts
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-content">
                  <span class="timeline-year">3</span>
                  <div class="timeline-icon" style={{ color: "white" }}>
                    <IoIosPaper />
                  </div>
                  <h3 class="title" style={{ color: "white" }}>
                    Legal & Documentation{" "}
                  </h3>
                  <p class="description" style={{ backgroundColor: "#13184F" }}>
                    We take care of the sale agreement, sale deed, and other
                    documentation to ensure a hassle-free home buying experience
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-content">
                  <span class="timeline-year">4</span>
                  <div class="timeline-icon">
                    <BiRupee />
                  </div>
                  <h3 class="title" style={{ color: "white" }}>
                    Home Loans
                  </h3>
                  <p class="description" style={{ backgroundColor: "#F47E20" }}>
                    For your preferred home, we help you get attractive loans
                    from leading banks and financial institutions
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-content">
                  <span class="timeline-year">5</span>
                  <div class="timeline-icon">
                    <IoIosPaper />
                  </div>
                  <h3 class="title" style={{ color: "white" }}>
                    Property Registration{" "}
                  </h3>
                  <p class="description" style={{ backgroundColor: "#13184F" }}>
                    With our experts to help you, you can register your property
                    with assurance
                  </p>
                </div>
              </div>
              <div class="timeline">
                <div class="timeline-content">
                  <span class="timeline-year">6</span>
                  <div class="timeline-icon">
                    <AiOutlineHome />
                  </div>
                  <h3 class="title" style={{ color: "white" }}>
                    Moving In
                  </h3>
                  <p class="description" style={{ backgroundColor: "#F47E20" }}>
                    Our goal is to ensure that your moving in experience is
                    smooth and hassle-free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
