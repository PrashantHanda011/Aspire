import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogImage from "../../Assets/Images/BlogImage.png"
import '../../Assets/Blogs/BlogPage.css'
import {Link} from 'react-router-dom'
import moment from "moment"

function HomeBlogCard(prop) {
  return (
    <>
                    <Col xs={12} lg={4} className="px-4">
    <Link to={`/blogs/${prop?.data?._id}`} className="text-decoration-none">
                <div className='blogCardContent'>
                    <img src={prop?.data?.picture} alt="blogimg" />
                    <h3 className='blogCardHeading mb-0'>{prop?.data?.title}</h3>
                    <Row className='blogWriter'>     
                        <Col className="SubContentHeading">
                        <h5>{moment(prop?.data?.createdAt).format('DD-MM-YYYY')}  | {prop?.data?.timeToRead}</h5>
                        </Col>
                    </Row>
                </div>
      </Link>      
            </Col>   
    </>
  )
}


export default HomeBlogCard