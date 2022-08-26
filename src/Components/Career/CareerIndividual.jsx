import React,{useEffect,useState} from 'react'

import { FetchSingleCareer } from '../API/Api';
import { useParams } from 'react-router-dom';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton
} from "react-share";

function CareerIndividual() {
  const [SingleCareer, setSingleCareer] = useState()
  const param = useParams();


  const fetchCareer = async()=>{
    try {
      const careerId = {
        id:param?.id
      }
      const data = await FetchSingleCareer(careerId)
      setSingleCareer(data?.data?.data);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchCareer()
  }, [])
  
  const path = window.location.href

  
  return (
    <>
      <div className="container-fluid " style={{backgroundColor:"#ebebeb"}} >
            {/* title */}
            <div className="container d-flex py-5 flex-lg-row flex-column flex-md-row">
            
    <div className="container  d-flex   flex-column  pt-3">
        <div className=" d-flex flex-column justify-content-between job-title pb-5  ">
            
            <figure className='CareeBanner '>
              <img src={SingleCareer?.bannerUrl} alt="" />
            </figure>

            <div className='d-flex justify-content-between align-items-center mt-4'>
            <h1>{SingleCareer?.name}</h1>
            <button>Apply Now</button>
            </div>
        </div>

            <div className="px-3">
                <p style={{wordBreak:"break-word"}}>{SingleCareer?.description}</p>
            </div>
      </div>
         
            <div className=" mt-5 mt-lg-0 px-4 col-lg-4 col-md-4 col-12 jobdetails pt-3">
                <h3>Job Details</h3>
                <hr />
                
                <div  className='d-flex jobdetails-feature'>
                  <h4>Experience - </h4>
                  <p>{SingleCareer?.experience}</p>
                </div>
                <br />

                <div  className='d-flex jobdetails-feature'>
                  <h4>Salary - </h4>
                  <p>{SingleCareer?.salary}</p>
                </div>
                <br />
                
                <div  className='d-flex jobdetails-feature'>
                  <h4>Location - </h4>
                  <p>{SingleCareer?.location}</p>
                </div>
                <br />

                <h3>Share This Post</h3>
                <hr />
                <div  className='d-flex jobdetails-share'>
                <span className="my-2 d-flex">
                        <WhatsappShareButton title="Loved This Post" url={ path}>
                            <WhatsappIcon size={42} round={false} borderRadius={10} />
                        </WhatsappShareButton>
                        </span>

                        <span className="my-2">
                        <TwitterShareButton title="Loved This Post" url={ path}>
                            <TwitterIcon size={42} round={false} borderRadius={10} />
                        </TwitterShareButton> 
                        </span>

                        <span className="my-2">
                        <LinkedinShareButton title="Loved This Post" url={ path}>
                            <LinkedinIcon size={42} round={false} borderRadius={10} />
                        </LinkedinShareButton>
                        </span>


                        <span className="my-2">
                        <FacebookShareButton title="Loved This Post" url={ path}>
                            <FacebookIcon size={42} round={false} borderRadius={10} />
                        </FacebookShareButton>
                        </span>

                </div>
                <br />

            </div>

</div>
      </div>
    </>
  )
}

export default CareerIndividual