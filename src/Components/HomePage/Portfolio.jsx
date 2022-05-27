import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Help.css"
import PortfolioImage from "../../Assets/Images/PortfolioImage.png"
import HomeChoiceImg from "../../Assets/Images/PromiseImg.png"

function Portfolio() {

    const portfolioItems = [
        {"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
    ]
    const [portfolioDetail, setPortfolioDetail] = useState(portfolioItems[0])
  return (
      <div>
              <div className='helpSection'>
              <div className="separatorDiv"></div>
        <h4>Project Portfolio</h4>
        <div className='helpPara'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        </div>
        
            <Container>
            <Row>
                <Col xs={2}>
                    <h6>Location</h6>
                </Col>
                <Col xs={4}>
                <h6>Properties</h6>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    {portfolioItems.map((data, index) => (
                        
                        <Row key={index} onMouseOver={() => setPortfolioDetail(data)} className="portfolioItem">
                            <Col xs={4}>
                                <p>{data.location}</p>
                            </Col>
                            <Col xs={8}>
                                <p>{data.properties}</p>
                            </Col>
                        </Row>

                    ))}
                    
                    
                </Col>
                <Col>
                <img src={portfolioDetail.img} alt="" style={{width: "100%"}} />
                </Col>
            </Row>
            </Container>
        
    </div>

      </div>
  )
}

export default Portfolio