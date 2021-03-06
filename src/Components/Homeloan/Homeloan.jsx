import React,{useState} from 'react'
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
import BlogCard from '../Blogs/BlogCard'
import { Row,Col,Container } from 'react-bootstrap'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';

function Homeloan() {
  const [show1, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [expertData, setexpertData] = useState({
    name:"",
    email:"",
    phone:"",

  })

  const [homeLoanEligibilty, sethomeLoanEligibilty] = useState({
    fullname:"",
    mobile:"",
    requiredLoan:"",
    occupation:"",
    monthlyNetSalary:"",
    CurrentlyMonthlySalary:"",
    tenure:"",
    date:""
  })
  const handleChange=(e)=>{
    const {name} = e.target;
    setexpertData({...expertData,[name] : e.target.value})
  }
  
  const handleChange1=(e)=>{
    const {name} = e.target;
    sethomeLoanEligibilty({...homeLoanEligibilty,[name] : e.target.value})
  }



  // modal

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);



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
            <h3>Get Instant Home Loans at BEST Prices</h3>
            <button onClick={handleShow1}>Talk To Expert</button>
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
          
            <div className="row my-lg-2">
                <div className='d-flex justify-content-between homeloan-brandscroll overflowY-hidden'>
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

      {/* blue heading */}

      <div className="container-fluid homeloan-blueheading-container">
        <div className="container homeloan-blueheading">
          <div className="row d-flex">
          <div className='d-flex justify-content-between align-items-center'>
            <h3>Check your eligibilty for Special EMI Options</h3>
            <button onClick={handleShow2}>Get Started</button>
          </div>
          </div>
        </div>
      </div>


    <div style={{backgroundColor:"#ebebeb"}}  className="container-fluid py-5 px-0">
    <h3 className="blogMainHeading m-0 ps-5 py-5">Featured Blogs</h3>         
                <Row  className="d-flex justify-content-center">
                    <Col xs={10} className="d-flex  BlogsRow   align-items-center">
                      <BlogCard />
                      <BlogCard/>
                      <BlogCard/>
                    </Col>
                      <Col xs={1} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span> 
                      </Col>
                </Row>

    </div>
      
{/* perfect home */}
    <div className="container-fluid homeloan-perfecthome px-0 pt-2">
        <Perfect />
    </div>


    {/* community */}
    <div className="container-fluid pb-lg-5 px-0" style={{background:"#ebebeb"}}>
      <Community color="#ebebeb"/>
    </div>


    <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}

      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Talk To Expert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
    
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleChange} placeholder="Your Name" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
      </Form.Group>
     
        <Button variant="primary" type="submit" style={{backgroundColor:"var(--orangeColor)",border:"none"}}>
          Submit
        </Button>
      </Form>
    </Modal.Body>
      </Modal>
   
   
    <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Home Eligibility</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="d-flex  flex-wrap">
          
          {/* fullname */}
            <Form.Group className="mb-3 col-4 px-2" controlId="formBasicName">
            <TextField id="outlined-password-input" name='fullname' onChange={handleChange1} size="small" label="Full Name" type="text" autoComplete="current-password"/>
          </Form.Group>
        
        {/* mobile */}
          <Form.Group className="mb-3 col-4 px-2" controlId="formBasicEmail">
          <TextField id="outlined-password-input" name="mobile" onChange={handleChange1} size="small" label="Mobile No." type="tel" autoComplete="current-password"/>
          </Form.Group>

        {/* req loan */}

          <Form.Group className="mb-3 col-4 px-2" controlId="formBasicPassword">
            <TextField id="outlined-start-adornment" 
            name="requiredLoan"
            InputProps={{
              startAdornment: <InputAdornment position="start">???</InputAdornment>,
            }}
            onChange={handleChange1} size="small" label="Required Loan"  type="tel" autoComplete="current-password"/>
          </Form.Group>
          
          {/* select */}

          <Form.Group className="mb-3 col-4 px-2 my-3"   controlId="formBasicPassword">
          <Form.Select aria-label=" select example " name="occupation" onChange={handleChange1}  style={{outline:"none",width:"94%",padding:"8px 10px "}}>
              <option>Occupation Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          {/* monthly salary */}

          <Form.Group className="mb-3 col-4 px-2 my-3"  controlId="formBasicPassword">
            <TextField id="outlined-start-adornment" 
            name="monthlyNetSalary"
            style={{outline:"none",width:"94%"}}
              InputProps={{
                startAdornment: <InputAdornment position="start">???</InputAdornment>,
              }}
              onChange={handleChange1} size="small" label="Monthly Net Salary"  type="tel" autoComplete="current-password"/>
          </Form.Group>

        {/* monthly emi  */}

          <Form.Group className="mb-3 col-4 px-2 my-3" controlId="formBasicPassword">
            <TextField id="outlined-start-adornment"
                name="CurrentlyMonthlySalary" 
                InputProps={{
                  startAdornment: <InputAdornment position="start">???</InputAdornment>,
                }}
                onChange={handleChange1} size="small" label="Currently Monthly EMIs"  type="tel" autoComplete="current-password"/>
          </Form.Group>

          {/* tenure */}

          <Form.Group className="mb-3 col-4 px-2 my-3" controlId="formBasicPassword">
          <TextField id="outlined-start-adornment"
          style={{outline:"none",width:"94%"}} 
                name="tenure"
                InputProps={{
                  startAdornment: <InputAdornment position="start">???</InputAdornment>,
                }}
                onChange={handleChange1} size="small" label="Tenure(Years)"  type="tel" autoComplete="current-password"/>
          </Form.Group>
        
          {/* date */}
          
          <Form.Group className="mb-3 col-4 px-2 my-3" controlId="formBasicPassword">
              <Form.Control
              style={{outline:"none",width:"94%"}}
                type="date"
                name="date"
                id="inputPassword5"
                onChange={handleChange1}
              />
          </Form.Group>
        
          </div>

          <Button variant="primary" className="ms-2 my-3 p-2" type="submit" style={{backgroundColor:"var(--orangeColor)",border:"none"}}>
            Check Eligibility
          </Button>

        </Modal.Body>
      </Modal>




    </>
  )
}

export default Homeloan