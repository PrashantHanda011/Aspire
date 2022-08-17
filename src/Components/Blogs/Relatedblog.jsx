import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogImage from "../../Assets/Images/BlogImage.png"
import '../../Assets/Blogs/singleblog.css'
import {Link} from 'react-router-dom'
import moment from 'moment'

function Relatedblog(prop) {
  return (
    <>
        <Col lg={12 }  >
    <Link to={`/blogs/${prop?.data?._id}`} className="text-decoration-none">
                <Row>
                <div className='RelatedblogCardContent'>
                  
                <Col lg={3} xs={3}>
                <img src={prop?.data?.picture} alt="blogimg" />
                </Col>

                    <Col   className='RelatedblogWriter  w-100'>     
                      <Row>
                         <h3 className='RelatedblogCardHeading mb-0'>{prop?.data?.title}</h3>
                      </Row>
                      <Row>
                        <h5>{moment(prop?.data?.createdAt).format('DD-MM-YYYY')}  | {prop?.data?.timeToRead}</h5>
                      </Row>
                    </Col>
                </div>
              </Row>
      </Link>      
            </Col>    
    </>
  )
}

export default Relatedblog