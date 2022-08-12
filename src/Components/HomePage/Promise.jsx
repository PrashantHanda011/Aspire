import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/HomePage/Help.css"
import PromiseImage from "../../Assets/Images/PromiseImg.png"
import AOS from 'aos'

function Promise() {
  AOS.init();

  return (
    <div  style={{marginTop: 70, overflow: "hidden"}} className='container-fluid position-relative'>
  <div className=' promiseSection d-flex flex-lg-row flex-column-reverse flex-md-row align-items-center pb-5'>
                        <Col lg={5} md={7} xs={12}>
                        <div className="separatorDiv"></div>
                    <h4 style={{fontSize: 30}}>Aspire Promise</h4>
                    <Row>
                        <Col>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae 
                        sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. 
                        Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae 
                        sit magna platea nec maecenas nibh. Aliqsuam hendrerit libero cursus elementum mi amet.
                        </Col>

                    </Row>

                        </Col>
            

              <Col lg={7} md={5} xs={12} className="ps-0 ps-md-3 ps-lg-5">
              {/* data-aos="fade-left " */}
                <div data-aos="fade-left" data-aos-duration="1400"   className="aspirePromise-img">
                <ul>
                  <li data-aos="fade-up" data-aos-duration="1600">Lorem ipsum dolor sit amet.</li>
                  <li data-aos="fade-up" data-aos-duration="1800">Lorem ipsum dolor sit amet.</li>
                  <li data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet.</li>
                  <li data-aos="fade-up" data-aos-duration="2200">Lorem ipsum dolor sit amet.</li>
                </ul>
                </div>
              </Col>
</div>

</div>
  )
}

export default Promise