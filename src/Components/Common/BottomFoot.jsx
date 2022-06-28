import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from "../../Assets/Images/logoBrown.png"
import "../../Assets/Common/BottomFoot.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function BottomFoot() {
  return (
    <div className='footerDiv'>
        <Row style={{width:"100%"}}>
            <Col xs={9}>
                <img src={logo} alt="Img"  />
            </Col>
            <Col xs={3} className=" d-flex align-items-end">
              <span className='ShareIcon'> <FacebookIcon/> </span>
              <span className='ShareIcon'><TwitterIcon/> </span>
              <span className='ShareIcon'><InstagramIcon/></span>
            </Col>
        </Row>
        <Row style={{width:"70%"}}>
            <h4 className='dreamReality'>Make your dreams a <span style={{color: "#F47E20"}}>reality</span></h4>
        </Row>
        <Row style={{width:"100%",paddingLeft:"3%"}} >
          <Col xs={6} className="d-flex ">
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

            <div className='MailBlock mx-5'>
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
  )
}

export default BottomFoot