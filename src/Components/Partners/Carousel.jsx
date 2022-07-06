import React from 'react'
import img1 from '../../Assets/Images/SoldProjectImage.png'
import Carousel from 'react-material-ui-carousel'
import { Col, Row } from 'react-bootstrap';
import { Button, Card, Paper } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function CarouselComponent() {
    var items = [
        {
            name: "Random Name #1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque."
        },
        {
            name: "Random Name #2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque."
        }
        ,
        {
            name: "Random Name #2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ullamcorper elementum vitae sit magna platea nec maecenas nibh. Aliquam hendrerit libero cursus elementum mi amet morbi lacus aliquet. Consectetur commodo, pellentesque ac sed at massa elementum. Viverra at et duis neque."
        }
    ]
    
return (
    <>
      <Carousel   NextIcon={<ArrowForwardIosIcon/>} PrevIcon={<ArrowBackIosIcon/>} animation="slide" style={{overflow:"visible"}} overFlow="visible" navButtonsAlwaysVisible={true}
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'transparent',
                borderRadius: 0,
                color: "#13184F"
            }
        }} 
        navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
                bottom: '0',
                top: 'unset'
            }
        }} 
        >
            { 
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </>
  )
}

function Item(props)
{
    return (
        <Card className="communityCard" style={{width: "50%", margin: "auto",borderRadius:"20px",overFlow:"visible",    boxShadow: " 0px 0px 14px rgba(0, 0, 0, 0.1)"}}>
            <Row>
                <Col className="CarouselCard" xs={6}>
                    <img src={img1} alt="" />
                </Col>
            </Row>

        </Card>
    )
}


export default CarouselComponent