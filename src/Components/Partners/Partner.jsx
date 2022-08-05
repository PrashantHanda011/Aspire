import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../../Assets/Partner/partner.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import CarouselComponent from './Carousel';
import Perfect from '../HomePage/Perfect';
import Graphcards from './Graphcards';
import Graphs from './Graphs';

function Partner() {
  
  return (
    <>
{/* prepare */}
    <div className="container  partner-front my-lg-5 ">
        <div className="row">
          <div  className='col-lg-6  '>
                <h1 className="mt-4">Prepare for takeoff</h1>
                <div className="row my-4 partner-front-subhead ">                  
                  <h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus illum eligendi fugiat error nulla aliquam enim dolores adipisci sed quidem consequatur quod, iste, pariatur eius ratione. Quidem, quasi? Dignissimos, libero!
                  </h5>
                </div>
          </div>
          <div className='col-lg-6'>
                <h4>Animation image</h4>
          </div>
        </div>
    </div>

{/* pick tools */}

    <div className='container-fluid partner-dark-bg'>
    <div className="container my-lg-5 partner-picktool">
          <div className="row d-flex justify-content-around">
              <div className="col-lg-3 ">
                <h4>Pick your tools</h4>
                <p>
                    voluptatum eum dolorum odit cupiditate nihil molestiae ab! Perspiciatis, suscipit recusandae!
                </p>
              </div>

            <div className="col-lg-4">
                <h4> Work smart not hard</h4>
                <p>
                 voluptatum eum dolorum odit cupiditate nihil molestiae ab! Perspiciatis, suscipit recusandae!
                </p>
            </div>
            <div className="col-lg-3">
               <h4>We've got you</h4>
               <p>
              voluptatum eum dolorum odit cupiditate nihil molestiae ab! Perspiciatis, suscipit recusandae!
                </p>
            </div>
          </div>
    </div>


{/* leading the way */}
    
    
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mt-5 mt-lg-0 px-lg-5 pt-lg-3 pb-lg-5 partner-leading">
          <h2>Leading the way in Real Estate</h2>
          <div className="row">
            <div className="col-lg-8 py-lg-3">
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore, temporibus qui voluptas ducimus sint at provident obcaecati magni ipsa.</p>
            </div>
          </div>
          <div className='d-flex align-items-center  partner-leading-star '><span><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></span> <h5>4.5/5 on <a href="/"> Lorem</a>/900+</h5> <p>Reviews</p> </div>
          <div className='d-flex align-items-center  partner-leading-star '><span><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></span> <h5>4.5/5 on <a href="/"> Lorem</a>/900+</h5> <p>Reviews</p> </div>
          <div className='d-flex align-items-center  partner-leading-star '><span><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></span> <h5>4.5/5 on <a href="/"> Lorem</a>/900+</h5> <p>Reviews</p> </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>




{/* do it all */}

    <div className="container partner-doitall py-lg-5">
      <div className="row d-flex mt-5 mt-lg-0 flex-column partner-doitall-head justify-content-center ">
          <h2>Do it all with aspire</h2>
          <p className='text-center  my-lg-2 '>Lorem Lorem, ipsum dolor. ipsum dolor sit amet.</p>
      </div>
      <div className='d-flex flex-wrap my-4 justify-content-between'>
        <Graphcards/>
        <Graphcards/>
        <Graphcards/>
      </div>
    </div>          


    <div className="container">
      <div className="row partner-doit-graph d-flex flex-lg-row flex-column">
        <div className="col px-4 py-3 me-0 me-lg-4 mb-5 bg-white"><Graphs/> </div>
        <div className="col d-flex partner-doit-graph mb-3 align-items-center"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, et minima saepe natus facere accusantium illo eligendi. Non soluta deserunt fugiat mollitia, labore inventore incidunt et in velit? Cupiditate, commodi.</p></div>
      </div>
    </div>
    </div>


    {/* feature project */}

    <div className="container partner-feature-projects my-lg-5">
      <div className="row">
        <div className="col-lg-5 mt-4 mt-lg-0"> <h3>View Featured Projects</h3> </div>
      </div>
      <div className="row h-100 my-lg-5">
      <CarouselComponent/>
      </div>
    </div>

    {/* reviews */}

    <div className="container my-lg-5">
      <div className="row partner-reviews">
        <h4>Reviews</h4>
      </div>
      <div className="row">
      <div className="col-lg-8 partner-reviews-subtitle">
        <h3>Here’s What Other Dealers and Owners have to Say......</h3>
      </div>
      </div>
      <div className="row partner-reviews-container flex-lg-row flex-column">
        <div className="col-lg-4 col-sm-12 my-3 my-lg-0 partner-reviews-card p-lg-4">
              <div className="row pb-lg-2"><h5>Xyz</h5></div>
              <div className="row pb-lg-2"><h6>Owners City</h6></div>
              <div className="row pb-lg-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, amet.</p></div>
        </div>

        <div className="col-lg-4 my-3 my-lg-0 partner-reviews-card p-lg-4">
              <div className="row  pb-lg-2"><h5>Xyz</h5></div>
              <div className="row pb-lg-2"><h6>Owners City</h6></div>
              <div className="row pb-lg-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, amet.</p></div>    
        </div>
        <div className="col-lg-4 my-3 my-lg-0 partner-reviews-card p-lg-4">
              <div className="row pb-lg-2"><h5>Xyz</h5></div>
              <div className="row pb-lg-2"><h6>Owners City</h6></div>
              <div className="row pb-lg-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, amet.</p></div>
        </div>
      </div>
    </div>

    <div className="container-fluid partner-elite">
      <h2 className='px-2'>Join The Elite Club</h2>
    </div>
    <div  className='container-fluid px-0  mb-lg-5 '>
      {/* <div className='perfectSection perfectBg mb-5 partner-findhome'>
          <div className='perfectWriteDiv'>
              
          <h2 className='homeChoiceHead'>Find your perfect home</h2>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
          <br />
          <div className='Link-special-banner partner-find-home-btn' style={{margin: "auto", padding: "10px 0px"}}>Post your requirements</div>

          </div>

      </div> */}
      <Perfect/>
    </div>


  </>
  )
}

export default Partner