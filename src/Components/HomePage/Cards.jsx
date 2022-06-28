import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardBg from "../../Assets/Images/CardBg.png"
import LowEmi from "../../Assets/Images/lowEmi.png"
import Blogs from "../../Assets/Images/Blogs.png"
import '../../Assets/HomePage/Home.css'
function Cards() {
  return (
    <Container className=" EmiContainer   ">
        <Row xs={12} className=" d-flex justify-content-around">
            <Col xs={6} className=" d-flex justify-content-center">
                <Row className='emiRow  pt-5 pb-5 ps-3'>
                    
                    <Col>
                    <h4 className='emiHead'>EMI Calculator</h4>
                        <br />
                    <div className='emiBtn'>View EMI</div>
                    </Col>
                    <Col>
                        <img src={LowEmi} alt="" style={{width: "100%"}} />
                    </Col>
                    
                </Row>
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
                <Row className='emiRow   pt-5 pb-5 ps-3'>
                    <Col >
                    <h4 className='emiHead'>Blogs</h4>
                    <br />
                    <div className='emiBtn'>View articles</div>
                    </Col>
                    <Col>
                        <img src={Blogs} alt="" style={{width: "100%"}} />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Cards