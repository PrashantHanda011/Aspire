import React,{useState,useEffect} from 'react'
import BottomFoot from '../Common/BottomFoot'
import TopNav from "../Common/TopNav"
import "../../Assets/Blogs/BlogPage.css"
import { Row,Col,Container } from 'react-bootstrap'
import BlogCard from './BlogCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img2 from '../../Assets/Images/b1.svg'
import NewNav from '../Common/NewNav'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import moment from "moment"
import { FetchCategoryBlog } from '../API/Api'

function BlogPage() {
const [blogData, setblogData] = useState([])
const [category, setcategory] = useState([])
  const fetchblogData = async()=>{
      try {
        const data = await axios.get('https://aspire0.herokuapp.com/blog/getAllBlog');
        setblogData(data?.data?.data)
      } catch (error) {
        console.log(error)
      }
    } 
  const fetchTechblogData = async()=>{
      try {
        let categorydata={
          category:"Technology"
        }
        const data = await FetchCategoryBlog(categorydata);
        setcategory(data?.data?.data)
      } catch (error) {
        console.log(error)
      }
    } 
    console.log(category)
    
useEffect(() => {
    fetchblogData()
    fetchTechblogData()
  }, [])

console.log()
  return (
    <>

          <Container className="Blog-Maincontainer" >
              <Row>
                <Col xs={12} lg={8}>
                    <h2 className="Blog-heading">ALL BLOGS</h2>
                    <h2 className="Blog-SubHeading">We Believe In Sharing Knowledge</h2>
                    <img src={blogData[0]?.picture} className="Blog-Image" alt="no img" />
                </Col>
                <div className="blogTrend-overlay p-3 col-8 col-lg-4 ">
                      <h5 className='mb-1'># Trending</h5>
                      <h3>{blogData[0]?.title}</h3>
                      <div className='d-flex align-items-center justify-content-between py-1 '>
                        <div className=" blogTrend-overlay-footer  d-flex align-items-center">
                          <img src={blogData[0]?.picture} alt="" />
                          <h6>{blogData[0]?.authorName} |  Marketing manager </h6>
                        </div>
                        <Link to={`/blogs/${blogData[0]?._id}`} className="blogTrend-overlay-footer-link" >Read <ArrowRightAltIcon/></Link>
                    </div>
                </div>
              </Row>
          </Container>

            <div className='blogsDiv'>

               <h3 className="blogMainHeading">Technology</h3>         
                <Row  className="d-flex justify-content-center">
                    <Col xs={11} className="d-flex  BlogsRow   align-items-center">
              {
                category.map((item,index)=>{
                  return  <BlogCard
                      key={index}
                      id={item?._id}
                      content={item?.content}
                      picture={item?.picture}
                      createdAt={item?.createdAt}
                      timeToRead={item?.timeToRead}
                      title={item?.title}
                   />
                })
              }
                      
                    </Col>
                      {/* <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col> */}
                </Row>


               <h3 className="blogMainHeading">News & Updates</h3>         
                <Row  className="d-flex justify-content-center">
                    <Col xs={11} className="d-flex  BlogsRow   align-items-center">
                        {
                    blogData.map((item,index)=>{
                      return  <BlogCard
                          key={index}
                          id={item?._id}
                          content={item?.content}
                          picture={item?.picture}
                          createdAt={item?.createdAt}
                          timeToRead={item?.timeToRead}
                          title={item?.title}
                        />
                    })
                  }
                    </Col>
                      {/* <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col> */}
                </Row>

               <h3 className="blogMainHeading">Locality Bytes</h3>         
                <Row  className="d-flex justify-content-center">
                    <Col xs={11} className="d-flex  BlogsRow   align-items-center">
                          {
                      blogData.map((item,index)=>{
                        return  <BlogCard
                            key={index}
                            id={item?._id}
                            content={item?.content}
                            picture={item?.picture}
                            createdAt={item?.createdAt}
                            timeToRead={item?.timeToRead}
                            title={item?.title}
                        />
                      })
                    }
               </Col>
                      {/* <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col> */}
                </Row>


            </div>
    </>
  )
}

export default BlogPage