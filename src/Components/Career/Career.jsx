import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TopNav from "../Common/TopNav"
import CareerCard from './CareerCard'
import "../../Assets/Career/Career.css"
import CareerTop from './CareerTop'
import CareerInput from './CareerInput'
import BottomFoot from '../Common/BottomFoot'

function Career() {
  return (
    <>
    <TopNav/>
    <CareerTop/>
    <div className='careerPage'>
      <CareerInput/>
    <h4>Recent Jobs</h4>
    <Row className="careerRow">
      <Col xs={6}>
      <CareerCard/>
      </Col>
      <Col xs={6}>
      <CareerCard/>
      </Col>
      
    </Row>
    <Row className="careerRow">
      <Col xs={6}>
      <CareerCard/>
      </Col>
      <Col xs={6}>
      <CareerCard/>
      </Col>
      
    </Row>
    <Row className="careerRow">
      <Col xs={6}>
      <CareerCard/>
      </Col>
      <Col xs={6}>
      <CareerCard/>
      </Col>
      
    </Row>
    <Row className="careerRow">
      <Col xs={6}>
      <CareerCard/>
      </Col>
      <Col xs={6}>
      <CareerCard/>
      </Col>
      
    </Row>
    </div>
<BottomFoot/>
    
    </>
  )
}

export default Career