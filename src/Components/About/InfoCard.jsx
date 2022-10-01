import React from "react";
import "./InfoCard.css";
import CountUp from "react-countup";
import { BsFlagFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function InfoCard() {
  const [counterOn, setCounterOn] = useState(false);
  const content = useRef(null);

  return (
    <>
      <div ref={content} class="row d-flex justify-content-between">
        <div class="col-md-3 col-sm-6">
          <div class="counter">
            <div class="counter-icon">
              <BsFlagFill />
            </div>
            <div class="counter-content" style={{ backgroundColor: "#13184F" }}>
              <span class="counter-value">
                <CountUp start={2000} end={2017} delay={0.5} duration={0.75} />
              </span>
              <h3>Founded In</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="counter red">
            <div class="counter-icon">
              <BsFillEmojiSmileFill />
            </div>
            <div class="counter-content">
              <span class="counter-value">
                {" "}
                {
                  <>
                    <CountUp start={0} end={1000} delay={0} duration={1.75} />+
                  </>
                }
              </span>
              <h3>Smiles Delivered</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="counter">
            <div class="counter-icon">
              <RiBuildingLine />
            </div>
            <div class="counter-content">
              <span class="counter-value">
                <CountUp start={0} end={6} delay={0} duration={1.75} />
                Lakhs+ sqft
              </span>
              <h3>Under Management</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
