import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Perfect.css"
import HomeChoiceImg from "../../Assets/Images/HomeChoiceImg.svg"
import { Link } from 'react-router-dom'

function HomeChoice() {
  return (
    <div className='perfectSection homechoiceSection'>
      <div className = "homeChoiceImageDiv">
        <img src={HomeChoiceImg} alt=""  />
      </div>
        <div className='perfectWriteDiv'>
        <h2 className='homeChoiceHead'>Your Home - Your Choice</h2>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        <br />
        <Container>
        <Row className="d-flex justify-content-center">
                  <Col lg={6} className=" d-flex justify-content-evenly banner-btn">
                        <Row className=" mx-md-0" style={{ display: "flex"}}>
                        <Link to="/projects">
                        <button className='Link-special-banner'>View Projects</button>
                        </Link>
                        </Row>
                        <Row style={{ display: "flex", }}>
                        <Link to="/homeloan"> 
                        <button className='Link-special-banner-second'>Easy Home Loan</button>
                        </Link>
                        </Row>
                  </Col>
            </Row>
        </Container>
        

        </div>

    </div>
  )
}

export default HomeChoice