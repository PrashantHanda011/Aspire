import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogImage from "../../Assets/Images/BlogImage.png"

function BlogCard() {
  return (
    <div>
        <Row>

            <Col xs={6} className="blogCol">
                <div className='blogCardContent'>
                    <img src={BlogImage} alt="" />
                    <h3 className='blogCardHeading'>Organic Marketing And Modern Marketing, What’s The Relation?</h3>
                    <hr />
                    <p className='blogPara'>Amid the rising coronavirus COVID-19 cases in Mumbai and other parts of Maharashtra, state Health Minister Rajesh Tope on Sunday said that Chief</p>
                    <Row className='blogWriter'>
                        <Col xs={1}>
                            <img src={BlogImage} style={{ borderRadius: "100%", height: 30}}/>
                        </Col>
                        <Col>
                        mkhuhbkjb| |  Marketing manager
                        </Col>
                    </Row>
                </div>
            </Col>
            
            <Col xs={6} className="blogCol">
                <div className='blogCardContent'>
                    <img src={BlogImage} alt="" />
                    <h3 className='blogCardHeading'>Organic Marketing And Modern Marketing, What’s The Relation?</h3>
                    <hr />
                    <p className='blogPara'>Amid the rising coronavirus COVID-19 cases in Mumbai and other parts of Maharashtra, state Health Minister Rajesh Tope on Sunday said that Chief</p>
                    <Row className='blogWriter'>
                        <Col xs={1}>
                            <img src={BlogImage} style={{ borderRadius: "100%", height: 30}}/>
                        </Col>
                        <Col>
                        mkhuhbkjb| |  Marketing manager
                        </Col>
                    </Row>
                </div>
            </Col>
            </Row>
    </div>
  )
}

export default BlogCard