import React,{ useState } from 'react'
import "../../Assets/HomePage/Perfect.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import Checkbox from '@mui/material/Checkbox';


function Perfect() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange1=()=>{

  }
  return (
    <>

    <div className='perfectSection perfectBg homechoiceSection'>
        <div className='perfectWriteDiv'>
            
        <h2 className='homeChoiceHead'>Find your perfect home</h2>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque.</p>
        <br />
        <div className='Link-special-banner link-width' onClick={handleShow} style={{margin: "auto", padding: "10px 0px"}}>Post your requirements</div>

        </div>

    </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        style={{zIndex:"100000000"}}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Your Requirement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
                <Form.Group className="mb-3  px-2" controlId="formBasicName">
                <TextField id="outlined-password-input" name='fullname' onChange={handleChange1} size="small" label="Full Name" type="text" autoComplete="current-password"/>
              </Form.Group>
                <Form.Group className="mb-3  px-2" controlId="formBasicName">
                <TextField id="outlined-password-input" name='Phone' onChange={handleChange1} size="small" label="Phone no." type="tel" autoComplete="current-password"/>
              </Form.Group>
                <Form.Group className="mb-3  px-2" controlId="formBasicName">
                <TextField id="outlined-password-input" name='email' onChange={handleChange1} size="small" label="Email Address" type="email" autoComplete="current-password"/>
              </Form.Group>
              <Form.Group className="mb-3 my-3 px-3 d-flex flex-column" controlId="formBasicName">
                  <span style={{color:"black",fontSize:"20px",fontWeight:"600"}} className="my-2">Area</span>
                    <span><Checkbox size="sm"/> North Banglore </span>
                    <span><Checkbox size="sm"/> South Banglore </span>
                    <span><Checkbox size="sm"/> West Banglore </span>
                    <span><Checkbox size="sm"/> Easy Banglore </span>
                    <span><Checkbox size="sm"/> Central Banglore </span>
                </Form.Group>
            </div>
            <div className="col">
            <Form.Group className="mb-3 my-3 px-3 d-flex flex-column" controlId="formBasicName">
                  <span style={{color:"black",fontSize:"20px",fontWeight:"600"}} className="my-2">Price Range</span>
                  <div className='d-flex flex-wrap'>
                    <span><Checkbox size="sm"/> Upto 50 lacs </span>
                    <span><Checkbox size="sm"/> 50 to 70 lacs </span>
                    <span><Checkbox size="sm"/> 75 lacs to 1 crore </span>
                    <span><Checkbox size="sm"/> 1 crore to 2 crore </span>
                    <span><Checkbox size="sm"/> more than 2 crore </span>
                  </div>
                </Form.Group>
            <Form.Group className="mb-3 my-3 px-3 d-flex flex-column" controlId="formBasicName">
                  <span style={{color:"black",fontSize:"20px",fontWeight:"600"}} className="my-2">Interested In : </span>
                  <div className='d-flex flex-wrap'>
                    <span><Checkbox size="sm"/> 1 BHK </span>
                    <span><Checkbox size="sm"/> 2 BHk </span>
                    <span><Checkbox size="sm"/> 2.5 BHK </span>
                    <span><Checkbox size="sm"/> 3 BHK </span>
                    <span><Checkbox size="sm"/> 4 BHK </span>
                  </div>
                </Form.Group>
            <Form.Group className="mb-3 my-3 px-3 d-flex flex-column" controlId="formBasicName">
                  <span style={{color:"black",fontSize:"20px",fontWeight:"600"}} className="my-2">Other Specification : </span>
                  <div className='d-flex flex-wrap'>
                  <Form.Control
                    type="password"
                    id="inputPassword5"
                    size="lg"
                    aria-describedby="passwordHelpBlock"
                  />

                  </div>
                </Form.Group>
            </div>
          </div>
          <Button variant="primary" className="ms-2 my-3 p-2" type="submit" style={{backgroundColor:"var(--orangeColor)",border:"none"}}>
            Request Info
          </Button>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Perfect