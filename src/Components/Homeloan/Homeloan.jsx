import React from 'react'
import '../../Assets/Homeloan/homeloan.css'
import homeloanbanner from '../../Assets/Images/homeloan.svg'
import right from '../../Assets/Images/homeright.svg'
import left from '../../Assets/Images/homeleft.svg'
import partner from '../../Assets/Images/Company1.png'
import Slider from '@mui/material/Slider';
import Chart from './Chart'
import Graphcards from '../Partners/Graphcards'
import Perfect from '../HomePage/Perfect'
import Community from '../HomePage/Community'
function Homeloan() {
  return (
    <>
        <div className="container homeloan my-lg-5">
          
          <div className="row homeloan-head">
            <h3>How it works</h3>
            <h4>Simple and fast</h4>
          </div>

          <div className="row ">
          <img src={left} className="home-left-img" alt="" />
            <div className="col d-flex flex-column justify-content-between">
       
       {/* card1 */}
              
              <div className="row">
                <div className="col homeloan-banner-content "> 
                    <h4>01</h4>
                    <h3>Lorem, ipsum dolor.</h3>
                  <div className='separatorDivhomeloan'></div>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae quos est reprehenderit reiciendis repellat </p>
                </div>
              </div>
     
       {/* card2 */}
              
              <div className="row">
                <div className="col homeloan-banner-content "> 
                    <h4>01</h4>
                    <h3>Lorem, ipsum dolor.</h3>
                  <div className='separatorDivhomeloan'></div>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae quos est reprehenderit reiciendis repellat </p>
                </div>
              </div>

            </div>
  

            <div className="col d-flex align-self-center homeloan-center-img">
              <img src={homeloanbanner} alt="" />
            </div>
            
            <div className="col d-flex flex-column  justify-content-between">
  
          <img src={right} className="home-right-img" alt="" />
       {/* card3 */}
        
            <div className="row mb-lg-5">
                <div className="col homeloan-banner-content mt-4"> 
                    <h4>01</h4>
                    <h3>Lorem, ipsum dolor.</h3>
                  <div className='separatorDivhomeloan'></div>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae quos est reprehenderit reiciendis repellat </p>
                </div>
              </div>
       
       {/* card4 */}
              
              <div className="row mt-lg-3">
                <div className="col homeloan-banner-content "> 
                    <h4>01</h4>
                    <h3>Lorem, ipsum dolor.</h3>
                  <div className='separatorDivhomeloan'></div>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae quos est reprehenderit reiciendis repellat </p>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* homeloan calculator */}

      <div className="container-fluid homeloan-calculator py-lg-5">
        <div className="container">
            <h3>Home Loan Calculator</h3>
        </div>
        <div className="container homeloan-calculator-slider-container">
          <div className="row">
            <div className="col">
              <div className="row mb-lg-5"><h5>Home Loan</h5></div>
             
              <div className="row my-lg-3">
                    <div className="col d-flex flex-column">
                      <div className="row ">
                        <div className='d-flex justify-content-between '><h6>Loan Amount</h6> <h6>RS</h6></div>
                       </div>
                      <div className="row"> 
                      <Slider defaultValue={50} aria-label="Default" style={{color:"var(--orangeColor)"}} valueLabelDisplay="auto" />
                      </div>
                    </div>
              </div>
              <div className="row my-lg-3">
                    <div className="col d-flex flex-column">
                      <div className="row ">
                        <div className='d-flex justify-content-between '><h6>Loan Tenure</h6> <h6>Year</h6></div>
                       </div>
                      <div className="row"> 
                      <Slider defaultValue={50} aria-label="Default" style={{color:"var(--orangeColor)"}} valueLabelDisplay="auto" />
                      </div>
                    </div>
              </div>
              <div className="row my-lg-3">
                    <div className="col d-flex flex-column">
                      <div className="row ">
                        <div className='d-flex justify-content-between '><h6>Rate of Interest</h6> <h6>%</h6></div>
                       </div>
                      <div className="row"> 
                      <Slider defaultValue={50} aria-label="Default" style={{color:"var(--orangeColor)"}} valueLabelDisplay="auto" />
                      </div>
                    </div>
              </div>
             
             
            </div>
            <div className="col ps-5">
              <Chart/>
            </div>
          </div>
        </div>
      </div>


      {/* blue heading */}

      <div className="container-fluid homeloan-blueheading-container">
        <div className="container homeloan-blueheading">
          <div className="row d-flex">
          <div className='d-flex justify-content-between align-items-center'>
            <h3>Ger your laterst Credit Score, FREE</h3>
            <button>Check Now</button>
          </div>
          </div>
        </div>
      </div>



      {/* trending offers */}

      <div className="container-fluid homeload-trending-container py-lg-5">
        <div className="container">
          <div className="row py-lg-4">
            <h3>Trending loans & offers</h3>
          </div>
            <Graphcards/>
          
        </div>
      </div>

{/* our Partner */}
      <div className="container-fluid homeloan-ourpartner-container py-lg-5">
        <div className="container d-flex flex-column homeloan-ourpartner ">
            <h3>Our Partners</h3>
            <h5 className='pb-lg-5'>Get in-depth knowledge about all things related to loans and your finances</h5>
            <div className="row ">
                <div className='d-flex justify-content-between'>
                  <button>Home Loan</button>
                  <button>Personal Loan</button>
                  <button>Loan Against Property</button>
                  <button>Business Loan</button>
                </div>
            </div>
            <div className="row my-lg-5">
                <div className='d-flex justify-content-between flex-wrap'>
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                  <img src={partner} alt="" />
                </div>
            </div>
        </div>
      </div>

{/* perfect home */}
    <div className="container-fluid homeloan-perfecthome px-0 pt-2">
        <Perfect />
    </div>


    {/* community */}
    <div className="container-fluid pb-lg-5 px-0" style={{background:"#ebebeb"}}>
      <Community color="#ebebeb"/>
    </div>

    </>
  )
}

export default Homeloan