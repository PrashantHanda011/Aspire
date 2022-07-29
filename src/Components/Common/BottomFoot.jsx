import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from "../../Assets/Images/logo.png" 
import "../../Assets/Common/BottomFoot.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function BottomFoot() {
  return (
    <div className='footerDiv container-fluid'>
      <div className="container">

        <Row className="w-100 py-5">
            <Col lg={1} xs={3} sm={2} className="d-flex  align-items-start justify-content-start">
                <img src={logo}  className="w-100" alt="Img"  />
            </Col>
            <Col xs={9} sm={10} lg={11} className=" my-xs-3 visible-xs d-flex align-items-end justify-content-end">
              <span className='ShareIcon'> <FacebookIcon/> </span>
              <span className='ShareIcon'><TwitterIcon/> </span>
              <span className='ShareIcon'><InstagramIcon/></span>
            </Col>
        </Row>
        <Row className="mb-lg-5">
            <h4 className='dreamReality'>Make your dreams a <span style={{color: "#F47E20"}}>reality</span></h4>
        </Row>
        <Row className="d-flex" >
          
          <Col xs={12} md={12} lg={6} className="d-flex footer-blocks  align-items-start">
            <div className='CallBlock'>
                <div className="call-content">
                  <CallIcon/>
                  <h4>
                      Call
                    <h5> +6281232936733</h5>
                  </h4>
                </div>
                <button>Call Now</button>
            </div>

            <div className='MailBlock '>
            <div className="mail-content">
                  <EmailIcon/>
                  <h4>
                      Email
                    <h5> omahindev@gmail.com</h5>
                  </h4>
                </div>
                <button>Email Now</button>
            </div>
          </Col>

          <Col>
              <Row lg={12}>
                <Col xs={4} style={{color: "white"}}>
                  <h5>Column Heading</h5>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                </Col>
                <Col xs={4} style={{color: "white"}}>
                  <h5>Column Heading</h5>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                </Col>
                <Col xs={4} style={{color: "white"}}>
                  <h5>Column Heading</h5>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                </Col>
              </Row>
          </Col>

        </Row>

      </div>
    </div>
  )
}

export default BottomFoot