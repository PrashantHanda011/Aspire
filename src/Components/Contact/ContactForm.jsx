import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/Contact/GetInTouch.css"
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

function ContactForm() {
  return (
    <div className='getInTouch'>
        <Row className='contactFormRow'>
            <Col xs={9} className="getInTouchForm">
                <Row>
                    <Col xs={4}>
                        <input type="text" name="custName" id="" placeholder='Name' className='inputForm'/>
                    </Col>
                    <Col xs={4}>
                        <input type="email" name="custEmail" id="" placeholder='Email' className='inputForm'/>
                    </Col>
                    <Col xs={4}>
                        <input type="text" name="custPhone" id="" placeholder='Phone Number' className='inputForm'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="text" name="custMessage" id="" placeholder='Message' className='inputForm messageInput'/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <div className='contactButton'> Contact Us</div>
                    </Col>
                </Row>
            </Col>
            <Col className="sideIcons">
                <Row className="sideIconRow">
                    <Col xs={3}>
                        <EmailIcon sx={{ fontSize: 40 }}/>
                    </Col>
                    <Col>
                       <p style={{fontSize: 14, width: "70%"}}>Lorem ipsum dolor sit amet, consectetur</p> 
                    </Col>
                </Row>
                <Row className="sideIconRow">
                    <Col xs={3}>
                        <LocationOnIcon sx={{ fontSize: 40 }}/>
                    </Col>
                    <Col>
                       <p style={{fontSize: 14, width: "70%"}}>Lorem ipsum dolor sit amet, consectetur</p> 
                    </Col>
                </Row>
                <Row className="sideIconRow">
                    <Col xs={3}>
                        <WifiCalling3Icon sx={{ fontSize: 40 }}/>
                    </Col>
                    <Col>
                       <p style={{fontSize: 14, width: "70%"}}>Lorem ipsum dolor sit amet, consectetur</p> 
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default ContactForm