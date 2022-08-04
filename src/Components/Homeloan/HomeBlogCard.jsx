import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogImage from "../../Assets/Images/BlogImage.png"
import '../../Assets/Blogs/BlogPage.css'
import {Link} from 'react-router-dom'
import moment from "moment"

function HomeBlogCard() {
  return (
    <>
                    <Col xs={4}>
    <Link to={`/blogs/123`} className="text-decoration-none">
                <div className='blogCardContent'>
                    <img src={BlogImage} alt="" />
                    <h3 className='blogCardHeading mb-0'>{"Hello world"}</h3>
                    <Row className='blogWriter'>     
                        <Col className="SubContentHeading">
                        <h5>11/02/2001 | 6 mins</h5>
                        </Col>
                    </Row>
                </div>
      </Link>      
            </Col>   
    </>
  )
}


export default HomeBlogCard