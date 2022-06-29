import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TopNav from "../Common/TopNav"
import CareerCard from './CareerCard'
import "../../Assets/Career/Career.css"
import CareerTop from './CareerTop'
import CareerInput from './CareerInput'
import BottomFoot from '../Common/BottomFoot'
import NewNav from '../Common/NewNav'

function Career() {
  return (
    <>
    
    <NewNav/>
    <div className='careerPage'>

    <Row className="careerRow w-100 d-flex justify-content-center align-items-center">
    <Col xs={11}>
      <CareerInput/>
    </Col>

      <Col xs={11}>
      <CareerCard/>
      </Col>
      <Col xs={11}>
      <CareerCard/>
      </Col>
      
    </Row>
  
    </div>
<BottomFoot/>
    
    </>
  )
}

export default Career