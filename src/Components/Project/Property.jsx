import React, { useState, useEffect } from "react";
import BottomFoot from "../Common/BottomFoot";
import NewNav from "../Common/NewNav";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/Project/property.css";
import p1 from "../../Assets/Images/p1.svg";
import { Link, useLocation } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaidIcon from "@mui/icons-material/Paid";
import PushPinIcon from "@mui/icons-material/PushPin";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import logo from '../../Assets/Images/blueLogo.png'
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckIcon from "@mui/icons-material/Check";
import Singleunit from "./Singleunit";
import CustomizedAccordions from "./FAQaccordian";
import Map2 from "../Contact/Map2";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { FetchCategoryBlog, FetchFeatureBlog, FetchSingleDeveloperData, FetchSinglePropertyData, FetchUSP } from "../API/Api";
import MapWithAMarker from "../Contact/Map";
import ScrollTrigger from "react-scroll-trigger";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Map from "../Contact/Map";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import HomeBlogCard from "../Homeloan/HomeBlogCard";
import CarouselComponent from "../Partners/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Property() {
    const [propertyData, setpropertyData] = useState({});
    const [unit, setunit] = useState(0);
    const [showModal, setshowModal] = useState(true);
    const [showSideform, setshowSideform] = useState(false);
    const [unitDetails, setunitDetails] = useState();
    const [showAmenity, setshowAmenity] = useState(false);

    const [quote, setquote] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const location = useLocation();
    const param = useParams();
    // console.log(propertyData);
    // sideform
    const handleCloseSideform = () => {
        setshowSideform(false);
    };

    const handleShowsideform = () => setshowSideform(true);

    // api call

    const fetchsingleproperty = async () => {
        try {
            const singleid = {
                id: param.id,
            };
            const data = await FetchSinglePropertyData(singleid);
            setpropertyData(data?.data?.data);
            console.log(data?.data?.data)
            setunitDetails(data?.data?.data?.unitDetails[0]?.detail);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchDeveloper = async () => {
        try {
            const singleid = {
                id: param.id,
            };
            const data = await FetchSingleDeveloperData(singleid);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchsingleproperty();
        fetchDeveloper();
        fetchknowledgeblogData()
        handleToggle(true);
        getUspData()
    }, [param.id]);

    // best quote

    const handleQuoteChange = (e) => {
        let name = e.target.name;
        setquote({ ...quote, [name]: e.target.value });
    };

    //Modal property
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const handleAmenities = () => {
        if (!showAmenity) {
            setshowAmenity(true);
        } else {
            setshowAmenity(false);
        }
    };

    //blogs
    const [featuredBlog, setfeaturedBlog] = useState([])

    const fetchknowledgeblogData = async () => {
        try {
            const data = await FetchFeatureBlog();
            setfeaturedBlog(data?.data?.data);
            console.log(data.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [USPData, setUSPData] = useState([]);
    const getUspData = async()=>{
        try {
            const payload = {
                id:param.id
            }
            const data = await FetchUSP(payload)
            setUSPData(data?.data?.data?.usp)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Container
                fluid
                className="property-Single "
                style={{ position: "relative" }}
            >
                {/* responsive icon */}

                <button
                    onClick={handleShowsideform}
                    className="responsive-sideform-btn btn"
                >
                    Quote
                </button>

                <Modal
                    show={showSideform}
                    onHide={handleCloseSideform}
                    className="property-sideform-modal"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div className="property-side-form-sticky-resp">
                            <Row className=" property-sideform-head-container">
                                <Col lg={2} md={3} xs={2} >
                                    <img src={logo} alt="logo" />
                                </Col>
                                <Col lg={10} md={9} xs={10}>
                                    <span className="property-sideform-head ">
                                        <h5>Get the best Quote!</h5>
                                    </span>
                                </Col>
                            </Row>

                            <Row xs={12} className="property-sideform-input">
                                <span>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        onChange={handleQuoteChange}
                                        name="name"
                                    />
                                </span>
                                <span>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        onChange={handleQuoteChange}
                                        name="phone"
                                    />
                                </span>
                                <span>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleQuoteChange}
                                        name="email"
                                    />
                                </span>
                            </Row>

                            <Row className="property-sideform-btn">
                                <button>Get Best Quote</button>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>

                <div className="property-sideform p-4 col-lg-4">
                    <div className="property-side-form-sticky">
                        <Row className=" property-sideform-head-container">
                            <Col lg={4} md={3} sm={2}>
                                <div className="property-sideform-avatar">
                                    <img style={{ marginTop: "-10px" }} src={logo} alt="logo" className="w-100" />
                                </div>
                            </Col>
                            <Col lg={8} md={9} sm={10}>
                                <span className="property-sideform-head w-100">
                                    <h5>Get the best Quote!</h5>
                                </span>
                            </Col>
                        </Row>

                        <Row xs={12} className="property-sideform-input">
                            <span>
                                <input type="text" placeholder="Name" />
                            </span>
                            <span>
                                <input type="text" placeholder="Phone" />
                            </span>
                            <span>
                                <input type="text" placeholder="Email" />
                            </span>
                        </Row>

                        <Row className="property-sideform-btn">
                            <button>Get Best Quote</button>
                        </Row>
                    </div>
                </div>

                <div className="property-block">
                    <Container className="d-flex mb-3 ">
                        {/* begin part  */}

                        {/* side image */}

                        <div className="property-first-img col-lg-8">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {/* {
                                        propertyData?.pictures?.map((item, index) => {
                                            return (
                                         
                                        })
                                    } */}
                                    <Carousel>
                                        {
                                            propertyData?.pictures?.map((item, index) => {
                                                return (
                                                    <div>
                                                        <img src={`${item}`} alt="noe" />
                                                    </div>
                                                )
                                            })
                                        }

                                    </Carousel>
                                </div>
                            </div>
                        </div>

                    </Container>

                    {/* navigate */}
                    <Container>
                        <Row>
                            <Col lg={9} className="property-navigate-container flex-wrap">
                                <a
                                    href={"#overview"}
                                    className={`${location?.hash == "#overview" ? "navigate-active" : ""
                                        } property-navigate-links`}
                                >
                                    Overview
                                </a>
                                <a
                                    href={"#amenities"}
                                    className={`${location?.hash == "#amenities" ? "navigate-active" : ""
                                        } property-navigate-links`}
                                >
                                    Amenities
                                </a>
                                <a
                                    href={"#location"}
                                    className={`${location?.hash == "#location" ? "navigate-active" : ""
                                        } property-navigate-links`}
                                >
                                    Location
                                </a>
                                <a
                                    href={"#units"}
                                    className={`${location?.hash == "#units" ? "navigate-active" : ""
                                        } property-navigate-links`}
                                >
                                    Units
                                </a>
                                <a
                                    href={"#about"}
                                    className={`${location?.hash == "#about" ? "navigate-active" : ""
                                        } property-navigate-links`}
                                >
                                    About Developer
                                </a>
                                <a
                                    href={"#faq"}
                                    className={`${location?.hash == "#faq" ? "navigate-active" : ""
                                        } property-navigate-links`}
                                >
                                    FAQs
                                </a>
                            </Col>
                        </Row>
                    </Container>

                    {/* feature */}

                    <Container>
                        <Row>
                            <Col lg={8} id="overview" className="property-overview">
                                <Row className="property-overview-head">
                                    <h4>{propertyData?.name}</h4>
                                    <h5>{propertyData?.city}</h5>
                                </Row>
                                <Row>
                                    <Row className="property-overview-btn-container">
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <LocationOnIcon />
                                                <h5>{propertyData?.location}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <PaidIcon />
                                                <h5>{propertyData?.price}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <PushPinIcon />
                                                <h5>{propertyData?.area} </h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            {" "}
                                            <div className="property-overview-btn ">
                                                <MeetingRoomIcon />
                                                {propertyData?.unitDetails?.map((item, index) => (
                                                    <>
                                                        <p className="w-0" key={index}>
                                                            {" "}
                                                            {item?.bhk}
                                                            {propertyData?.unitDetails.length - 1 === index
                                                                ? null
                                                                : ","}
                                                        </p>
                                                    </>
                                                ))}
                                                BHK
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <ApartmentIcon />
                                                <h5>{propertyData?.unitsLeft} Total Units</h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <CheckBoxIcon />
                                                <h5>
                                                    {propertyData?.ready
                                                        ? "Ready to move"
                                                        : "Posession Soon"}
                                                </h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>

                        {/* description */}
                        <Row>
                            <Col className="property-overview-description" lg={8}>
                                <h5>Project Overview</h5>
                                <hr />
                                <div dangerouslySetInnerHTML={{ __html: propertyData?.description }} className="px-4 mb-4" style={{ wordWrap: "breakWord" }}>

                                </div>

                                <a
                                    href={propertyData?.broucher}
                                    target="_blank"
                                    className="broucher-btn mx-3 "
                                    download>Download Brochure</a>
                            </Col>
                        </Row>

                        {/* amenities */}

                        <Row id="amenities">
                            <Col className="property-amenity" lg={8}>
                                <h5>Amenities</h5>
                                <hr />

                                <Row>
                                    <Col className="property-amenity-content-container h-100">
                                        <div
                                            className="property-amenity-container"
                                            style={{
                                                height: `${showAmenity ? `${100}%` : `${16}vh`}`,
                                            }}
                                        >
                                            {propertyData?.amenities?.map((item, index) => {
                                                return (
                                                    <div key={index} className="property-amenity-content">
                                                        <CheckIcon />
                                                        <h6>{item}</h6>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="d-flex justify-content-end w-100 py-3">
                                            <button
                                                onClick={handleAmenities}
                                                className="float-right load-more-btn"
                                            >
                                                {showAmenity ? (
                                                    <span>
                                                        Hide <ArrowDropUpIcon />
                                                    </span>
                                                ) : (
                                                    <span>
                                                        Load More <ArrowDropDownIcon />
                                                    </span>
                                                )}{" "}
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row id="amenities">
                            <Col className="property-amenity" lg={8}>
                                <h5>Project USP</h5>
                                <hr />

                                <Row>
                                    <Col className="property-amenity-content-container h-100">
                                        <div
                                            className="property-amenity-container"
                                            style={{
                                                height: `${showAmenity ? `${100}%` : `${16}vh`}`,
                                            }}
                                        >
                                            {USPData?.map((item, index) => {
                                                return (
                                                    <div key={index} className="property-USP-content">
                                                        <img src={item.icon} alt="nono"/>
                                                        <h6>{item.detail}</h6>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* location */}
                        <Row id="location">
                            <Col className="property-location" lg={8}>
                                <h5>Location</h5>
                                {/* <Map2 height="500px"  /> */}
                                {/* <MapWithAMarker
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `500px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                long={lng &&(lat)}
                                lati={lat &&(lng)}
                                /> */}
                                <Map
                                    lat={propertyData?.lat && parseFloat(propertyData?.lat)}
                                    lng={propertyData?.lng && parseFloat(propertyData?.lng)}
                                    location={propertyData?.location}
                                    height="500px"
                                />
                            </Col>
                        </Row>

                        {/* Units */}
                        <Row id="units">
                            <Col className="property-units" lg={8}>
                                <Row className="property-units-head">
                                    <Col lg={3}>
                                        <h5>Units</h5>
                                    </Col>
                                    <Col lg={9} className="d-flex justify-content-end">
                                        {propertyData?.unitDetails?.map((item, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    className={`${unit == index ? "property-units-head-active " : ""
                                                        }`}
                                                    onClick={() => {
                                                        setunitDetails(item?.detail);
                                                        setunit(index);
                                                    }}
                                                >
                                                    {" "}
                                                    {item.bhk}
                                                </button>
                                            );
                                        })}
                                        {/* <button className={`${unit==1 ? ("property-units-head-active"):("")}`} onClick={handle2BHKunit}>{item.bhk}</button> */}
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="property-units-SubHead">
                                    <h5>Floor Plan</h5>
                                    <h5>BHK</h5>
                                    <h5>Size</h5>
                                    <h5>Price</h5>
                                </Row>
                                <Row>
                               

                                    {unitDetails?.map((item, index) => {
                                        return <Singleunit key={index} data={item} />;
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    {/* About dev */}

                    <Row id="about">
                        <Col className="property-aboutDeveloper">
                            <Row className="property-aboutDeveloper-head">
                                <h5>About Developer</h5>
                                <h6>{propertyData?.developer?.name}</h6>
                            </Row>
                            <Row className="property-aboutDeveloper-work">
                                <Col lg={1}>
                                    <div className="property-aboutDeveloper-img">
                                        <figure>
                                            <img
                                                src={propertyData?.developer?.picture}
                                                className="w-100"
                                                alt="img"
                                            />
                                        </figure>
                                    </div>
                                </Col>
                                <Col
                                    lg={11}
                                    className="property-aboutDeveloper-work-side mt-4 mt-lg-0"
                                >
                                    <h6>
                                        <p></p> {propertyData?.developer?.totalProjects} + projects
                                        developed
                                    </h6>
                                    <h6>
                                        {" "}
                                        <p></p>
                                        {propertyData?.developer?.area}
                                    </h6>
                                    <h6>
                                        <p></p>
                                        {propertyData?.developer?.possessions}
                                    </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={8} className="property-aboutDeveloper-desc">
                                    <h6 dangerouslySetInnerHTML={{ __html: propertyData?.developer?.description }}></h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Container>

                        {/* faq */}

                        <Row id="faq">
                            <Col lg={8} clasName="property-FAQ">
                                <Row className="property-FAQ-head">
                                    <h5>FAQ</h5>
                                </Row>
                                <Row className="propert-FAQ-accordian">
                                    <CustomizedAccordions
                                        question={"Q1. Why should I choose Aspire?"}
                                        answer={
                                            "Founded in 2017, has helped more than 10,000 people find their dream homes through the efforts of more than 20 of our dedicated employees and their commitment towards assisting people in their home buying process."
                                        }
                                    />
                                    <CustomizedAccordions
                                        question={
                                            "Q2. How can I book a property through Aspire Proptech.com?"
                                        }
                                        answer={`To buy a property through Aspire , you need to follow just few simple steps:<br>1. Check out our website<br>2. Select the property that meets your criteria and drop an enquiry for the same.<br>3. Go on a site visit of the selected property with our property experts.<br>4. Close the deal- We handle all legal paperwork, arrange home loans (if needed) and manage all documentation work with the builder and the bank.`
                                            .split("<br>")
                                            .join("\n")}
                                    />
                                    <CustomizedAccordions
                                        question={
                                            "Q3. Will Aspire proptech charge me a brokerage fee?"
                                        }
                                        answer={
                                            "You would receive a call back from us within 10-15 minutes of placing your enquiry with us, provided you have posted your requirements between 9 am and 6 pm. Otherwise, we would be reaching you the next day."
                                        }
                                    />
                                    <CustomizedAccordions
                                        question={"Q4. Do you offer home loan services?"}
                                        answer={
                                            "Yes. We have tie-ups with some of the leading banks in the country such as the HDFC Bank, the ICICI Bank, the Axis Bank, LIC India and PNB."
                                        }
                                    />{" "}
                                    <CustomizedAccordions
                                        question={
                                            "Q5. What are the areas of Bangalore where you have projects?"
                                        }
                                        answer={
                                            "Our projects are located in North, South, and East Bangalore."
                                        }
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>


            {/* feature project */}

            <div className="container partner-feature-projects my-lg-5">
                <div className="row">
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        {" "}
                        <h3>View Featured Projects</h3>{" "}
                    </div>
                </div>
                <div className="row h-100 my-lg-5">
                    <CarouselComponent />
                </div>
            </div>

            {/* featured blogs */}
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

            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    zIndex: "10000000000000000000000000000000",
                }}
                open={open}
                onClick={handleClose}
            >
                <div className="container-fluid  property-animation-modal d-flex flex-column justify-content-center align-items-center">
                    <button onClick={handleClose} className="Modal-Closer">
                        <CloseIcon />
                    </button>

                    <Row className="property-overview-head-modal">
                        <h4>{propertyData?.name}</h4>
                        <h5>{propertyData?.city}</h5>
                    </Row>
                    <Row className="property-overview-btn-container-modal d-flex flex-column align-items-center">
                        <Col className="animationContainer w-100 d-flex flex-column align-items-center">
                            <Row className="property-overview-btn-modal locationOn d-flex">
                                <Col lg={2} xs={3}>
                                    <LocationOnIcon />
                                </Col>
                                <Col xs={9}>
                                    <h5 className="text-center" style={{ marginRight: "2%" }}>
                                        {propertyData?.location}
                                    </h5>
                                </Col>
                            </Row>

                            <Row className="property-overview-btn-modal money ">
                                <Col lg={2} xs={3}>
                                    <PaidIcon />
                                </Col>
                                <Col lg={10} xs={9}>
                                    <h5 className="text-center">{propertyData?.price}</h5>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal area">
                                <Col lg={2} xs={3}>
                                    <PushPinIcon />
                                </Col>
                                <Col lg={10} xs={9}>
                                    <h5 className="text-center">{propertyData?.area} </h5>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal bhk">
                                <Col lg={2} xs={3}>
                                    <MeetingRoomIcon />
                                </Col>
                                <Col
                                    lg={10}
                                    xs={9}
                                    className="d-flex justify-content-center align-items-center"
                                >
                                    {propertyData?.unitDetails?.map((item, index) => (
                                        <div className="" style={{ marginLeft: "3%" }}>
                                            <h5 className="text-center mx-1">
                                                {" "}
                                                {item?.bhk}{" "}
                                                {propertyData?.unitDetails.length - 1 === index
                                                    ? null
                                                    : ","}
                                            </h5>
                                        </div>
                                    ))}{" "}
                                    <div className="d-flex align-center">BHK</div>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal units">
                                <Col lg={2} xs={3}>
                                    <ApartmentIcon />
                                </Col>
                                <Col lg={10} xs={9}>
                                    <h5 className="text-center">
                                        {propertyData?.unitsLeft} Total Units
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal move">
                                <Col lg={2} xs={3}>
                                    <CheckBoxIcon />
                                </Col>
                                <Col xs={9} lg={10}>
                                    <h5 className="text-center">
                                        {propertyData?.ready ? "Ready to Move" : "Posession Soon"}
                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Backdrop>
        </>
    );
}

export default Property;
