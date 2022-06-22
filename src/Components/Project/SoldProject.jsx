import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SoldImageProject from "../../Assets/Images/SoldProjectImage.png"

function SoldProject() {
  return (
    <div style={{width: "90%", margin: "auto", marginTop: 50}}>
        <Row>
            <Col xs={5}>
            <h3 style={{fontSize: 38, color: "#1F1F1F"}}>View Sold Projects</h3>

            </Col>
            <Col>
            <p style={{color: "#1f1f1f", fontSize: 14}}>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </Col>
        </Row>
        
        <Row style={{marginTop: 50}}>
            <Col xs={3} className="indCardDiv" style={{border: "none"}}>

              <img src={SoldImageProject} style={{width: "100%"}} />
                
            </Col>
            <Col xs={1}>
            </Col>
            <Col xs={3} className="indCardDiv" style={{border: "none"}}>

<img src={SoldImageProject} style={{width: "100%"}} />
  
</Col>
            <Col xs={1}>
            </Col>
            <Col xs={3} className="indCardDiv" style={{border: "none"}}>

<img src={SoldImageProject} style={{width: "100%"}} />
  
</Col>
        </Row>
    </div>

  )
}

export default SoldProject





