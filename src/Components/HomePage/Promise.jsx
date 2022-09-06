import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Help.css"
import PromiseImage from "../../Assets/Images/promise.svg"
import AOS from 'aos'

function Promise() {
  AOS.init();

  return (
    <div  style={{marginTop: 70, overflow: "hidden"}} className='container-fluid position-relative'>
  <div className=' promiseSection d-flex flex-lg-row flex-wrap flex-column-reverse flex-md-row align-items-center pb-5'>
                        <Col lg={5} xs={12}>
                        <div className="separatorDiv"></div>
                    <h4 style={{fontSize: 30}}>Aspire Promise</h4>
                    <Row>
                        <Col>
                        Whether you are looking for your first dream home or want to invest in a trusted project to get good returns, our team is there to help you at every step. To give you the finest property for your hard-earned money, we bring to you projects that will have the following:
                        </Col>

                    </Row>

                        </Col>
            

              <Col lg={7} md={12} xs={12} className="ps-0 ps-md-3  ps-lg-5">
              {/* data-aos="fade-left " */}
                {/* <div data-aos="fade-left" data-aos-duration="1400"   className="aspirePromise-img">
                <ul>
                  <li data-aos="fade-up" data-aos-duration="1600">Lorem ipsum dolor sit amet.</li>
                  <li data-aos="fade-up" data-aos-duration="1800">Lorem ipsum dolor sit amet.</li>
                  <li data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet.</li>
                  <li data-aos="fade-up" data-aos-duration="2200">Lorem ipsum dolor sit amet.</li>
                </ul>
                </div> */}
                <figure  data-aos="fade-up-left" data-aos-duration="3000" className='w-100 mt-5 mt-lg-0'>
                  <img src={PromiseImage} alt="promise " className='w-100'/>
                </figure>
              </Col>
</div>

</div>
  )
}

export default Promise