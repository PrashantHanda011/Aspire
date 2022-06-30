import React from 'react'
import BottomFoot from '../Common/BottomFoot'
import TopNav from '../Common/TopNav'
import {Row,Col,Container} from 'react-bootstrap'
import '../../Assets/Blogs/singleblog.css'
import avatar from '../../Assets/Images/author.png'
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
    </>
  )
}

export default Singleblog