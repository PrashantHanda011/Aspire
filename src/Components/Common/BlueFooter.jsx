import React from 'react'
import "../../Assets/Common/BottomFoot.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Col, Row } from 'react-bootstrap';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function BlueFooter() {
  return (
    <div className='blueFooter'>
        <div className='blueFootDiv'>
            <h1 style={{fontSize: 100, display: "inline"}}>Let’s Talk</h1>
            <ArrowRightAltIcon sx={{fontSize: 100}}/>
        </div>
        <hr style={{width: "90%", margin: "auto"}}/>
        <div className="footerContent">
          <Row>
            <Col xs={2}> Column Heading
            </Col>
            <Col xs={2}> Column Heading
            </Col>
            <Col xs={2}> Column Heading
            </Col>
            <Col xs={2}> Column Heading
            </Col>
            <Col xs={1}>
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={4}>
                  <FacebookOutlinedIcon xs={{fontSize: 20}}/>
                </Col>
                <Col xs={4}>
                  <TwitterIcon xs={{fontSize: 20}}/>
                </Col>
                <Col xs={4}>
                  <InstagramIcon xs={{fontSize: 20}}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

    </div>
  )
}

export default BlueFooter