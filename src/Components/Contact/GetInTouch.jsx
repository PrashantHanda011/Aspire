import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/Contact/GetInTouch.css"

function GetInTouch() {
  return (
        <div className='getInTouch'>
            <div className='separatorDiv'></div>
            <div className='contactContent'>
                {/* <Container> */}
                    <Row>
                        <Col xs={3}>
                            <h4>CONTACT US</h4>
                            <h2 className='getInTouchSub'>Please get in Touch </h2>
                        </Col>
                        <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet.
                        </p>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>

        </div>

    )
}

export default GetInTouch