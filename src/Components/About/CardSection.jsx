import React from "react";
import { Col, Row } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../Assets/About/About.css";

function CardSection() {
  return (
    <>
      <section className="Meetteam row">
        <article className="Meetteam__head col d-flex justify-content-center align-items-center flex-column">
          <h3> Our Team</h3>
          <span></span>
          <img src="" alt="" />
          <p>
            {" "}
            At Aspire Proptech, we believe that buying a home is one of the most
            important decisions you'll make in your life. We know how stressful
            it can be to find the right property, so we've done our best to make
            it easier for you.
          </p>
          <p>
            Aspire Proptech was founded in 2017 with the mission of making home
            buying simpler. We aspire to help you, the homebuyer, get a good
            home at the right price. Our team of dedicated real estate experts
            provides the right blend of experience and new age thinking. So when
            you work with us, you're getting advice and assistance from experts
            who know what they're talking about.
          </p>
          <p>
            When you choose Aspire Proptech as your real estate partner, we'll
            walk you through every step of the home buying journey—from finding
            your ideal home and finally, moving in to your dream home. You can
            rest easy knowing that we'll be there every step of the way!
          </p>
        </article>
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-lg-8"></div>
        </div>
      </section>
      <main className="d-flex Meetteam__cards  flex-column flex-lg-row mt-4">
        <div className="d-flex justify-content-between">
          <Row>
            <Col lg={4} xs={6}>
              <div className="Meetteam__cards__content ms-lg-5 mb-lg-0 mb-4  ">
                <h3 className=" info-card1">2017</h3>
                <p className="">founded in</p>
              </div>
            </Col>
            <Col lg={4} xs={6}>
              <div className="Meetteam__cards__content ms-lg-5 mb-lg-0 mb-4">
                <h3 className="info-card2">1000+</h3>
                <p>Smiles Delivered</p>
              </div>
            </Col>
            <Col lg={4} xs={6}>
              <div className="Meetteam__cards__content ms-lg-5 mb-lg-0 mb-4 ">
                <h3 className="info-card1" style={{ whiteSpace: "nowrap" }}>
                  6 Lakhs+ sqft
                </h3>
                <p style={{ whiteSpace: "nowrap" }}> Under Management</p>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}

export default CardSection;
