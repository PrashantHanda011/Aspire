import React,{useState,useEffect} from 'react'
import BottomFoot from '../Common/BottomFoot'
import TopNav from '../Common/TopNav'
import {Row,Col,Container} from 'react-bootstrap'
import avatar from '../../Assets/Images/author.png'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Relatedblog from './Relatedblog'
import Checkbox from '@mui/material/Checkbox';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../Assets/Blogs/singleblog.css'
import { useParams } from 'react-router-dom'
import { FetchCategoryBlog, FetchSingleBlog } from '../API/Api'
import moment from 'moment'

import {
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    LinkedinIcon,
    LinkedinShareButton
  } from "react-share";

const percentage = 25;

function Singleblog() {
    const [singleblogData, setsingleblogData] = useState({})
    const [scrollTop, setscrollTop] = useState(0)
    const [relatedBlogs, setrelatedBlogs] = useState([])
    const onscroll =  () =>{
        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    
        const scrolled = (winScroll/height)*100
        setscrollTop(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll',onscroll);

        return ()=>window.removeEventListener('scroll',onscroll)

    }, [])
    

    const param = useParams();

    const fetchBlog=async()=>{
            try {
                let blogid={
                    id:param.id
                }
                const data =await FetchSingleBlog(blogid)
                let categorydata = {
                    category: data?.data?.data?.category
                }
                const data2 = await FetchCategoryBlog(categorydata);
                setsingleblogData(data?.data?.data)
                setrelatedBlogs(data2?.data?.data);
            } catch (error) {
                console.log(error);
            }
    }

    useEffect(() => {
        fetchBlog()
    }, [])
    
    let day =moment(singleblogData?.createdAt).format('DD')
    let month =moment(singleblogData?.createdAt).format('MMM')
    let year =moment(singleblogData?.createdAt).format('YYYY')
    

// share buttons
    const path = window.location.href
    return (
    <>
            <Container fluid className="Singleblog-container" >
                <Container >
                    <Row>
                        <Col xs={12} lg={7}>
                            <h2 className="Singleblog-Head">{singleblogData?.title}</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs={12} lg={6}>
                            <div className='d-flex  align-items-center'>
                                <img src={avatar} className="me-4" alt="img" />
                                <span className='Singleblog-authorDesc'>
                                    <h4>{singleblogData?.authorName}</h4>
                                    <h5>{moment(singleblogData?.createdAt).format('DD-MM-YYYY')} |  {singleblogData?.timeToRead}  read </h5>
                                </span>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="d-flex justify-content-end mt-4 mt-lg-0 ">
                        {singleblogData?.tags?.map((item,index)=>{
                            return <span key={index} className='Singleblog-tags'><p>{item}</p></span>
                        })}
                            
                        </Col>
                    </Row>
                </Container>
            </Container>



            <Container fluid className="d-flex  overflow-visible single-blog-sticky">
                    <div className="col-lg-11 Singleblog-content p-lg-5 p-2 ">
                    {singleblogData?.content}
                    </div>

                    <Col lg={1} className="Singleblog-shareicon-container  ">
                        <Row className="singleblog-blog-date"> 
                            <h5>{day}</h5>
                            <h6>{month} {year}</h6>
                        </Row>

                        <span className="my-2">
                        <WhatsappShareButton title="Loved This Post" url={ path}>
                            <WhatsappIcon size={42} round={false} borderRadius={10} />
                        </WhatsappShareButton>
                        </span>

                        <span className="my-2">
                        <TwitterShareButton title="Loved This Post" url={ path}>
                            <TwitterIcon size={42} round={false} borderRadius={10} />
                        </TwitterShareButton> 
                        </span>

                        <span className="my-2">
                        <LinkedinShareButton title="Loved This Post" url={ path}>
                            <LinkedinIcon size={42} round={false} borderRadius={10} />
                        </LinkedinShareButton>
                        </span>


                        <span className="my-2">
                        <FacebookShareButton title="Loved This Post" url={ path}>
                            <FacebookIcon size={42} round={false} borderRadius={10} />
                        </FacebookShareButton>
                        </span>

                        {/* <Row className="singleblog-shareicon"><WhatsAppIcon/></Row>
                        <Row className="singleblog-shareicon" ><FacebookIcon/></Row>
                        <Row className="singleblog-shareicon"><TwitterIcon/></Row>
                        <Row className="singleblog-shareicon"><LinkedInIcon/></Row>
                        <Row className="singleblog-shareicon"> <InstagramIcon/></Row> */}
                </Col>  
                
            </Container>

            {/* //progressbar */}
            {/* text={`${scrollTop}%`} */}
                        <Row className="singleblog-progressBar "> <CircularProgressbar value={scrollTop} style={{width:"50%"}}  /></Row>




                    <Container>
                    <hr className="hr-divider" />
                    </Container>

                    <Container className="my-4">
                               <Row>
                                <Col className="singleblog-author" lg={6}>
                                    <h5>The Author</h5>
                                    <Row className="singleblog-author-profile">
                                        <Col lg={2} className="singleblog-author-img "></Col>
                                        <Col > <h6>{singleblogData?.authorName}</h6></Col>
                                    </Row>
                                    <Row >
                                        <Col  lg={1} ></Col>
                                        <Col className="singleblog-author-desc" lg={9}> <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet qui, esse asperiores delectus earum nam mollitia distinctio! Quisquam maxime voluptates possimus amet similique eveniet vel excepturi voluptas saepe. Adipisci?</h6></Col>
                                    </Row>
                                </Col>
                                <Col className="singleblog-related-blogs " lg={6}>
                                    <h5 className="my-lg-0 my-4">Related Articles</h5>

                                    <div clasName="d-flex">
                                    {
                                        relatedBlogs?.slice(0,3).map((item,index)=>{
                                            return <Relatedblog data={item} key={index}/>
                                        })
                                    }
                                        
                                    </div>

                                </Col>
                               </Row>     
                    </Container>

                    <Container>
                    <hr className="hr-divider" />
                    </Container>


                    <Container className="my-5">
                        <Row>
                            <Col lg={5} className="singleblog-anyComments">
                                    <Row> <h5>Any Comments?</h5></Row>                        
                                    <Row className="singleblog-anyComments-checkbox">
                                    <span>
                                    <Checkbox/>
                                    <h6>Save my name, email, and website in this browser for the next time I comment.</h6>
                                    </span>
                                    </Row>                        

                                    <Row className="singleblog-anyComments-textbox"> <textarea COL="2" row="3"></textarea> </Row>                        
                                    <Row>
                                        <Col className="singleblog-anyComments-inputs">
                                        <input type="text" placeholder='Name' />
                                        <input type="text" placeholder='Email' />
                                        </Col>
                                        <Col className="singleblog-anyComments-btn ">
                                            <button>Post Comment</button>
                                        </Col>
                                    </Row>                        
                            </Col>
                            
                            <Col className="singleblog-signmeup">
                                <Row><h3>Lorem ipsum dolor sit  adipisicing elit. Dolorum, optio.</h3></Row>
                                <Row className="singleblog-signmeup-inputs">
                                        <Col>
                                        <input placeholder='Name' type="text" /> 
                                        </Col>
                                        <Col>
                                        <button>Sign me up!</button>
                                        </Col>
                                </Row>
                                <Row><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora, ea quis praesentium incidunt illo perspiciatis. Enim aspernatur animi consequatur minima tempore ad sapiente ullam! Eos dolor veritatis deleniti blanditiis.</h6></Row>
                            </Col>
                        </Row>
                    </Container>
    </>
  )
}

export default Singleblog