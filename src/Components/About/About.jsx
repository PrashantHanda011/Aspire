import React,{useEffect} from 'react'
import "../../Assets/About/About.css"
import CardSection from './CardSection'
import Help from '../HomePage/Help'
import HelpImage from "../../Assets/Images/HelpImage.png"
import aboutbannner1 from "../../Assets/Images/aboutbanner1.svg"
import aboutbannner2 from "../../Assets/Images/aboutbanner2.svg"
import HomeChoice from '../HomePage/HomeChoice'
import Portfolio from '../HomePage/Portfolio'
import GetInTouch from '../Contact/GetInTouch'
import joinus from '../../Assets/Images/partner-joinus.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Link} from 'react-router-dom'
import * as scroll from "react-scroll"
function About() {
  
  useEffect(() => {
    console.log(window.scrollY)
    }, [window])
  

  return (
    <>

    <div className="container-fluid py-5">
      <div className="row px-4 d-flex about-card-img">
    
    
        <div className="col-lg-2 about-card-img-1">
          <img src={aboutbannner1} alt="No img" />
        </div>
    
        <div className="col-lg-8  align-self-center d-flex flex-column align-items-center about-banner-content">
          <div className="row"><h2>WHY US</h2></div>
          <div className="row"><h3>Simpler, Faster , Better</h3></div>
          <div className="row"><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo, consectetur voluptate ea incidunt mollitia tempora aut similique soluta pariatur iure culpa optio? Et rerum consequatur, placeat ea aliquid incidunt.</h6></div>
        </div>
    
        <div className="col-lg-2 about-card-img-2">
          <img src={aboutbannner2} alt="No img" />
        </div>
      </div>
    </div>


      <div className="continer-fluid">
            <div className="about-helpDiv ">
              <div className='helpSection'>
                <div className="separatorDiv"></div>
                  <h4>How can we help?</h4>
                  <div className='helpPara'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
                  </div>
                  <img src={HelpImage} style={{width:"100%"}} />
                  {/* <video src="https://www.youtube.com/watch?v=lMHfzIvRoOU"></video> */}
              </div>
              </div>
        </div>

    <div className="container-fluid my-lg-5 p-0">
      <HomeChoice/>
    </div>

    <div className="container-fluid ">
    <div className='helpSection '>
              <div className="separatorDiv"></div>
        <h4>Project Portfolio</h4>
        <div className='helpPara mb-5'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        </div>
        <Portfolio/>
        </div>
    </div>
    <div className="container-fluid px-0 my-5">
      <CardSection/>
    </div>

    <div className="container-fluid about-joinus-container">
    <div className="container mt-5 mb-4 ">
        <div className="row py-2 about-joinus">
          <div className="col d-flex justify-content-center">
            <img src={joinus} alt="" />
          </div>
          <div className="col about-joinus-content ">
            <h4>Join Us</h4>
            <Link to="/career">
            <button>Explore Career <ArrowRightAltIcon style={{fontSize:"1.8rem"}}/> </button>
            </Link>
          </div>
        </div>
    </div>
    </div>
</>
)
}

export default About