import React from 'react'
import BottomFoot from '../Common/BottomFoot'
import TopNav from "../Common/TopNav"
import "../../Assets/Blogs/BlogPage.css"
import { Row,Col } from 'react-bootstrap'
import BlogCard from './BlogCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function BlogPage() {
  return (
    <>
        <TopNav/>
            <div className='blogsDiv'>

               <h3 className="blogMainHeading">Knowledge Series</h3>         
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