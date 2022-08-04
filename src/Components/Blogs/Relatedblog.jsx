import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogImage from "../../Assets/Images/BlogImage.png"
import '../../Assets/Blogs/singleblog.css'
import {Link} from 'react-router-dom'

function Relatedblog() {
  return (
    <>
        <Col lg={12 }  >
    <Link to={"/blogs/12234"} className="text-decoration-none">
                <Row>
                <div className='RelatedblogCardContent'>
                  
                <Col lg={3} xs={3}>
                    <img src={BlogImage} alt="" />
                </Col>

                    <Col   className='RelatedblogWriter  w-100'>     
                      <Row>
                         <h3 className='RelatedblogCardHeading mb-0'>Organic Marketing And Modern Marketing, What’s The Relation?</h3>
                      </Row>
                      <Row>
                        <h5>2 Days ago |  6 mins read</h5>
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