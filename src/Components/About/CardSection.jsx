import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AboutTopImage from "../../Assets/Images/AboutTopImage.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function CardSection() {
  return (
      <>
        <div className='cardContent'>
        <h4>Meet Our Team</h4>
        <div className='aboutLine'></div>
            <div className="d-flex align-items-center justify-content-center">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit .</p>
            </div>
        </div>
    <div className=' d-flex flex-column'>

        <div className="col d-flex justify-content-around">
        <div className='teamCardContent col-8'>
                    <img src={AboutTopImage} alt="" className='avatarImage'/>
                    <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut </p>
                    <div className="row about-card-content">
                        <div className="col">
                            <LinkedInIcon/>
                            <h5>Connect with us</h5>
                        </div>
                        <div className="col">
                            <h3>Name</h3>
                            <h5>Designation</h5>
                        </div>
                    </div>

                </div>
        </div>
        
        <div className="col d-flex justify-content-around ">
        <div className='teamCardContent col-8'>
                    <img src={AboutTopImage} alt="" className='avatarImage'/>
                    <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut </p>
                    <div className="row about-card-content">
                        <div className="col">
                            <LinkedInIcon/>
                            <h5>Connect with us</h5>
                        </div>
                        <div className="col">
                            <h3>Name</h3>
                            <h5>Designation</h5>
                        </div>
                    </div>

                </div>
        </div>


        <Row>
            {/* <Col xs={12} className="teamCardCol">
                <div className='teamCardContent'>
                    <img src={AboutTopImage} alt="" className='avatarImage'/>
                    <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut </p>
                    <div className="row about-card-content">
                        <div className="col">
                            <LinkedInIcon/>
                            <h5>Connect with us</h5>
                        </div>
                        <div className="col">
                            <h3>Name</h3>
                            <h5>Designation</h5>
                        </div>
                    </div>

                </div>
            </Col>
            <Col xs={12} className="teamCardCol">
                
                <div className='teamCardContent'>
                    <div>
                    <img src={AboutTopImage} alt="" className='avatarImage'/>
                    <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut </p>
                    <div className="row about-card-content">
                        <div className="col">
                            <LinkedInIcon/>
                            <h5>Connect with us</h5>
                        </div>
                        <div className="col">
                            <h3>Name</h3>
                            <h5>Designation</h5>
                        </div>
                    </div>
                </div>

                </div>

            </Col> */}
        </Row>

    </div>
      </>

  )
}

export default CardSection