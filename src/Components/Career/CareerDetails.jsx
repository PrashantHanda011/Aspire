import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function CareerDetails() {
  return (
    <div>
        <Row>
            <Col xs={9}>
                <h3 style={{color:"#1C1B4D", fontWeight: 600}}>About Company</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum in nisl tincidunt egestas massa dictum. Adipiscing tincidunt egestas tempor pellentesque amet. Condimentum risus morbi ac, condimentum nunc, nisl. Orci, augue lacus adipiscing aliquam.
Dignissim donec egestas laoreet id amet. Et consequat leo commodo, nibh risus consequat, feugiat dui. Suspendisse aliquet consequat nulla pulvinar facilisi diam. Eu velit et diam diam adipiscing sem semper enim eget. Malesuada donec non blandit ac aliquet adipiscing. Nunc laoreet adipiscing turpis id erat. Integer pulvinar et arcu vel, nibh. Mattis elit fermentum mauris eget dui.
 </p>
 <h3 style={{color:"#1C1B4D", fontWeight: 600}}>Roles and Responsibilities</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum in nisl tincidunt egestas massa dictum. </p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum in nisl tincidunt egestas massa dictum. </p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum in nisl tincidunt egestas massa dictum. </p>
                
                <h3 style={{color:"#1C1B4D", fontWeight: 600}}>Work Experience</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum in nisl tincidunt egestas massa dictum. </p>
<div className="applyButton" style={{marginTop: 50}}>Apply Now
</div>
            </Col>
            <Col xs={3}>
                <div style={{width: "90%", margin: "auto"}}>
                <div className="applyButton" style={{width: "100%", margin: "auto"}}>Apply for this job</div>
            <br />
            <p style={{color:"#1C1B4D", fontSize: 18}}>Share with someone interested</p>
            <Row style={{marginBottom: 50}}>
                <Col xs={4} style={{display: "flex", justifyContent: "center"}}>
                    <FacebookRoundedIcon sx={{color: "#1C1B4D80", fontSize: 40}}/>
                </Col>
                <Col xs={4} style={{display: "flex", justifyContent: "center"}}>
                    <InstagramIcon sx={{color: "#1C1B4D80", fontSize: 40}}/>
                </Col>
                <Col xs={4} style={{display: "flex", justifyContent: "center"}}>
                    <TwitterIcon sx={{color: "#1C1B4D80", fontSize: 40}}/>
                </Col>
            </Row>
            <h3>Other Openings</h3>
            <br />
            <h4 style={{color:"#1C1B4D", fontWeight: 600}}>UI Developer</h4>
            <p style={{color: "#1C1B4D"}}>New Delhi | 3 Years Experience</p>
            <h4 style={{color:"#1C1B4D", fontWeight: 600}}>UI Developer</h4>
            <p style={{color: "#1C1B4D"}}>New Delhi | 3 Years Experience</p>
            <h4 style={{color:"#1C1B4D", fontWeight: 600}}>UI Developer</h4>
            <p style={{color: "#1C1B4D"}}>New Delhi | 3 Years Experience</p>
                </div>

            </Col>
        </Row>
    </div>
  )
}

export default CareerDetails