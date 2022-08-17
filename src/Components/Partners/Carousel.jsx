import React,{useState,useEffect} from 'react'
import img1 from '../../Assets/Images/SoldProjectImage.png'
import Carousel from 'react-material-ui-carousel'
import { Col, Row } from 'react-bootstrap';
import { Button, Card, Paper } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FetchProjectImage } from '../API/Api';

function CarouselComponent() {

    const [Images, setImages] = useState([])

    const FetchImages = async() =>{
        try {
            const data = await FetchProjectImage(); 
                setImages(data?.data?.data)
        } catch (error) {
                console.log(error)
        }
    }

    useEffect(() => {
        FetchImages();
    }, [])
    

    
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
                Images?.map( (item, i) => <Item key={i} item={item?.image} /> )
            }
        </Carousel>
    </>
  )
}

function Item(prop)
{
    return (
        <Card className="communityCard" style={{width: "60%", margin: "auto",borderRadius:"20px",overFlow:"visible",    boxShadow: " 0px 0px 14px rgba(0, 0, 0, 0.1)"}}>
                    <img src={prop?.item} className='w-100' alt="" />

        </Card>
    )
}


export default CarouselComponent