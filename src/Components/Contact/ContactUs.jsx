import React from 'react'
import TopNav from '../Common/TopNav'
import Cards from './Cards'
import ContactUsTop from "../../Assets/Images/ContactUsTop.png"
import "../../Assets/Contact/ContactUs.css"
import GetInTouch from './GetInTouch'
import ContactForm from './ContactForm'
import BottomFoot from '../Common/BottomFoot'

function ContactUs() {
  return (
    <>
    <TopNav/>
    <img src={ContactUsTop} style={{width: "100%", height: "200px"}} />
    <GetInTouch/>
    <ContactForm/>
    <Cards/>
    <BottomFoot/>
    </>
  )
}

export default ContactUs