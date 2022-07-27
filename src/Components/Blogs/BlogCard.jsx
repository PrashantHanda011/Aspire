import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogImage from "../../Assets/Images/BlogImage.png"
import '../../Assets/Blogs/BlogPage.css'
import {Link} from 'react-router-dom'
import moment from "moment"
function BlogCard(props) {
  
  return (
    <>
            <Col xs={4}>
    <Link to={`/blogs/${props.id}`} className="text-decoration-none">
                <div className='blogCardContent'>
                    <img src={props?.picture} alt="" />
                    <h3 className='blogCardHeading mb-0'>{props?.title}</h3>
                    <Row className='blogWriter'>     
                        <Col className="SubContentHeading">
                        <h5>{moment(props.createdAt).format('DD-MM-YYYY')} | {props.timeToRead}</h5>
                        </Col>
                    </Row>
                </div>
      </Link>      
            </Col>    
    </>
  )
}

export default BlogCard