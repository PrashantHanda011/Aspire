import React from 'react'
import "../../Assets/Project/Project.css"
import PortfolioImage from "../../Assets/Images/PortfolioImage.png"
import Map2 from '../Contact/Map2'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HomeIcon from '@mui/icons-material/Home';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import {Link} from 'react-router-dom'

function MapviewCard() {
  return (
    <>
            <div className="col map-viewimg d-flex flex-column" style={{position:"relative"}}>
                <img src={PortfolioImage} alt="" />

      <div className='propertyDescription-map-view'>
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
            </div>
    </>
  )
}

export default MapviewCard