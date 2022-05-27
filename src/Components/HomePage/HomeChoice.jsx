import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Perfect.css"
import HomeChoiceImg from "../../Assets/Images/HomeChoiceImg.png"


function HomeChoice() {
  return (
    <div className='perfectSection homechoiceSection'>
      <div className = "homeChoiceImageDiv">
        <img src={HomeChoiceImg} alt="" />
      </div>
        <div className='perfectWriteDiv'>
        <h2 className='homeChoiceHead'>Your Home - Your Choice</h2>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        <br />
        <Container>
            <Row>
                <Col style={{textAlign: "right", display: "flex", justifyContent: "flex-end"}}>
                <div className="active">View Projects</div>
                </Col>
                <Col style={{textAlign: "left", display: "flex", justifyContent: "flex-start"}}>
                <div className="inactive">Easy Home Loan</div>
                </Col>
            </Row>
        </Container>
        

        </div>

    </div>
  )
}

export default HomeChoice