import React, { useState, useEffect } from "react";
import "../../Assets/Homeloan/homeloan.css";
import homeloanbanner from "../../Assets/Images/homeLoan1.jpg";
import right from "../../Assets/Images/homeright.svg";
import left from "../../Assets/Images/homeleft.svg";
import partner from "../../Assets/Images/Company1.png";
import Slider from "@mui/material/Slider";
import Chart from "./Chart";
import Graphcards from "../Partners/Graphcards";
import Perfect from "../HomePage/Perfect";
import Community from "../HomePage/Community";
import { Row, Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import HomeBlogCard from "./HomeBlogCard";
import {
  FetchCategoryBlog,
  FetchTrendingLoans,
  PostEligilityData,
  PostTalkToExpertData,
} from "../API/Api";

function Homeloan() {
  const [show1, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [TrendingLoan, setTrendingLoan] = useState([]);
  const [featuredBlog, setfeaturedBlog] = useState([]);
  const [expertData, setexpertData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [homeLoanEligibilty, sethomeLoanEligibilty] = useState({
    name: "",
    number: "",
    reqLoan: "",
    occupation: "",
    monthlySalary: "",
    EMI: "",
    tenure: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setexpertData({ ...expertData, [name]: e.target.value });
  };

  const handleChange1 = (e) => {
    const { name } = e.target;
    sethomeLoanEligibilty({ ...homeLoanEligibilty, [name]: e.target.value });
  };

  // submit btn

  const handleTalkToExprertSubmit = async () => {
    try {
      const data = await PostTalkToExpertData(expertData);
      console.log(data);
      handleClose1();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(expertData);
  // console.log(homeLoanEligibilty)

  const handleEligibilitySubmit = async () => {
    try {
      const data = await PostEligilityData(homeLoanEligibilty);
      console.log(data);
      handleClose2();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLoan = async () => {
    try {
      const data = await FetchTrendingLoans();
      console.log(data);
      setTrendingLoan(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLoan();
    scroll();
    fetchknowledgeblogData();
  }, []);

  const scroll = () => {
    window.screenY = 0;
  };

  // modal
  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // featured blogs

  const fetchknowledgeblogData = async () => {
    try {
      let categorydata = {
        category: "news&updates",
      };
      const data = await FetchCategoryBlog(categorydata);
      setfeaturedBlog(data?.data?.data);
      console.log(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container homeloan my-5">
        <div className="row homeloan-head">
          <h3>How it works</h3>
          <h4>Simple and fast</h4>
        </div>

        <div className="row ">
          <img src={left} className="home-left-img" alt="" />
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-between mt-5 mt-lg-0 ">
            {/* card1 */}

            <div className="row">
              <div className="col-12 col-lg-12 homeloan-banner-content ">
                <h4>01</h4>
                <h3>Make a list of what you need.</h3>
                <div className="separatorDivhomeloan"></div>
                <p>
                  This includes how much you can afford to spend on your home
                  loan and what features are important to you.
                </p>
              </div>
            </div>

            {/* card2 */}

            <div className="row mt-5 mt-lg-0">
              <div className=" col-11 col-lg-12 homeloan-banner-content ">
                <h4>02</h4>
                <h3>Compare interest rates.</h3>
                <div className="separatorDivhomeloan"></div>
                <p>
                  {" "}
                  Interest rates vary based on your credit score, income,
                  employment history, and other factors. You might also compare
                  rates between different lenders or banks before making a
                  decision.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex align-self-center homeloan-center-img">
            <img src={homeloanbanner} className="w-100" alt="" />
          </div>

          <div className="col-12 col-lg-4 d-flex flex-column  justify-content-between">
            <img src={right} className="home-right-img" alt="" />
            {/* card3 */}

            <div className="row mb-5 mt-5 mt-lg-0">
              <div className="col-12 col-lg-12 homeloan-banner-content mt-lg-4 mt-0">
                <h4>03</h4>
                <h3>Select the Bank of your Choice</h3>
                <div className="separatorDivhomeloan"></div>
                <p>
                  After comparing interest rates, apply for the loan with the
                  bank that you feel comfortable with so that you can get
                  started with the process of getting approved for a loan as
                  soon as possible!{" "}
                </p>
              </div>
            </div>

            {/* card4 */}

            <div className="row mt-lg-3">
              <div className="col-11 col-lg-12 homeloan-banner-content ">
                <h4>04</h4>
                <h3>Get Approved for your home loan</h3>
                <div className="separatorDivhomeloan"></div>
                <p>
                  Your bank will review your financial information and determine
                  whether you qualify for the amount you want to borrow. Once
                  approved, get ready for closing day!.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* homeloan calculator */}

      <div className="container-fluid homeloan-calculator py-5">
        <div className="container">
          <h3>Home Loan Calculator</h3>
        </div>
        <div className="container homeloan-calculator-slider-container">
          <div className="row">
            <div className="col">
              <div className="row mb-5">
                <h5>Home Loan</h5>
              </div>

              <div className="row my-3">
                <div className="col d-flex flex-column">
                  <div className="row ">
                    <div className="d-flex justify-content-between ">
                      <h6>Loan Amount</h6> <h6>RS</h6>
                    </div>
                  </div>
                  <div className="row">
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      style={{ color: "var(--orangeColor)" }}
                      valueLabelDisplay="auto"
                    />
                  </div>
                </div>
              </div>
              <div className="row my-lg-3">
                <div className="col d-flex flex-column">
                  <div className="row ">
                    <div className="d-flex justify-content-between ">
                      <h6>Loan Tenure</h6> <h6>Year</h6>
                    </div>
                  </div>
                  <div className="row">
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      style={{ color: "var(--orangeColor)" }}
                      valueLabelDisplay="auto"
                    />
                  </div>
                </div>
              </div>
              <div className="row my-lg-3">
                <div className="col d-flex flex-column">
                  <div className="row ">
                    <div className="d-flex justify-content-between ">
                      <h6>Rate of Interest</h6> <h6>%</h6>
                    </div>
                  </div>
                  <div className="row">
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      style={{ color: "var(--orangeColor)" }}
                      valueLabelDisplay="auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col ps-0 ps-lg-5 ps-md-5">
              <Chart />
            </div>
          </div>
        </div>
      </div>

      {/* blue heading */}

      <div className="container-fluid homeloan-blueheading-container">
        <div className="container homeloan-blueheading">
          <div className="row d-flex">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Get Instant Home Loans at BEST Prices</h3>
              <button onClick={handleShow1}>Talk To Expert</button>
            </div>
          </div>
        </div>
      </div>

      {/* trending offers */}

      <div className="container-fluid homeload-trending-container py-5">
        <div className="container">
          <div className="row py-4">
            <h3>Trending loans & offers</h3>
          </div>
          <div
            className="d-flex flex-lg-row justify-content-between flex-column trendin-scroll "
            style={{ overflowX: "scroll", overflowY: "hidden" }}
          >
            {TrendingLoan.map((data, index) => {
              return (
                <Graphcards
                  key={index}
                  interest={data?.interest}
                  name={data?.name}
                  logo={data?.logo}
                  description={data?.description}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* our Partner */}
      {/* <div className="container-fluid homeloan-ourpartner-container py-5">
        <div className="container d-flex flex-column homeloan-ourpartner ">
          <h3>Our Partners</h3>
          <h5 className="pb-5">
            Get in-depth knowledge about all things related to loans and your
            finances
          </h5>

          <div className="row my-2">
            <div className="d-flex justify-content-between homeloan-brandscroll overflowY-hidden">
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
              <img src={partner} alt="" />
            </div>
          </div>
        </div>
      </div>  */}

      {/* blue heading */}

      <div className="container-fluid homeloan-blueheading-container">
        <div className="container homeloan-blueheading">
          <div className="row d-flex">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Check your eligibilty for Special EMI Options</h3>
              <button onClick={handleShow2}>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#ebebeb" }}
        className="container-fluid py-5 px-0"
      >
        <div className="container">
          <h3 className="blogMainHeading m-0 py-5">Featured Blogs</h3>
          <div className="container">
            <Row className="d-flex  homeloan-blogcard-scroll">
              <Col xs={12} className="d-flex  BlogsRow    align-items-center">
                {featuredBlog?.map((item, index) => {
                  return <HomeBlogCard key={index} data={item} />;
                })}
              </Col>
              {/* <Col xs={12} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col> */}
            </Row>
          </div>
        </div>
      </div>

      {/* perfect home */}
      <div className="container-fluid homeloan-perfecthome px-0 pt-2">
        <Perfect />
      </div>

      {/* community */}
      {/* <div
        className="container-fluid pb-lg-5 px-0"
        style={{ background: "#ebebeb" }}
      >
        <Community color="#ebebeb" />
      </div> */}

      <div className="container">
        <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Talk To Expert</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="number"
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={handleTalkToExprertSubmit}
                style={{
                  backgroundColor: "var(--orangeColor)",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Home Eligibility</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex  flex-wrap">
              {/* fullname */}
              <Form.Group className="mb-3 col-4 px-2" controlId="formBasicName">
                <TextField
                  id="outlined-password-input"
                  name="name"
                  onChange={handleChange1}
                  size="small"
                  label="Full Name"
                  type="text"
                  autoComplete="current-password"
                />
              </Form.Group>

              {/* mobile */}
              <Form.Group
                className="mb-3 col-4 px-2"
                controlId="formBasicEmail"
              >
                <TextField
                  id="outlined-password-input"
                  name="number"
                  onChange={handleChange1}
                  size="small"
                  label="Mobile No."
                  type="tel"
                  autoComplete="current-password"
                />
              </Form.Group>

              {/* req loan */}

              <Form.Group
                className="mb-3 col-4 px-2"
                controlId="formBasicPassword"
              >
                <TextField
                  id="outlined-start-adornment"
                  name="reqLoan"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={handleChange1}
                  size="small"
                  label="Required Loan"
                  type="tel"
                  autoComplete="current-password"
                />
              </Form.Group>

              {/* select */}

              <Form.Group
                className="mb-3 col-4 px-2 my-3"
                controlId="formBasicPassword"
              >
                <Form.Select
                  aria-label=" select example "
                  name="occupation"
                  onChange={handleChange1}
                  style={{
                    outline: "none",
                    width: "94%",
                    padding: "8px 10px ",
                  }}
                >
                  <option>Occupation Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              {/* monthly salary */}

              <Form.Group
                className="mb-3 col-4 px-2 my-3"
                controlId="formBasicPassword"
              >
                <TextField
                  id="outlined-start-adornment"
                  name="monthlySalary"
                  style={{ outline: "none", width: "94%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={handleChange1}
                  size="small"
                  label="Monthly Net Salary"
                  type="tel"
                  autoComplete="current-password"
                />
              </Form.Group>

              {/* monthly emi  */}

              <Form.Group
                className="mb-3 col-4 px-2 my-3"
                controlId="formBasicPassword"
              >
                <TextField
                  id="outlined-start-adornment"
                  name="EMI"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={handleChange1}
                  size="small"
                  label="Currently Monthly EMIs"
                  type="tel"
                  autoComplete="current-password"
                />
              </Form.Group>

              {/* tenure */}

              <Form.Group
                className="mb-3 col-4 px-2 my-3"
                controlId="formBasicPassword"
              >
                <TextField
                  id="outlined-start-adornment"
                  style={{ outline: "none", width: "94%" }}
                  name="tenure"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={handleChange1}
                  size="small"
                  label="Tenure(Years)"
                  type="tel"
                  autoComplete="current-password"
                />
              </Form.Group>

              {/* date */}

              <Form.Group
                className="mb-3 col-4 px-2 my-3"
                controlId="formBasicPassword"
              >
                <Form.Control
                  style={{ outline: "none", width: "94%" }}
                  type="date"
                  name="date"
                  id="inputPassword5"
                  onChange={handleChange1}
                />
              </Form.Group>
            </div>

            <Button
              variant="primary"
              className="ms-2 my-3 p-2"
              onClick={handleEligibilitySubmit}
              style={{ backgroundColor: "var(--orangeColor)", border: "none" }}
            >
              Check Eligibility
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Homeloan;
