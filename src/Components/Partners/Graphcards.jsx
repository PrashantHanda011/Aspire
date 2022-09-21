import { ReadMore } from "@mui/icons-material";
import React, { useState } from "react";
import "../../Assets/Partner/partner.css";

function Graphcards(prop) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="col-lg-4 col-12 my-4 my-lg-0 me-lg-4  partner-doitall-card">
        <div className="row partner-doitall-card-1 d-flex flex-column justify-content-center px-3">
          {" "}
          <h5>{prop?.name}</h5> <p>{prop?.interest}</p>{" "}
        </div>
        <div className="row mt-lg-4 px-lg-3">
          <p style={{ wordBreak: "break-word" }}>
            {!readMore ? prop?.description.slice(0, 100) : prop?.description}
            <span> </span>
            <span
              style={{ color: "#F47E20" }}
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "Read Less" : "Read More"}
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Graphcards;
