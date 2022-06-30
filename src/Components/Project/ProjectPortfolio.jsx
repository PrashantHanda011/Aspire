import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/Project/Project.css"
import PortfolioImage from "../../Assets/Images/PortfolioImage.png"
import HomeChoiceImg from "../../Assets/Images/PromiseImg.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HomeIcon from '@mui/icons-material/Home';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import {Link} from 'react-router-dom'
function ProjectPortfolio() {
    const [indexColor, setindexColor] = useState(0)
    const [active, setactive] = useState(0);
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
              <div className='property'>
              <Container>
              <Row >
                <Col xs={9}>
                     <h4 className='property-head ms-0'>Property</h4>
                </Col>
                <Col xs={3} className='property-sidehead'>
                    <h5>
                        Listing
                    </h5>
                    <h5>
                        Map View
                    </h5>
                </Col>
              </Row>
              </Container>
        <div className='helpPara'>
        </div>
        
            <Container className="portfolioContainer">

                <div className='propertyDescription'>
                    <div className='description'>
                            <h3>Poorvi Shheheansa Grand</h3>
                            <h5>lingadheer, south banglore</h5>
                            <div className='propertyFeatures'>
                                <span> <LocationOnIcon/> <h4>Bangaluru</h4> </span>
                                <span> <LocalAtmIcon/> <h4>2.5-5 L</h4> </span>
                                <span><HomeIcon/> <h4>Ready To move</h4></span>
                                <span> <BedroomChildIcon/> <h4>2-3 BHK</h4> </span>
                            </div>
                    </div>

                        <Link to={'/property/123'}>
                        <button >
                            View Property
                        </button>
                        </Link>
                </div>

            <Row className="mb-4 mx-3">
                <Col xs={2}>
                    <h6>Location</h6>
                </Col>
                <Col xs={4}>
                <h6>Properties</h6>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className="countryContainer">
                    {portfolioItems.map((data, index) => (
                        
                        <Row key={index} className={`${(active==index) ? ("activeportfolio"):("")} portfolioItem`} onClick={()=>{
                            setactive(index);
                            setPortfolioDetail(data)
                            }}>
                            <Col xs={4}>
                                <p className="mb-0">{data.location}</p>
                            </Col>
                            <Col xs={8}>
                                <p className="mb-0">{data.properties}</p>
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

export default ProjectPortfolio