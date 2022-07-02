import React from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Community from '../HomePage/Community';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import  MapContainer  from './Map';
function Wearehere() {
  return (
    <>
            <Container className="mt-5 p-4 border WeAreHeree">
                <Row>
                    <Col className="ms-3">
                            
                            <Row className="WeAreHeree-head">
                              <h3 className="my-3">We Are Here</h3>
                            </Row>    
                            
                            <Row className=" WeAreHeree-Address">
                            <h4>Banglore</h4>
                            <Col xs={7}>
                                <h5>
                                    Address: No 45/11, First Floor,
                                    North Park Road, Kumara Park East,
                                    Bengaluru, Karnataka 560 001
                                </h5>
                            </Col>
                            </Row>

                            <Row className='my-5 d-flex flex-column'>
                            <span className="contactinfo">
                                <CallIcon/>
                                <h5>
                                 +91 124567899
                                </h5>
                            </span>
                            <span className="contactinfo">
                                <EmailIcon/> 
                                <h5>
                                abc@gmail.com
                                </h5>
                            </span>
                            </Row>    
                            <Row className="WeAreHeree-btn mx-1">
                                <button>
                                    Get In Touch
                                </button>
                            </Row>    
                    </Col>
                    <Col  style={{borderRadius:"30px",overflow:"hidden"}}>
                             <MapContainer height="550px"/>
                    </Col>
                </Row>
            </Container>
    </>
  )
}

export default Wearehere