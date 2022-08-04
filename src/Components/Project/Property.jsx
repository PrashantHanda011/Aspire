import React,{useState,useEffect} from 'react'
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
import Map2 from '../Contact/Map2'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom";
import { FetchSinglePropertyData } from '../API/Api'

function Property() {
    const [propertyData, setpropertyData] = useState({})
    const [unit, setunit] = useState(0);
    const [showModal, setshowModal] = useState(true);
    const [showSideform, setshowSideform] = useState(false);
    const location =useLocation();

    const param =useParams();
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

  
    // modal
      const handleClose = () => {
          setshowModal(false);
    }
    
    // sideform
    const handleCloseSideform=()=>{
        setshowSideform(false);
    }
    const handleShowsideform = () => setshowSideform(true);
    console.log(param.id)
    
    // api call
    
    const fetchsingleproperty= async()=>{
       try {
        const singleid={
            id:param.id
        }
        const data=await FetchSinglePropertyData(singleid);
        console.log(data.data.data);
        setpropertyData(data?.data?.data)
        
       } catch (error) {
            console.log(error);
       }
    }
    
    
    useEffect(() => {
        fetchsingleproperty()
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", handleClose);
    
          // cleanup function
          return () => {
            window.removeEventListener("scroll", handleClose);
          };
        
        }
      }, []);
    
    
    return (
    <>
    <Container fluid className="property-Single "   style={{position:"relative"}}   >
    
            {/* responsive icon */}
            
            <button onClick={handleShowsideform} className="responsive-sideform-btn btn">
                <AddAlertIcon />
            </button>
                    
            <Modal show={showSideform} onHide={handleCloseSideform} className="property-sideform-modal" aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header  closeButton>
       
      </Modal.Header>
                <Modal.Body>
                <div className="property-side-form-sticky-resp">
                                    <Row  className=' property-sideform-head-container'>
                                                <Col lg={2} md={3} xs={2}>
                                                <div className="property-sideform-avatar">
                                                    
                                                </div>
                                                </Col>
                                                <Col lg={10} md={9} xs={10}>
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
                                            </div>
                </Modal.Body>
             
            </Modal>


        <div   className="property-sideform p-4 col-lg-4">
                                <div className="property-side-form-sticky">
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
                                            </div>
                                    </div>



                    <div className="property-block">

                    <Container className="d-flex mb-3 " >
                    {/* begin part  */}

                    {/* side image */}
                
                                    <div   className="property-first-img col-lg-8">
                                            <img src={propertyData?.pictures} alt="" />
                                    </div>
                    
                    {/* side form */}
                                    
                    </Container>


{/* modal */}
                        {
                        showModal?(
                            <div className="container-fluid  property-animation-modal d-flex flex-column justify-content-center align-items-center">
                                           
                                           <Row className="property-overview-head-modal">
                                            <h4>{propertyData?.name}</h4>
                                            <h5>{propertyData?.city}</h5>
                                           </Row>
                                            <Row  className="property-overview-btn-container-modal d-flex flex-column align-items-center">
                                                <Col className="animationContainer w-100 d-flex flex-column align-items-center">
                                                    <Row className="property-overview-btn-modal locationOn d-flex">
                                                        <Col lg={2} xs={3} >
                                                            <LocationOnIcon/>
                                                        </Col>                
                                                        <Col xs={9}>
                                                            <h5 className="text-center">{propertyData?.location}</h5>
                                                        </Col>               
                                                    </Row>    

                                                    <Row className="property-overview-btn-modal money ">
                                                        
                                                        <Col lg={2} xs={3}>
                                                            <PaidIcon/>
                                                        </Col>                
                                                        <Col lg={10} xs={9}>
                                                                <h5 className="text-center">{propertyData?.price}</h5>
                                                        </Col>               
                                                    </Row>    
                                                    <Row className="property-overview-btn-modal area">
                                                        <Col lg={2} xs={3}>
                                                            <PushPinIcon/>
                                                        </Col>                
                                                        <Col lg={10} xs={9}>
                                                                <h5 className="text-center">{propertyData?.area}</h5>
                                                        </Col>               
                                                    </Row>    
                                                    <Row className="property-overview-btn-modal bhk">
                                                        <Col lg={2} xs={3}>
                                                            <MeetingRoomIcon/>
                                                        </Col>                
                                                        <Col lg={10} xs={9}>
                                                                <h5 className="text-center">{propertyData?.BHK} BHK</h5>
                                                        </Col>               
                                                    </Row>    
                                                    <Row className="property-overview-btn-modal units">
                                                        <Col lg={2} xs={3}>
                                                            <ApartmentIcon/>
                                                        </Col>                
                                                        <Col lg={10} xs={9}>
                                                                <h5 className="text-center">{propertyData?.unitsLeft} Units Left</h5>
                                                        </Col>               
                                                    </Row>    
                                                    <Row className="property-overview-btn-modal move">
                                                        <Col lg={2} xs={3}>
                                                            <CheckBoxIcon/>
                                                        </Col>                
                                                        <Col xs={9} lg={10}>
                                                                <h5 className="text-center">{propertyData?.ready ? ("Ready to Move"):("Posession Soon")}</h5>
                                                        </Col>               
                                                    </Row>    

                                                </Col>
                                            </Row>
                            </div>
                        ):("")    
                        }
                                            
                    
{/* navigate */}
                    <Container >
                        <Row  >
                        <Col lg={9} className="property-navigate-container flex-wrap">
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
                                            <h4>{propertyData?.name}</h4>
                                            <h5>{propertyData?.city}</h5>
                                          </Row>  
                                          <Row>
                                            <Row className="property-overview-btn-container">
                                                <Col xs={6} lg={4}><div className="property-overview-btn"><LocationOnIcon/><h5>{propertyData?.location}</h5></div></Col>
                                                <Col xs={6} lg={4}><div className="property-overview-btn"><PaidIcon/><h5>{propertyData?.price}</h5></div></Col>
                                                <Col xs={6} lg={4}><div className="property-overview-btn"><PushPinIcon/><h5>{propertyData?.area}</h5></div></Col>
                                                <Col xs={6} lg={4}> <div className="property-overview-btn"><MeetingRoomIcon/><h5>{propertyData?.BHK} BHK</h5></div></Col>
                                                <Col xs={6} lg={4}><div className="property-overview-btn"><ApartmentIcon/><h5>{propertyData?.units} Units left</h5></div></Col>
                                                <Col xs={6} lg={4}><div className="property-overview-btn"><CheckBoxIcon/><h5>{propertyData?.ready ? ("Ready to move"):("Posession Soon")}</h5></div></Col>
                                            </Row>
                                          </Row>
                                </Col>
                            </Row>

{/* description */}
                            <Row >
                                <Col className="property-overview-description" lg={8}>
                                        <h5>Description</h5>
                                        <hr />
                                        <h6>{propertyData?.description}</h6>
                                </Col>
                            </Row>

{/* amenities */}

                            <Row id="amenities">
                                <Col className="property-amenity" lg={8}>
                                        <h5>Amenities</h5>
                                        <hr />

                                        <Row>

                                        {propertyData?.amenities?.map((item,index)=>{
                                                return (
                                                    <Col key={index} className="property-amenity-content-container">
                                                        <div className="property-amenity-content">
                                                            <CheckIcon/>
                                                            <h6>{item}</h6> 
                                                        </div>
                                                    </Col>




                                                )
                                        }) 
                                        
                                        }
                                            
                                        </Row>
                                </Col>
                            </Row>

{/* location */}
                            <Row id="location">
                                <Col className="property-location" lg={8}>
                                        <h5>Location</h5>
                                <Map2 height="500px"  />
                                </Col>
                            </Row>

{/* Units */}
                            <Row  id="units">
                                <Col className="property-units" lg={8}>
                                       <Row className="property-units-head">
                                        <Col lg={8}>
                                            <h5>Units</h5>
                                        </Col>
                                        <Col lg={4}>
                                            {
                                                propertyData?.BHK === "2" ?(
                                                <button className={`${unit==1 ? ("property-units-head-active"):("")}`} onClick={handle2BHKunit}>2 BHK</button>  

                                                ):(
                                              <button className={`${unit==0 ? ("property-units-head-active"):("")}`} onClick={handle3BHKunit}>3 BHK</button>  
                                                )
                                            } 
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
                                <Col lg={1} >
                                    <div className="property-aboutDeveloper-img">

                                    </div>
                                </Col>
                                <Col lg={11}  className="property-aboutDeveloper-work-side mt-4 mt-lg-0">
                                    <h6><p></p> 20 + projects developed</h6>
                                    <h6> <p></p>East Bengaluru </h6>
                                    <h6><p></p>73,742 Possessions given</h6>
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={8} className="property-aboutDeveloper-desc">
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
                            <Col lg={8} clasName="property-FAQ">
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
                    </div>
        </Container>





    </>
  )
}

export default Property
