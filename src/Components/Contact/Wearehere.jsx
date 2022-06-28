import React from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
function Wearehere() {
  return (
    <>
            <Container>
                <Row>
                    <Col>
                            <Row><h3>We Are Here</h3></Row>    
                            <Row>
                            <h4>Banglore</h4>
                                <h5>
                                    Address: No 45/11, First Floor,
                                    North Park Road, Kumara Park East,
                                    Bengaluru, Karnataka 560 001
                                </h5>
                            </Row>    
                            <Row>
                                <CallIcon/> +91 124567899
                                <EmailIcon/> abc@gmail.com
                            </Row>    
                            <Row>
                                <button>
                                    Get In Touch
                                </button>
                            </Row>    
                            <Row></Row>    
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
    </>
  )
}

export default Wearehere