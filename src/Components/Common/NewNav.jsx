import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import  {NavLink,useLocation} from 'react-router-dom'
import '../../Assets/Common/Navbar.css'
import logo from "../../Assets/Images/logo.png" 
import ListIcon from '@mui/icons-material/List';
import { IconButton } from '@mui/material'

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
                                <ListIcon />
                              </IconButton>
                            </Col>
                    </Row>
            </Container>
        </Container>
    </>
  )
}

export default NewNav