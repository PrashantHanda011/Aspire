import React from 'react'
import TopNav from '../Common/TopNav'
import Cards from './Cards'
import ContactUsTop from "../../Assets/Images/ContactUsTop.png"
import "../../Assets/Contact/ContactUs.css"
import GetInTouch from './GetInTouch'
import ContactForm from './ContactForm'
import BottomFoot from '../Common/BottomFoot'
import Wearehere from './Wearehere'
import Community from '../HomePage/Community'
import NewNav from '../Common/NewNav'
function ContactUs() {
  return (
    <>
    {/* <TopNav/> */}
    <Wearehere/>
    <Community/>
    <GetInTouch/>
    </>
  )
}

export default ContactUs