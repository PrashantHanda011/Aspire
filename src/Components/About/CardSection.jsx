import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AboutTopImage from "../../Assets/Images/AboutTopImage.png"

function CardSection() {
  return (
      <>
          <div className='cardSectionTop'>
        <div className='cardContent'>
        <h4>About Us</h4>
        <div className='aboutLine'></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit .</p>
        </div>
        
    </div>
    <div className='teamCard'>
        <Row>
            <Col xs={6} className="teamCardCol">
                <div className='teamCardContent'>
                    <img src={AboutTopImage} alt="" className='avatarImage'/>
                    <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut </p>
                    <h3>Name</h3>
                    <h5>Designation</h5>
                </div>
            </Col>
            <Col xs={6} className="teamCardCol">
                
                <div className='teamCardContent'>
                    <div>
                    <img src={AboutTopImage} alt="" className='avatarImage'/>
                    <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut </p>
                    <h3>Name</h3>
                    <h5>Designation</h5>

                </div>

                </div>

            </Col>
        </Row>

    </div>
      </>

  )
}

export default CardSection