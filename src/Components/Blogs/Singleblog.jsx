import React from 'react'
import BottomFoot from '../Common/BottomFoot'
import TopNav from '../Common/TopNav'
import {Row,Col,Container} from 'react-bootstrap'
import '../../Assets/Blogs/singleblog.css'
import avatar from '../../Assets/Images/author.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Relatedblog from './Relatedblog'
import Checkbox from '@mui/material/Checkbox';

function Singleblog() {
  return (
    <>
            <Container fluid className="Singleblog-container" >
                <Container >
                    <Row>
                        <Col xs={7}>
                            <h2 className="Singleblog-Head">Organic Marketing And Modern Marketing, What’s The Relation?</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs={6}>
                            <div className='d-flex  align-items-center'>
                                <img src={avatar} className="me-4" alt="img" />
                                <span className='Singleblog-authorDesc'>
                                    <h4>Writer</h4>
                                    <h5>2 hours ago |  10 min  read </h5>
                                </span>
                            </div>
                        </Col>
                        <Col ></Col>
                        <Col xs={4} className="d-flex justify-content-end">
                            <span className='Singleblog-tags'>Tags</span>
                            <span className='Singleblog-tags'>Tags</span>
                        </Col>
                    </Row>
                </Container>
            </Container>


            <Container fluid className="d-flex justify-content-center ">
                <Container fluid >
                    <div className="Singleblog-content p-5 ">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates rem facere? Soluta rerum necessitatibus molestias pariatur iure dicta, amet facilis libero iste quae? Cupiditate dolore neque, explicabo assumenda officia optio sit voluptate consequuntur laboriosam doloremque vero pariatur esse, sunt ipsum sapiente illum nam? Aperiam quisquam optio, veritatis vitae obcaecati eaque, illum sapiente, recusandae possimus repellendus suscipit tempora sequi. Debitis cumque nemo hic doloribus nobis dolor ratione laboriosam molestiae quam id pariatur porro, odit sapiente. Quae sunt sed atque quibusdam magni facilis eaque impedit, corrupti nemo voluptatum, perferendis dolores accusantium et, fuga consequuntur labore iure totam? Quibusdam in suscipit consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iusto et, eaque aliquam modi soluta fugiat voluptatem impedit nisi a amet veritatis iure voluptatum neque earum repudiandae harum sunt quis adipisci illum laudantium consequatur deserunt dolores. Doloremque voluptates corrupti, numquam expedita iusto perspiciatis? Laborum aliquid sequi porro et ex beatae numquam molestias nulla quidem ducimus consequatur ipsa alias atque rerum ipsum, repellat sunt cum unde deleniti iure tempore. Architecto sed vel vero harum, incidunt ducimus accusamus eos veniam fugiat quaerat velit quam obcaecati inventore praesentium voluptatem maiores similique magni, sit perferendis quia. Praesentium optio repudiandae atque quos, libero tempora impedit temporibus deleniti nemo similique delectus corrupti, repellendus blanditiis esse consequatur a ipsa cupiditate itaque ducimus quo magni adipisci dolores? Tenetur pariatur a error dolores ad quas modi corrupti. Architecto sit laboriosam et beatae inventore aliquam numquam magnam quod sint dicta optio, laborum fuga, nemo cumque illum quasi? Aliquam, non ipsum! adipisicing elit. Ipsum deleniti porro nihil a quasi nostrum qui illo optio consequatur odit adipisci dolores dicta debitis voluptates, aperiam saepe officiis soluta recusandae cumque amet! Autem aspernatur ex, excepturi laborum optio cupiditate expedita impedit reprehenderit deserunt, asperiores labore magni voluptatem esse rerum enim incidunt id! Quasi quo unde illum expedita soluta adipisci officia maiores consectetur facere possimus sit praesentium, ducimus autem ab. Assumenda pariatur saepe commodi quod aliquid ut, quisquam, perferendis veniam esse neque nobis velit. Voluptatibus adipisci, animi provident excepturi libero qui aperiam quam asperiores iure voluptatum est inventore odio tempore ex?
                    </div>
                </Container>

                <Col lg={1} className="Singleblog-shareicon-container  ">
                        <Row className="singleblog-blog-date"> 
                            <h5>30</h5>
                            <h6>jUL 2022</h6>
                        </Row>
                        <Row className="singleblog-shareicon"><WhatsAppIcon/></Row>
                        <Row className="singleblog-shareicon" ><FacebookIcon/></Row>
                        <Row className="singleblog-shareicon"><TwitterIcon/></Row>
                        <Row className="singleblog-shareicon"><LinkedInIcon/></Row>
                        <Row className="singleblog-shareicon"> <InstagramIcon/></Row>
                </Col>  
            </Container>
                    <Container>
                    <hr className="hr-divider" />
                    </Container>

                    <Container className="my-4">
                               <Row>
                                <Col className="singleblog-author" lg={6}>
                                    <h5>The Author</h5>
                                    <Row className="singleblog-author-profile">
                                        <Col lg={2} className="singleblog-author-img "></Col>
                                        <Col > <h6>Author</h6></Col>
                                    </Row>
                                    <Row >
                                        <Col  lg={1} ></Col>
                                        <Col className="singleblog-author-desc" lg={9}> <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet qui, esse asperiores delectus earum nam mollitia distinctio! Quisquam maxime voluptates possimus amet similique eveniet vel excepturi voluptas saepe. Adipisci?</h6></Col>
                                    </Row>
                                </Col>
                                <Col className="singleblog-related-blogs" lg={6}>
                                    <h5>Related Articles</h5>

                                    <Row>
                                        <Relatedblog/>
                                        <Relatedblog/>
                                        <Relatedblog/>
                                    </Row>

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