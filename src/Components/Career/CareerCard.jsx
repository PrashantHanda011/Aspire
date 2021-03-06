import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../Assets/Career/Career.css"
import WorkIcon from '@mui/icons-material/Work';
import PaidIcon from '@mui/icons-material/Paid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {   Container, Form, Modal } from 'react-bootstrap'
function CareerCard(prop) {
const [showModal, setshowModal] = useState(false)

  const triggerModal = () => {
    if(showModal ==false){
      setshowModal(true);
    }
  }
  const handleClose = () => {
    if(showModal ==true){
      setshowModal(false);
    }
  }


  return (
    <>
    <Row onClick={()=>{triggerModal()}} className="careerCardDiv  bg-white" style={{cursor: "pointer"}}>
        <Col xs={8}>
            <h4 style={{fontWeight: 600}}>{prop.department}</h4>
        </Col>
        <Col xs={11} className="mt-2">
            <p className="mb-0" style={{fontWeight: 400}}>{prop.description}</p>
        </Col>
        <Col className='mt-4 d-flex cardContent' xs={ 6}>
        <div>
          
        </div>
              <div className="CardFacility "><WorkIcon className="me-3" style={{color:"#F47E20"}}/>   <span> <h4>Experince</h4><h5> {prop.experience}</h5> </span> </div>
              <div className="CardFacility"><PaidIcon className="me-2" style={{color:"#F47E20"}}/> <span ><h4>Salary</h4><h5>{prop.salary} </h5> </span>  </div>
              <div className="CardFacility"><LocationOnIcon className="me-2" style={{color:"#F47E20"}}/> <span ><h4>Location</h4><h5> {prop.location}</h5> </span>  </div>
        </Col>

        <Col className='d-flex justify-content-end' xs={6}>
          <a className='align-self-end text-decoration-none' href="#">Read More</a>
        </Col>


    </Row>
    {
      showModal ?(
        <Modal show={showModal} onHide={handleClose} style={{marginTop: "100px",width:"100vw"}}>
                        <Modal.Header closeButton >
                <Modal.Title>Job You Selected</Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <Row onMouseOver={()=>{console.log("hello")}} className="careerCardDiv  bg-white" style={{cursor: "pointer"}}>
        <Col xs={8}>
            <h4 style={{fontWeight: 600}}>{prop.department}</h4>
        </Col>
        <Col xs={11} className="mt-2">
            <p className="mb-0" style={{fontWeight: 400}}> {prop.description}</p>
        </Col>
        <Col className='mt-4 d-flex cardContent' xs={ 6}>
        <div>
          
        </div>
              <div className="CardFacility "><WorkIcon className="me-3" style={{color:"#F47E20"}}/>   <span> <h4>Experince</h4><h5> {prop.experience}</h5> </span> </div>
              <div className="CardFacility"><PaidIcon className="me-2" style={{color:"#F47E20"}}/> <span ><h4>Salary</h4><h5>{prop.salary} </h5> </span>  </div>
              <div className="CardFacility"><LocationOnIcon className="me-2" style={{color:"#F47E20"}}/> <span ><h4>Location</h4><h5> {prop.location}</h5> </span>  </div>
        </Col>

       
    </Row>

      </Modal.Body>

            </Modal>

      ):(null)
    }
     </>

  )
}

export default CareerCard