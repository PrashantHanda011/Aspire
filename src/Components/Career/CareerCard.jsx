import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/Career/Career.css"

function CareerCard() {
  return (
    <Row className="careerCardDiv">
        <Col xs={6}>
            <h4 style={{fontWeight: 600}}>UI/UX Designer</h4>
            <p style={{marginBottom: 5}}>New Delhi</p>
            <p style={{color: "#00000066", fontSize: 12}}>6 days ago</p>
        </Col>
        <Col xs={3} className="partTime">
            <p>Part Time</p>
        </Col>
        <Col xs={3} className="viewJobs">
            <h5 style={{fontSize: 16}}>View Jobs</h5>
        </Col>
    </Row>
  )
}

export default CareerCard