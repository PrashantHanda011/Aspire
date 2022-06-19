import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Help.css"
import PromiseImage from "../../Assets/Images/PromiseImg.png"


function Promise() {
  return (
    <div style={{marginTop: 100, overflow: "hidden"}}>
    <div className=' promiseSection'>
        <Row>
            <Col xs={7}>
            <div className="separatorDiv"></div>
<h4>Aspire Promise</h4>
<Row>
    <Col>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae 
    sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. 
    Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae 
    sit magna platea nec maecenas nibh. Aliqsuam hendrerit libero cursus elementum mi amet.
    </Col>

</Row>

            </Col>
            <Col style={{marginRight: "-80px"}}>

        <img src={PromiseImage} style={{width: "100%"}} />
            </Col>
        </Row>

    

</div>

</div>
  )
}

export default Promise