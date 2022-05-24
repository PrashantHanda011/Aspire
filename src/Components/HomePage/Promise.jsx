import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Help.css"
import PromiseImage from "../../Assets/Images/PromiseImg.png"


function Promise() {
  return (
    <div style={{marginTop: 100}}>
    <div className='helpSection'>
        <Row>
            <Col xs={8}>
            <div className="separatorDiv"></div>
<h4>Project Portfolio</h4>
<Row>
    <Col>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae 
    sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. 
    Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae 
    sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet.
    </Col>

</Row>

            </Col>
            <Col>

        <img src={PromiseImage} style={{width: "100%"}} />
            </Col>
        </Row>

    

</div>

</div>
  )
}

export default Promise