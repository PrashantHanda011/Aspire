import { Input } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function CareerInput() {
  return (
    <div className='careerInputDiv'>
        <Row>
            <Col xs={6}>
                <div className='inputDiv'>
                    <Row>
                        <Col xs={1}>
                        <SearchIcon style={{color: "#0000003D"}}/>
                        </Col>
                        <Col xs={10}>
                        <input placeholder='Hello' className='inputCar'/>
                        </Col>
                        <Col xs={1} style={{marginLeft: "-5px"}}>
                            <CancelPresentationIcon style={{color: "#0000003D"}}/>
                        </Col>
                    </Row>
                    
                
                </div>
                
            </Col>
            <Col xs={3}>
                <div className='inputDiv'>
                    <Row>
                        <Col xs={1}>
                        <LocationOnIcon style={{color: "#0000003D"}}/>
                        </Col>
                        <Col xs={10}>
                        <input placeholder='Location' className='inputCar'/>
                        </Col>
                    </Row>
                    
                
                </div>
                
            </Col>
            <Col xs={2} >
                <div className='buttonDiv' style={{backgroundColor:" #F47E20", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
                    <h6>Search</h6>
                </div>
                
            </Col>
        </Row>
    </div>
  )
}

export default CareerInput