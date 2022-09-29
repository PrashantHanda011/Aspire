import React from "react";
import { Col, Row } from "react-bootstrap";
import AboutUsVideoImage from "../../Assets/Images/AboutUsVideoImage.png";

function OurStory() {
  return (
    <div>
      <h4 className="ourStoryHead">Our Story</h4>
      <Row>
        <Col lg={6} xs={12}>
          <div style={{ width: "90%", margin: "auto", fontSize: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            ullamcorper elementum vitae sit magna platea nec maecenas nibh.
            Aliquam hendrerit libero cursus elementum mi amet morbi lacus
            aliquet.
          </div>
        </Col>
        <Col lg={6} xs={12}>
          <div style={{ width: "90%", margin: "auto", fontSize: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            ullamcorper elementum vitae sit magna platea nec maecenas nibh.
            Aliquam hendrerit libero cursus elementum mi amet morbi lacus
            aliquet.
          </div>
        </Col>
      </Row>
      <div className="videoDiv">
        <img
          src={AboutUsVideoImage}
          alt=""
          style={{ width: "100%", marginBottom: "-200px", zIndex: 10 }}
        />
      </div>

      <img src={aboutUsBottomBakground} alt="" style={{ width: "100%" }} />
    </div>
  );
}

export default OurStory;
