import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/Project/Project.css"
import PortfolioImage from "../../Assets/Images/PortfolioImage.png"
import HomeChoiceImg from "../../Assets/Images/PromiseImg.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HomeIcon from '@mui/icons-material/Home';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import {Link} from 'react-router-dom'
import MapviewCard from './MapviewCard'
import Map2 from '../Contact/Map2'
import Portfolio from '../HomePage/Portfolio'
import { FetchPropertyData } from '../API/Api';

function ProjectPortfolio() {
    const [mapview, setmapview] = useState(0);
    const [indexColor, setindexColor] = useState(0)
    const [portfolioItems, setportfolioItems] = useState([])
    const [PortfolioDetail, setPortfolioDetail] = useState()
    const fetchPortfolio = async()=>{
        try {
            const {data} = await FetchPropertyData();
            setportfolioItems(data?.data)
            setPortfolioDetail(data?.data[0])
  
            console.log(data);
        } catch (error) {
            console.log(error)
            
        }
    
    }
    useEffect(() => {
        fetchPortfolio()
    }, [])

    return (
      <div>
              <div className='property'>
              <Container>
              <Row className='project-property-height'>
                <Col xs={6} lg={9}>
                     <h4 className='property-head ms-0'>Property</h4>
                </Col>
                <Col xs={6} lg={3} className='property-sidehead'>
                    <h5 className={mapview==0 ?('map-head-active'):("")} onClick={()=>{
                      setmapview(0);  
                    }}>
                        Listing
                    </h5>
                    <h5 className={mapview==1 ?('map-head-active'):("")} onClick={()=>{
                      setmapview(1);  
                    }}>
                        Map View
                    </h5>
                </Col>
              </Row>
              </Container>
        
        
        {
            mapview==0 ? (
                <>
                <div className='helpPara'>
                </div>
        
            <Container className="portfolioContainer">

            <Row>
               <Portfolio/>
            </Row>
            </Container>
            </>
            ):(<>
                   <div className="container">
                    <div className="row flex-lg-row flex-column-reverse flex-md-column-reverse ">
                        <div className="col map-view-scroll" >
                        {
                            portfolioItems.map((data,index)=>{
                                return     <MapviewCard data={data} key={index}/>
                            })
                        }
                        </div>
                        <div className="col px-4 pt-5 pt-md-0 pt-lg-0">
                            <Map2 height="400px"/>
                        </div>
                    </div>
                   </div> 


            </>)
        }
        

        
    </div>

      </div>
  )
}

export default ProjectPortfolio