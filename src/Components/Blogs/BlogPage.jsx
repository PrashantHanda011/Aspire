import React from 'react'
import BottomFoot from '../Common/BottomFoot'
import TopNav from "../Common/TopNav"
import "../../Assets/Blogs/BlogPage.css"
import { Row,Col,Container } from 'react-bootstrap'
import BlogCard from './BlogCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img2 from '../../Assets/Images/b1.svg'
import NewNav from '../Common/NewNav'

function BlogPage() {
  return (
    <>
    <NewNav/>
          <Container className="Blog-Maincontainer" >
              <Row>
                <Col xs={8}>
                    <h2 className="Blog-heading">ALL BLOGS</h2>
                    <h2 className="Blog-SubHeading">We Believe In Sharing Knowledge</h2>
                    <img src={img2} className="Blog-Image" alt="no img" />
                </Col>
              </Row>
          </Container>

            <div className='blogsDiv'>

               <h3 className="blogMainHeading">Knowledge Series</h3>         
                <Row  className="d-flex justify-content-center">
                    <Col xs={10} className="d-flex  BlogsRow   align-items-center">
                      <BlogCard />
                      <BlogCard/>
                      <BlogCard/>
                    </Col>
                      <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col>
                </Row>
                <hr />


               <h3 className="blogMainHeading">News & Updates</h3>         
                <Row  className="d-flex justify-content-center">
                    <Col xs={10} className="d-flex  BlogsRow   align-items-center">
                      <BlogCard/>
                      <BlogCard/>
                      <BlogCard/>
                    </Col>
                      <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col>
                </Row>
                <hr />

               <h3 className="blogMainHeading">Locality Bytes</h3>         
                <Row  className="d-flex justify-content-center">
                    <Col xs={10} className="d-flex  BlogsRow   align-items-center">
                      <BlogCard/>
                      <BlogCard/>
                      <BlogCard/>
                    </Col>
                      <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col>
                </Row>
                <hr />


            </div>
        <BottomFoot/>
    </>
  )
}

export default BlogPage