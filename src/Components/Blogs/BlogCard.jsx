import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogImage from "../../Assets/Images/BlogImage.png"
import '../../Assets/Blogs/BlogPage.css'
function BlogCard() {
  return (
    <>
            <Col xs={4}>
                <div className='blogCardContent'>
                    <img src={BlogImage} alt="" />
                    <h3 className='blogCardHeading mb-0'>Organic Marketing And Modern Marketing, What’s The Relation?</h3>
                    <Row className='blogWriter'>     
                        <Col className="SubContentHeading">
                        <h5>2 Days ago |  6 mins read</h5>
                        </Col>
                    </Row>
                </div>
            </Col>    
    </>
  )
}

export default BlogCard