import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function HomeBuying() {
  return (
    <div className='perfectSection homeBuyTop'>
        <div className='perfectWriteDiv'>
            
        <h2 className='homeBuyingHead'>Home Buying Simplified</h2>
        <br />
        <Container>
            <Row>
                <Col style={{textAlign: "right", display: "flex", justifyContent: "flex-end"}}>
                <div className='active'>Post your requirements</div>
                </Col>
                <Col style={{textAlign: "left", display: "flex", justifyContent: "flex-start"}}>
                <div className='inactive'>Easy Home Loan</div>
                </Col>
            </Row>
        </Container>
        

        </div>

    </div>
  )
}

export default HomeBuying