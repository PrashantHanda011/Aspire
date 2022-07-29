import React from 'react'
import {Col,Row,Container, CloseButton} from 'react-bootstrap'
import  {NavLink,useLocation} from 'react-router-dom'
import '../../Assets/Common/Navbar.css'
import logo from "../../Assets/Images/logo.png" 
import ListIcon from '@mui/icons-material/List';
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

function NewNav() {
    const location =useLocation();
  return (
    <>
        <Container fluid className="Navbar">
            <Container>
                    <Row>
                        <Col xs={3} className="logo">
                         <NavLink to={'/'}>
                                <img src={logo} alt="img" />                
                         </NavLink>
                        </Col>
                     
                         <Col xs={9} className="Links-Container">
                                    <Col className="Links " >
                                    <NavLink className={location.pathname=='/projects' ? ('Link-active'):("")} to={'/projects'}>
                                        Projects                        
                                    </NavLink>
                                    </Col>
                                    <Col className="Links" >
                                      <NavLink className={location.pathname=='/about' ? ('Link-active'):("")} to={'/about'}>
                                        About Us                        
                                      </NavLink>
                                    </Col>
                                    
                                    <Col className="Links " >
                                        <NavLink  className={location.pathname=='/homeloan' ? ('Link-active'):("")} to={'/homeloan'}>
                                            Home Loan
                                        </NavLink>
                                    </Col>
                                    
                                    <Col className="Links" >
                                        <NavLink className={location.pathname=='/blogs' ? ('Link-active'):("")} to={'/blogs'} >
                                            Blogs
                                        </NavLink>
                                    </Col>

                                    <Col className="Links" >
                                        <NavLink className={location.pathname=='/career' ? ('Link-active'):("")} to={'/career'}>
                                            Careers                        
                                        </NavLink>
                                    </Col>
                                    
                                    <Col className=" Link-special" >
                                        <NavLink  to={'/partners'}>
                                            Partners   
                                        </NavLink>
                                    </Col>
                                    
                                    <Col className=" Link-special" >
                                        <NavLink to={'/contact'}>
                                            Contact Us                        
                                        </NavLink>
                                    </Col>
                         </Col>
                            <Col className="navbar-menu-icon justify-content-end align-items-center">
                              <IconButton>
                                <ListIcon type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"/>
                              </IconButton>
                            </Col>
                    </Row>
            </Container>
        </Container>
<div className="offcanvas offcanvas-end canvas-width " style={{zIndex:"1000000000000",color:"white",backgroundColor:"var(--blueColor)"}} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
  <div></div>
    <CloseIcon style={{color:"white",fontSize:"2rem"}}  data-bs-dismiss="offcanvas"/>
  </div>
  <div className="offcanvas-body ">
  <Col  className="Links-Container-resp">
                                    <Col className="Links " >
                                    <NavLink className={location.pathname=='/projects' ? ('Link-active'):("")} to={'/projects'}>
                                        Projects                        
                                    </NavLink>
                                    </Col>
                                    <Col className="Links" >
                                      <NavLink className={location.pathname=='/about' ? ('Link-active'):("")} to={'/about'}>
                                        About Us                        
                                      </NavLink>
                                    </Col>
                                    
                                    <Col className="Links " >
                                        <NavLink  className={location.pathname=='/homeloan' ? ('Link-active'):("")} to={'/homeloan'}>
                                            Home Loan
                                        </NavLink>
                                    </Col>
                                    
                                    <Col className="Links" >
                                        <NavLink className={location.pathname=='/blogs' ? ('Link-active'):("")} to={'/blogs'} >
                                            Blogs
                                        </NavLink>
                                    </Col>

                                    <Col className="Links" >
                                        <NavLink className={location.pathname=='/career' ? ('Link-active'):("")} to={'/career'}>
                                            Careers                        
                                        </NavLink>
                                    </Col>
                                    
                                    <Col className=" Link-special" >
                                        <NavLink  to={'/partners'}>
                                            Partners   
                                        </NavLink>
                                    </Col>
                                    
                                    <Col className=" Link-special" >
                                        <NavLink to={'/contact'}>
                                            Contact Us                        
                                        </NavLink>
                                    </Col>
                         </Col>
  </div>
</div>
    </>
  )
}


export default NewNav