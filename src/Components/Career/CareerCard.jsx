import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/Career/Career.css"
import WorkIcon from '@mui/icons-material/Work';
import PaidIcon from '@mui/icons-material/Paid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CareerCard() {
  return (
    <Row className="careerCardDiv my-4 bg-white" style={{cursor: "pointer"}}>
        <Col xs={8}>
            <h4 style={{fontWeight: 600}}>UI/UX Designer</h4>
        </Col>
        <Col xs={11} className="mt-2">
            <p className="mb-0" style={{fontWeight: 400}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veritatis aliquid et ullam dignissimos aspernatur dolorum consequuntur. Maiores voluptatibus ab, commodi adipisci perferendis ipsa nostrum.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, blanditiis. </p>
        </Col>
        <Col className='mt-4 d-flex cardContent' xs={ 6}>
        <div>
          
        </div>
              <div className="CardFacility "><WorkIcon className="me-3" style={{color:"#F47E20"}}/>   <span> <h4>Experince</h4><h5> 2-3 yrs</h5> </span> </div>
              <div className="CardFacility"><PaidIcon className="me-2" style={{color:"#F47E20"}}/> <span ><h4>Salary</h4><h5>2-5 lpa </h5> </span>  </div>
              <div className="CardFacility"><LocationOnIcon className="me-2" style={{color:"#F47E20"}}/> <span ><h4>Location</h4><h5> Noida</h5> </span>  </div>
        </Col>

    </Row>
  )
}

export default CareerCard