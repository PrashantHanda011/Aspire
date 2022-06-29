import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Assets/HomePage/Home.css'
function HomeBuying() {
  return (
    <div className='perfectSection homeBuyTop'>
        <div className='perfectWriteDiv'>
            
        <h2 className='homeBuyingHead'>Home Buying Simplified</h2>
        <br />
        <Container>
            <Row>
                <Col style={{textAlign: "right", display: "flex", justifyContent: "flex-end", marginRight: "20px"}}>
                <div className='Link-special-banner'>View Projects</div>
                </Col>
                <Col style={{textAlign: "left", display: "flex", justifyContent: "flex-start", marginLeft: "20px"}}>
                <div className='Link-special-banner-second'>Easy Home Loan</div>
                </Col>
            </Row>
        </Container>
        

        </div>

    </div>
  )
}

export default HomeBuying