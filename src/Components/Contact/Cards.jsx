import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Assets/Contact/Cards.css"
import CallIcon from '@mui/icons-material/Call';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

function Cards() {
  return (
    <div className='contactDiv'>

        <div className='contactCard'></div>
            <Row className="contactCardRow">
                <Col className="cardIndividual">
                  <div className='cardIn'>
                  <CallIcon sx={{fontSize: 40}}/>
                  <h4 style={{marginTop: 10}}>Talk to Sales Team</h4>
                    <p>
                    Address: No 45/11, First Floor,</p>
                   <p> North Park Road, Kumara Park East,</p>
                   <p> Bengaluru, Karnataka 560 001</p>
                   <h5>-91 9833445577</h5>                  
                   
                   </div>
                  
                    
                </Col>
                <Col className="cardIndividual">
                <div className='cardIn'>
                  
                  <SupportAgentRoundedIcon sx={{fontSize: 40}}/>
                    <h4 style={{marginTop: 10}}>Talk to Sales Team</h4>
                    <p>
                    Address: No 45/11, First Floor,</p>
                   <p> North Park Road, Kumara Park East,</p>
                   <p> Bengaluru, Karnataka 560 001</p>
                   <div style={{backgroundColor: "#F47E20", color: "white", padding: 10, borderRadius: 10, width: "40%", margin: "auto"}}>Contact Support</div>


</div>
                </Col>
            </Row>

    </div>
  )
}

export default Cards