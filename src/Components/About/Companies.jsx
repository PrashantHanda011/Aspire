import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Company1 from "../../Assets/Images/Company1.png"
import Company2 from "../../Assets/Images/Company2.png"
import Company3 from "../../Assets/Images/Company3.png"
import Company4 from "../../Assets/Images/Company4.png"

function Companies() {
  return (
    <div>
        <h4 className='companiesHeading'>Running successfully with 50+ Indian Companies</h4>
        <Row>
            <Col lg={3} xs={6} className="companiesCol">
                <img src={Company1} alt="" style={{width: "50%"}}/>
            </Col>
            <Col lg={3} xs={6} className="companiesCol">
                <img src={Company2} alt="" style={{width: "50%"}}/>
            </Col>
            <Col lg={3} xs={6} className="companiesCol">
                <img src={Company3} alt="" style={{width: "50%"}}/>
            </Col>
            <Col lg={3} xs={6} className="companiesCol">
                <img src={Company4} alt="" style={{width: "50%"}}/>
            </Col>
        </Row>

    </div>
  )
}

export default Companies