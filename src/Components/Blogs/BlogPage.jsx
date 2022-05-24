import React from 'react'
import BottomFoot from '../Common/BottomFoot'
import TopNav from "../Common/TopNav"
import "../../Assets/Blogs/BlogPage.css"
import { Row } from 'react-bootstrap'
import BlogCard from './BlogCard'

function BlogPage() {
  return (
    <>
        <TopNav/>
            <h2 className='blogHeading'>Our Blog</h2>
            <h5 className='blogSubHeading'>A Blog About love that crosses International </h5>
            <div className='blogsDiv'>
                <Row>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </Row>

            </div>
        <BottomFoot/>
    </>
  )
}

export default BlogPage