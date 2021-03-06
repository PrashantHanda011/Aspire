import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/Contact/GetInTouch.css"
import img1 from '../../Assets/Images/getintouch.svg'
function GetInTouch() {
  return (
        <>
        <Container fluid className=" GetInTouch">
            <Row lg={12}>
                <Col lg={7} className=" GetInTouch-imgsection ">
                        <img src={img1} alt="no img" />
                </Col>
                <Col lg={5} className="d-flex flex-column justify-content-center">
                        <Row   className="my-3 GetInTouch-head"><h3>Get in touch</h3></Row>
                        <Row className=" GetInTouch-subhead"> 
                            <Col xs={11}>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, sed!</h5> 
                            </Col>
                        </Row>
                        <Row>
                            <div className=" GetInTouch-inputs"> 
                               <span><input type="text" placeholder="Name"/></span> 
                               <span><input type="text" placeholder="Phone Number" /></span> 
                            </div>
                        </Row>
                        <Row className=" GetInTouch-btn">
                            <button>Contact</button>
                        </Row>
                </Col>
            </Row>
        </Container>
        </>

    )
}

export default GetInTouch