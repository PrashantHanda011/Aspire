import React,{useEffect} from 'react'
import "../../Assets/About/About.css"
import CardSection from './CardSection'
import Help from '../HomePage/Help'
import HelpImage from "../../Assets/Images/HelpImage.png"
import aboutbannner1 from "../../Assets/Images/aboutUsleft.svg"
import aboutbannner2 from "../../Assets/Images/aboutUsright.svg"
import HomeChoice from '../HomePage/HomeChoice'
import Portfolio from '../HomePage/Portfolio'
import GetInTouch from '../Contact/GetInTouch'
import joinus from '../../Assets/Images/about-joinus.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Link} from 'react-router-dom'
import AOS from 'aos'

function About() {
  AOS.init();
  useEffect(() => {
    console.log(window.scrollY)
    }, [window])
  

  return (
    <>

    <div className="container-fluid py-5">
      <div className="row px-4 d-flex about-card-img">
    
    
        <div className="col-lg-2 col-md-3 col-2 about-card-img-1"
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" 
        >
          <img src={aboutbannner1}  alt="No img" />
        </div>
    
        <div
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" 
         className="col-lg-8 col-12 col-md-6 align-self-center d-flex flex-column align-items-center about-banner-content">
          <div className="row"><h2>WHY US</h2></div>
          <div className="row"><h3>Simpler, Faster , Better</h3></div>
          <div className="row"><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo, consectetur voluptate ea incidunt mollitia tempora aut similique soluta pariatur iure culpa optio? Et rerum consequatur, placeat ea aliquid incidunt.</h6></div>
        </div>
    
        <div
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1600"
     data-aos-once="true"  
        className="col-lg-2 col-2 col-md-3 about-card-img-2 "  >
          <img src={aboutbannner2}  alt="No img" />
        </div>
      </div>
    </div>


      <div className="continer-fluid">
            <div className="about-helpDiv ">
              <div className=' about-helpsection helpSection '>
                <div className="separatorDiv"></div>
                  <h4>How can we help?</h4>
                  <div className='helpPara'>
                  <p>Aspire is a one-stop solution designed to make your home buying experience as pleasurable as possible. If you are looking for your perfect abode in the most sought-after locations, let’s go get it! 👇</p>
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
        <p>Our projects are located in prime locations throughout the city. They offer the choicest of features that your whole family will love. You'll like our projects so much, that you will find it difficult to say ‘no’.</p>
        </div>
        <Portfolio/>
        </div>
    </div>
    <div className="container-fluid px-0 my-5  px-0 ">
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