import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Help.css"
import PortfolioImage from "../../Assets/Images/PortfolioImage.png"

function Portfolio() {
  return (
      <div>
              <div className='helpSection'>
              <div className="separatorDiv"></div>
        <h4>Project Portfolio</h4>
        <div className='helpPara'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        </div>
        
            <Container>
            <Row>
                <Col xs={2}>
                    <h6>Location</h6>
                </Col>
                <Col xs={4}>
                <h6>Properties</h6>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <p>Location</p>
                    </Col>
                    <Col xs={8}>
                        <p>Properties</p>
                    </Col>
                    </Row>
                    
                </Col>
                <Col>
                <img src={PortfolioImage} alt="" style={{width: "100%"}} />
                </Col>
            </Row>
            </Container>
        
    </div>

      </div>
  )
}

export default Portfolio