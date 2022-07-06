import React,{useState} from 'react'
import BottomFoot from '../Common/BottomFoot'
import NewNav from '../Common/NewNav'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Assets/Project/property.css'
import p1 from '../../Assets/Images/p1.svg'
import {Link,useLocation} from 'react-router-dom' 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';
import PushPinIcon from '@mui/icons-material/PushPin';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckIcon from '@mui/icons-material/Check';
import Singleunit from './Singleunit'
import CustomizedAccordions from './FAQaccordian'
import MapContainer from '../Contact/Map'
import Map2 from '../Contact/Map2'

function Property() {
    const [unit, setunit] = useState(0);

    const handle2BHKunit=()=>{
        if(unit==0){
            setunit(1);
        }
    }
    const handle3BHKunit=()=>{
        if(unit==1){
            setunit(0);
        }
    }

    const location =useLocation();
    console.log(location)
  return (
    <>
        <Container fluid className="property-Single">
                    <Container>
                    {/* begin part  */}

                                <Row className="property-begin">
                    {/* side image */}
                    
                                    <Col xs={8} className="property-first-img">
                                            <img src={p1} alt="" />
                                    </Col>
                    
                    {/* side form */}

                                    <Col xs={4} className="property-sideform p-4">
                                    <Row  className=' property-sideform-head-container'>
                                                <Col lg={2} md={3} sm={2}>
                                                <div className="property-sideform-avatar">
                                                    
                                                </div>
                                                </Col>
                                                <Col lg={10} md={9} sm={10}>
                                                    <span className="property-sideform-head ">
                                                        <h4>Aspire Logo</h4>
                                                        <h5>Get the best Quote!</h5>
                                                    </span>
                                                </Col>
                                            </Row>

                                            <Row xs={12} className="property-sideform-input"> 
                                                <span ><input type="text" placeholder="Name" /></span>
                                                <span><input type="text"  placeholder="Phone"/></span>
                                                <span><input type="text" placeholder="Email"/></span>
                                            </Row>

                                            <Row className="property-sideform-btn">
                                                <button>Get Best Quote</button>
                                            </Row>                                           
                                    </Col>
                                </Row>
                    </Container>

{/* navigate */}
                    <Container >
                        <Row  >
                        <Col lg={9} className="property-navigate-container">
                                <a href={"#overview"}  className={`${(location?.hash=='#overview') ? ("navigate-active"):("") } property-navigate-links`}>Overview</a>
                                <a href={"#amenities"} className={`${(location?.hash=='#amenities') ? ("navigate-active"):("") } property-navigate-links`}>Amenities</a>
                                <a href={"#location"} className={`${(location?.hash=='#location') ? ("navigate-active"):("") } property-navigate-links`}>Location</a>
                                <a href={"#units"} className={`${(location?.hash=='#units') ? ("navigate-active"):("") } property-navigate-links`}>Units</a>
                                <a href={"#about"} className={`${(location?.hash=='#about') ? ("navigate-active"):("") } property-navigate-links`}>About Developer</a>
                                <a href={"#faq"} className={`${(location?.hash=='#faq') ? ("navigate-active"):("") } property-navigate-links`}>FAQs</a>
                        </Col> 
                    </Row>
                    </Container>

{/* feature */}

                    <Container>
                            <Row>
                                <Col lg={8} id="overview" className="property-overview">
                                          <Row className="property-overview-head">
                                            <h4>Poorvi Shreenivasa Grand</h4>
                                            <h5>Lingadheer, South Bangalore</h5>
                                          </Row>  
                                          <Row>
                                            <Row className="property-overview-btn-container">
                                                <Col><div className="property-overview-btn"><LocationOnIcon/><h5>Banglore</h5></div></Col>
                                                <Col><div className="property-overview-btn"><PaidIcon/><h5>60-80 L</h5></div></Col>
                                                <Col><div className="property-overview-btn"><PushPinIcon/><h5>Area</h5></div></Col>
                                            </Row>
                                            <Row>
                                                <Col> <div className="property-overview-btn"><MeetingRoomIcon/><h5>2-4 BHK</h5></div></Col>
                                                <Col><div className="property-overview-btn"><ApartmentIcon/><h5>21 Units left</h5></div></Col>
                                                <Col><div className="property-overview-btn"><CheckBoxIcon/><h5>Ready to move</h5></div></Col>
                                            </Row>
                                          </Row>
                                </Col>
                            </Row>

{/* description */}
                            <Row >
                                <Col className="property-overview-description" lg={9}>
                                        <h5>Description</h5>
                                        <hr />
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit fugit quibusdam ipsa at provident vel nisi autem! Officia, dolore laboriosam vel accusantium eius soluta quasi reiciendis animi excepturi neque?</h6>
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit fugit quibusdam ipsa at provident vel nisi autem! Officia, dolore laboriosam vel accusantium eius soluta quasi reiciendis animi excepturi neque?</h6>
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit fugit quibusdam ipsa at provident vel nisi autem! Officia, dolore laboriosam vel accusantium eius soluta quasi reiciendis animi excepturi neque?</h6>
                                </Col>
                            </Row>

{/* amenities */}

                            <Row id="amenities">
                                <Col className="property-amenity" lg={9}>
                                        <h5>Amenities</h5>
                                        <hr />
                                        <Row>
                                            <Col className="property-amenity-content-container">
                                                <div className="property-amenity-content">
                                                    <CheckIcon/>
                                                    <h6>Air Conditioned</h6> 
                                                </div>
                                            </Col>
                                            <Col className="property-amenity-content-container">
                                            <div className="property-amenity-content">
                                                    <CheckIcon/>
                                                    <h6>Air Conditioned</h6> 
                                                </div>
                                            </Col>
                                            <Col className="property-amenity-content-container">
                                            <div className="property-amenity-content">
                                                    <CheckIcon/>
                                                    <h6>Air Conditioned</h6> 
                                                </div>
                                            </Col>
                                            <Col className="property-amenity-content-container">
                                            <div className="property-amenity-content">
                                                    <CheckIcon/>
                                                    <h6>Air Conditioned</h6> 
                                                </div>
                                            </Col>
                                            <Col className="property-amenity-content-container">
                                            <div className="property-amenity-content">
                                                    <CheckIcon/>
                                                    <h6>Air Conditioned</h6> 
                                                </div>
                                            </Col>
                                            <Col className="property-amenity-content-container">
                                            <div className="property-amenity-content">
                                                    <CheckIcon/>
                                                    <h6>Air Conditioned</h6> 
                                                </div>
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>

{/* location */}
                            <Row id="location">
                                <Col className="property-location" lg={9}>
                                        <h5>Location</h5>
                                <Map2 height="500px"  />
                                </Col>
                            </Row>

{/* Units */}
                            <Row  id="units">
                                <Col className="property-units" lg={9}>
                                       <Row className="property-units-head">
                                        <Col lg={8}>
                                            <h5>Units</h5>
                                        </Col>
                                        <Col lg={4}>
                                              <button className={`${unit==1 ? ("property-units-head-active"):("")}`} onClick={handle2BHKunit}>2 BHK</button>  
                                              <button className={`${unit==0 ? ("property-units-head-active"):("")}`} onClick={handle3BHKunit}>3 BHK</button>  
                                        </Col>
                                       </Row>
                                        <hr />
                                        <Row className="property-units-SubHead">
                                                <h5>Floor Plan</h5>
                                                <h5>Facing</h5>
                                                <h5>Size</h5>
                                                <h5>Price</h5>
                                        </Row>
                                        <Row>
                                            <Singleunit/>
                                            <Singleunit/>
                                        </Row>
                                </Col>
                            </Row>

                    
                    </Container>
{/* About dev */}

                    <Row id="about">
                        <Col  className="property-aboutDeveloper">
                            <Row className="property-aboutDeveloper-head">
                                <h5>About Developer</h5>
                                <h6>Lodha Builders and Co.</h6></Row>
                            <Row className="property-aboutDeveloper-work">
                                <Col lg={1}>
                                    <div className="property-aboutDeveloper-img">

                                    </div>
                                </Col>
                                <Col className="property-aboutDeveloper-work-side">
                                    <h6><p></p> 20 + projects developed</h6>
                                    <h6> <p></p>East Bengaluru </h6>
                                    <h6><p></p>73,742 Possessions given</h6>
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={9} className="property-aboutDeveloper-desc">
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero donec id a. Elit tortor leo, eu tortor sociis a erat potenti. Euismod eget morbi aliquet interdum diam lobortis massa. Tellus a mauris pulvinar consectetur praesent convallis hendrerit a dolor. Ut viverra massa aliquet elit sit proin. Est mauris mattis arcu, a ullamcorper elit amet montes.
                                    Odio quis cursus enim magna. Vitae ipsum curabitur bibendum ut. Amet, duis proin lorem augue arcu pulvinar commodo blandit. Iaculis blandit commodo magna libero platea elit ut. Senectus sociis condimentum tortor ultrices ultrices.
                                    Plat</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Container>

                    {/* faq */}
                    
                        <Row id="faq">
                            <Col lg={9} clasName="property-FAQ">
                                <Row className="property-FAQ-head">
                                    <h5>FAQ</h5>  
                                </Row>
                                <Row className="propert-FAQ-accordian">
                                    <CustomizedAccordions/>                 
                                    <CustomizedAccordions/>                 
                                    <CustomizedAccordions/>                 
                                </Row>
                            </Col>
                        </Row>
                    </Container>
        </Container>
    </>
  )
}

export default Property
