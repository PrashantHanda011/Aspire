import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from "../../Assets/Images/logoBrown.png"
import "../../Assets/Common/BottomFoot.css"

function BottomFoot() {
  return (
    <div className='footerDiv'>
        <Row>
            <Col xs={2}>
                <img src={logo} style={{width: "100%"}} />
            </Col>
        </Row>
        <Row>
            <h4 className='dreamReality'>Make your dreams a <span style={{color: "#F47E20"}}>reality</span></h4>
        </Row>
    </div>
  )
}

export default BottomFoot