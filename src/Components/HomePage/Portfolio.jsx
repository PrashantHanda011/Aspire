import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Help.css"
import "../../Assets/HomePage/portfolio.css"
import PortfolioImage from "../../Assets/Images/PortfolioImage.png"
import HomeChoiceImg from "../../Assets/Images/PromiseImg.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HomeIcon from '@mui/icons-material/Home';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import {Link} from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
function Portfolio() {
    const [indexColor, setindexColor] = useState(0)
    const [active, setactive] = useState(0);
    const portfolioItems = [
        {id:1,"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {id:2,"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {id:3,"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {id:4,"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {id:5,"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {id:6,"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {id:7,"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {id:8,"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
        {id:9,"location": "Lingadheer", "properties": "Pyramid Carnations", "img": PortfolioImage},
        {id:10,"location": "Lingadheer", "properties": "Poorvi Carnations", "img": HomeChoiceImg},
    ]
    const [portfolioDetail, setPortfolioDetail] = useState(portfolioItems[0])
  
  
    return (
      <div>
              
        
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

                            <Link  to={'/property/1223'}>
                        <button  >
                            View Property
                        </button>
                            </Link>
                </div>

            <Row className="mb-4 mx-1">
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
                        
                        <Row key={index}  onMouseOver={()=>setPortfolioDetail(data)} className={`${(active==index) ? ("activeportfolio "):("")} newhover portfolioItem  `} onClick={()=>{
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
                <CSSTransition
              key={portfolioDetail.id}
              timeout={500}
              classNames="item"
            >
                <Col className="px-4" >
                <img src={portfolioDetail?.img} className={` property-img`} alt="" style={{width: "100%", }} />
                </Col>
                </CSSTransition>   
            </Row>
            </Container>
        

      </div>
  )
}

export default Portfolio